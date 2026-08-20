#!/usr/bin/env node
/**
 * Guards the two lines Google actually prints for a docs page: the title and
 * the meta description.
 *
 * Before 2026-08-20 every one of the 612 pages served the same English site
 * description, and 36 Dutch pages carried the English title, so the Dutch
 * default locale advertised itself in English. Both are now per page and per
 * locale, and this check keeps them that way.
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const DOCS = path.join(process.cwd(), 'docs')
const LOCALES = ['en', 'de', 'fr']          // nl is the unprefixed root locale
const MAX = 155
const MIN = 40

// Titles that are legitimately spelled the same as the English one.
const SHARED_TITLES = new Set([
  'nl:features/dashboard.md',
  'de:features/dashboard.md',
  'de:faq/index.md',
  'fr:faq/index.md',
  'fr:features/documents.md',
  'fr:getting-started/introduction.md',
])

async function walk(dir) {
  const out = []
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.') || ent.name === 'node_modules' || ent.name === 'public') continue
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...(await walk(full)))
    else if (ent.name.endsWith('.md')) out.push(full)
  }
  return out
}

function frontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!m) return {}
  const out = {}
  for (const key of ['title', 'description']) {
    const hit = m[1].match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))
    if (hit) out[key] = hit[1].trim().replace(/^["'](.*)["']$/, '$1')
  }
  return out
}

function localeOf(rel) {
  const first = rel.split('/')[0]
  return LOCALES.includes(first) ? first : 'nl'
}

function neutral(rel) {
  const first = rel.split('/')[0]
  return LOCALES.includes(first) ? rel.slice(first.length + 1) : rel
}

const files = await walk(DOCS)
const pages = []
for (const full of files) {
  const rel = path.relative(DOCS, full)
  pages.push({ rel, locale: localeOf(rel), neutral: neutral(rel), ...frontmatter(await fs.readFile(full, 'utf8')) })
}

const errors = []
const seen = new Map()          // locale -> Map(description -> rel)
const english = new Map()       // neutral path -> English title

for (const p of pages.filter((p) => p.locale === 'en')) english.set(p.neutral, p.title)

for (const p of pages) {
  const { rel, description, title, locale } = p

  // Checked first and outside the description guard: a page missing its
  // description must still have its title checked, or one defect hides another.
  const en = english.get(p.neutral)
  if (locale !== 'en' && title && en && title.toLowerCase() === en.toLowerCase() && !SHARED_TITLES.has(`${locale}:${p.neutral}`)) {
    errors.push(`${rel}: title "${title}" is still the English one; translate it or allowlist it in SHARED_TITLES`)
  }

  if (!description) {
    errors.push(`${rel}: no description in frontmatter`)
    continue
  }
  if (description.length > MAX) errors.push(`${rel}: description is ${description.length} chars (max ${MAX})`)
  if (description.length < MIN) errors.push(`${rel}: description is ${description.length} chars (min ${MIN})`)
  if (/[—–]/.test(description)) errors.push(`${rel}: description contains an em-dash or en-dash`)
  if (description.includes('"')) errors.push(`${rel}: description contains a double quote, which the chatbot frontmatter parser does not unescape`)

  if (!seen.has(locale)) seen.set(locale, new Map())
  const bucket = seen.get(locale)
  if (bucket.has(description)) errors.push(`${rel}: description is identical to ${bucket.get(description)}`)
  else bucket.set(description, rel)

}

if (errors.length) {
  console.error(`❌ ${errors.length} problem(s) in page titles/descriptions:\n`)
  for (const e of errors) console.error('  ' + e)
  process.exit(1)
}
console.log(`✅ ${pages.length} pages: every one has its own description (${MIN}-${MAX} chars, unique per locale) and a localized title`)
