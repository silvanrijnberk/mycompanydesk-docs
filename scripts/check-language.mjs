#!/usr/bin/env node
/**
 * Guards the German and French prose against the two ways this corpus has been
 * damaged before.
 *
 * 1. German written with ASCII fallbacks for umlauts and eszett ("oeffne",
 *    "ueberfaellig", "einschliesslich") and in the du-form, where AGENTS.md
 *    rule 2 and the rest of the German docs use the Sie-form.
 * 2. French written without accents ("Pour creer un projet") and with the
 *    apostrophe stripped to a space ("l entreprise").
 *
 * Both came from a translation pipeline that could not emit non-ASCII, so they
 * arrive in bulk rather than one typo at a time. Word lists, not heuristics:
 * every entry below is a spelling that is simply not a word in its language.
 */
import fs from 'node:fs/promises'
import path from 'node:path'

const DOCS = path.join(process.cwd(), 'docs')

// German words that are legitimately spelled with these letter pairs.
const DE_LEGIT = new Set(`zuerst zueinander manuell manuelle manuellen manueller manuelles individuell
individuelle individuellen individuelles visuell visuelle visuellen aktuell aktuelle aktuellen aktueller
aktuelles aktuellsten eventuell eventuelle dauer dauerhaft dauerhafte nutzungsdauer zahlungsdauer
abschreibungsdauer gueltigkeitsdauer nettoergebnis statue etui`.split(/\s+/))
// Dutch and English terms quoted inside the German pages.
const DE_FOREIGN = new Set('does due goed toegang onroerende grootboekschema verzuimboete verzuimboetes'.split(' '))
// 'ue' after a, e or q is the au-/eu-/qu- sequence, not a stand-in for 'ü'.
const DE_ASCII_UMLAUT = /(?<![\p{L}\d])\p{L}{3,}(?!\d)(?:(?<![aeq])ue|ae|oe)\p{L}*(?![\p{L}\d])|(?<![\p{L}\d])\p{L}*(?:(?<![aeq])ue|ae|oe)\p{L}{2,}(?![\p{L}\d])/giu
const DE_ASCII_SZ = /(?<!\p{L})(?:einschliesslich|abschliessen|schliesslich|anschliessend|schliesst|ausserdem|ausserhalb|weiss|gross|grosse|groesse|heisst|regelmaessig|gemaess)(?!\p{L})/giu
const DE_DU = /(?<!\p{L})(?:du|dich|dir|dein|deine[mnrs]?|deiner)(?!\p{L})/giu
// The German app UI is itself in the du-form, so these labels are quoted, not written.
const DE_UI_LABELS = ['Über dich', 'Deine Daten', 'Dein Unternehmen', 'Deine Website und Domain', 'Dein Abonnement']

// French words that always carry an accent or a cedilla.
const FR_STRIPPED = new Set(`numero numeros modele modeles meme memes depense depenses defaut deja creer creez
cree creee creees crees creation categorie categories parametres parametre apres periode periodes apercu
verifiez verifier verification donnees telephone telephones etape etapes acces echeance echeances recu recus
recoit reception selectionnez selectionner selecteur definissez definir elements element premiere deuxieme
troisieme derniere egalement immediatement telecharger telechargez televerser televersement generee generees
generer laterale maniere frequence frequences expediteur equipe superieure necessaire necessaires comptabilite
securite entierement duree deroulant couts reguliere regulieres recurrente recurrentes recurrent fonctionnalites
identite systeme methodes entree ecran ecrans declaration reseau reponse numerisation gerer gerez gere
deductible deductibles deductibilite repartition separee separees separe reference references
etat etats detail details boite tete etre etes ete annee icone reglage reglages resume repertoire
integralite qualite unite entite societe proprietaire interet interets specifique specifiques
prealable prealables anterieur ulterieur remuneration echelle etiquette etiquettes evitez etabli etablie
electronique electroniques evenement evenements procedure procedures problemes controle controler
completez completer reutilisez reutiliser echoue echeancier legerement suggere impayee impayees`.split(/\s+/))
const FR_APOSTROPHE = /(?<!\p{L})(?:l|d|n|s|c|j|qu|m|t) (?=[aeiouyhéèàêîô])/gu

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

/** Prose only: frontmatter carries deliberately ASCII chatbot triggers, and code is code. */
function prose(raw) {
  return raw
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    // Quoted strings are often the app's Dutch UI text, quoted verbatim.
    .replace(/"[^"\n]*"/g, ' ')
}

/**
 * The French backlog. These pages were written entirely without accents by an
 * earlier translation run, 1882 flagged words over 20 pages, and need a
 * proper French pass rather than a find-and-replace. The number is a ratchet:
 * a listed page may shrink or be cleared, never grow, and a page not listed
 * here fails outright. Delete the entry when the page is fixed.
 */
const FR_BACKLOG = new Map([
  ['fr/advanced/ai-features.md', 72],
  ['fr/advanced/business-page.md', 262],
  ['fr/advanced/customer-portal.md', 32],
  ['fr/advanced/receipt-scanning.md', 50],
  ['fr/features/accountant-forwarding.md', 40],
  ['fr/features/contracts.md', 91],
  ['fr/features/customers.md', 64],
  ['fr/features/domains-website-inbox.md', 321],
  ['fr/features/expenses.md', 52],
  ['fr/features/invoices.md', 139],
  ['fr/features/objects.md', 73],
  ['fr/features/peppol.md', 171],
  ['fr/features/projects.md', 21],
  ['fr/features/quotes.md', 58],
  ['fr/features/recurring-expenses.md', 96],
  ['fr/features/recurring-invoices.md', 60],
  ['fr/features/werkruimtes.md', 167],
  ['fr/getting-started/create-account.md', 35],
  ['fr/getting-started/first-invoice.md', 54],
  ['fr/getting-started/introduction.md', 24],
])

const problems = []
const warnings = []
for (const full of await walk(DOCS)) {
  const rel = path.relative(DOCS, full)
  const locale = rel.split('/')[0]
  if (locale !== 'de' && locale !== 'fr') continue
  const text = prose(await fs.readFile(full, 'utf8'))

  if (locale === 'de') {
    const bad = [...text.matchAll(DE_ASCII_UMLAUT)]
      .map((m) => m[0])
      .filter((w) => !DE_LEGIT.has(w.toLowerCase()) && !DE_FOREIGN.has(w.toLowerCase()) && !/\d/.test(w))
    const sz = [...text.matchAll(DE_ASCII_SZ)].map((m) => m[0])
    if (bad.length || sz.length) {
      problems.push(`${rel}: ASCII stand-ins for umlaut/eszett: ${[...new Set([...bad, ...sz])].slice(0, 6).join(', ')}`)
    }
    const du = text
      .split('\n')
      .filter((l) => !DE_UI_LABELS.some((u) => l.includes(u)))
      .flatMap((l) => [...l.matchAll(DE_DU)].map((m) => m[0]))
    if (du.length) problems.push(`${rel}: du-form in German prose (${du.length}x, e.g. "${du[0]}"); the docs use the Sie-form`)
  }

  if (locale === 'fr') {
    const words = [...text.matchAll(/(?<!\p{L})[A-Za-z]+(?!\p{L})/gu)].map((m) => m[0]).filter((w) => FR_STRIPPED.has(w.toLowerCase()))
    if (words.length) {
      const budget = FR_BACKLOG.get(rel)
      const msg = `${rel}: French written without accents (${words.length}x, e.g. "${words[0]}")`
      if (budget === undefined) problems.push(msg)
      else if (words.length > budget) problems.push(`${msg} - was ${budget}, the backlog may shrink but never grow`)
      else warnings.push(`${msg} - known backlog, budget ${budget}`)
    }
    const apo = [...text.matchAll(FR_APOSTROPHE)]
    if (apo.length) problems.push(`${rel}: apostrophe stripped to a space (${apo.length}x, e.g. "${apo[0][0]}...")`)
  }
}

if (problems.length) {
  console.error(`❌ ${problems.length} language problem(s):\n`)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}
if (warnings.length) {
  console.log(`⚠️  ${warnings.length} page(s) in the known French backlog (see FR_BACKLOG):`)
  for (const w of warnings) console.log('  ' + w)
  console.log('')
}
console.log('✅ German prose is Sie-form with real umlauts; French prose outside the backlog carries its accents and apostrophes')
