# Agent guide — mycompanydesk-docs

Vitepress source for the public MyCompanyDesk documentation. English content lives under `docs/`. Locale mirrors live under `docs/nl/`, `docs/de/`, `docs/fr/` with identical file trees.

## Trigger

The `mcd-docs-locale-sync` agent runs after every merge to `development` in `silvanrijnberk/RichardTool`. Its job: keep these docs accurate with the latest shipped code, and keep all four locales in sync.

## Hard rules

1. **No em-dashes (`—`) or en-dashes (`–`) in any new prose.** Use commas, periods, parentheses, or restructure the sentence. This applies in every language. If you are rewriting a passage that contains them, strip them in the rewrite. Untouched passages keep what is there.
2. **Native voice in every language, not glossary translation.** Read the existing nl/de/fr files for tone and vocabulary, then write the way a fluent speaker writes. NL is `je`-form, lowercase headings only where the existing pages do so. DE is `Sie`-form. FR is `vous`-form. Never machine-translate then ship.
3. **Mirror the file tree across locales.** If you add `docs/features/foo.md`, add `docs/nl/features/foo.md`, `docs/de/features/foo.md`, `docs/fr/features/foo.md` in the same change. Same for renames and deletes. Localized hero-link paths must include the locale prefix (`/nl/...`, etc.) as in `docs/nl/index.md`.
4. **Preserve frontmatter and Vitepress syntax verbatim.** YAML keys, asset paths (`src: /icons/...`), container directives (`:::tip`), and `<script setup>` blocks stay byte-identical unless the change is the point of the edit.
5. **Never touch `node_modules/`, `package-lock.json`, `.vitepress/dist/`, or `docs/public/icons/`.** Config in `.vitepress/config.*` only changes if the EN content change forces it (new top-level section, etc.).
6. **Stay surgical.** Update what the code change requires; do not refactor surrounding pages, do not "improve" untouched copy, do not add features-of-the-page that the source diff did not introduce.

## Workflow

1. Read the RichardTool merge diff (provided in the trigger payload, or `git log development -1` in `/home/node/.openclaw/repos/RichardTool`).
2. Decide whether the change is user-facing: new UI, changed labels, new feature, new setting, changed flow, new locale keys. If not user-facing (refactor, infra, tests, internal API), record "no docs change required" and exit clean.
3. If user-facing: open a branch `docs/sync-<merge-sha-short>-<slug>`, edit EN first under `docs/`, then mirror to `nl/de/fr` with native rewrites.
4. If the merge touched `src/locales/en.json` (or equivalent), inspect the keys. New end-user-facing keys must land in nl/de/fr the same PR per the project rule that English fallbacks read as broken.
5. Open a PR against `main` (NOT `development` — this repo uses `main`). Title: `docs: sync <short summary> (RichardTool@<sha>)`. Body links the source merge.
6. Self-review the diff against the rules above. If clean, merge to `main`. If not, fix and re-review. Do not request human review unless something is genuinely ambiguous (then leave the PR open and write the ambiguity in the body).
7. Notify the MCD ops group: `120363428173214637@g.us` via the bella-wa channel. Include PR URL + one-line summary.

## Failure modes to refuse

- The merge intent is unclear from the diff alone, and inferring would risk wrong copy. Leave PR open, ping ops group.
- The change requires screenshots that do not exist yet. Add a `TODO(screenshot): <what>` HTML comment in the EN page and open the PR; do not invent imagery.
- The change deletes user-facing functionality. Open a PR that deletes the doc pages, but link the source merge clearly and pause for human merge approval.

## Commit / PR style

- Imperative, scope-prefixed: `docs(features/invoicing): describe new VAT-locked period banner`.
- One PR per source merge. If a single source merge needs many doc files, that is fine — one PR.
- Co-author line: `Co-Authored-By: openclaw-docs-sync <noreply@mycompanydesk.com>`.
