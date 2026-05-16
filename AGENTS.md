# Agent guide — mycompanydesk-docs

Vitepress source for the public MyCompanyDesk documentation. English content lives under `docs/`. Locale mirrors live under `docs/nl/`, `docs/de/`, `docs/fr/` with identical file trees. The agent that runs against this repo is also responsible for the public landing in `RichardTool/sites/landing/` — see that repo's `sites/landing/AGENTS.md` for landing-specific rules.

## Trigger

The `mcd-public-surfaces-sync` agent runs as an openclaw cron job on the services box, every minute. It checks for a new merge on `silvanrijnberk/RichardTool:development` and exits early on no change. On change: read this file, read `sites/landing/AGENTS.md`, decide what is user-facing in the merge, update docs + locales + landing as one bundled run, open PRs, self-review under the strict rules below, merge when clean.

## Hard rules (apply to all locales and to the landing)

1. **No em-dashes (`—`) or en-dashes (`–`) in any new prose.** Use commas, periods, parentheses, or restructure. Untouched passages keep what is there; rewritten ones strip them.
2. **Native voice in every language.** Read existing nl/de/fr files for tone and vocabulary first, then write the way a fluent speaker writes. NL `je`-form, DE `Sie`-form, FR `vous`-form. Never machine-translate then ship.
3. **Mirror the file tree across locales.** Adding `docs/features/foo.md` adds `docs/nl/features/foo.md`, `docs/de/features/foo.md`, `docs/fr/features/foo.md` in the same change. Same for renames and deletes. Localized hero links include the locale prefix.
4. **Preserve frontmatter and Vitepress syntax verbatim** unless the change is the point of the edit. YAML keys, asset paths, container directives (`:::tip`), `<script setup>` blocks stay byte-identical.
5. **Never touch** `node_modules/`, `package-lock.json`, `.vitepress/dist/`, `docs/public/icons/`. `.vitepress/config.*` changes only if the EN content forced it.
6. **Stay surgical.** Update what the source merge requires. Do not refactor surrounding pages, do not "improve" untouched copy, do not add page sections the source diff did not introduce.

## Source-of-truth corpus (`sources/`)

For any country-specific number, rate, threshold, deadline, or legal-status claim that appears in EN/NL/DE/FR docs or landing, the value **must** come verbatim from a file under `sources/`. The agent MUST:

- Cite the source file + key path in the PR description, e.g. `sources/vat-rates.yaml#countries.NL.standard`.
- Refuse to invent. If the value the source change requires is not present in `sources/`, do NOT search the web, do NOT infer. Leave the page text unchanged and insert an HTML comment `<!-- TODO(source-missing): <what is needed> -->` directly above. List every TODO in the PR body, ping ops, do not block the PR on it.
- Flag staleness. If a cited source has `last_verified` older than 180 days, note it in the PR body. Still use the value.
- Never edit `sources/` itself. Curation is human-only — see `sources/README.md`.

## Strict self-review loop

After opening the PR, the agent runs through this checklist against the PR diff:

1. Any em-dash or en-dash in added lines → fail.
2. Any new file under `docs/<en-path>.md` without sibling `nl/de/fr` mirrors → fail.
3. Any new number/percentage/€-value/date deadline in any locale not citing a `sources/` path → fail.
4. Any `<script>` block, hero block, CTA copy, or top-level nav entry changed without the source merge explicitly justifying it → fail.
5. NL/DE/FR text that reads like a literal translation (matches EN word order, uses calques) → fail.
6. Any change to `.vitepress/config.*` not driven by the EN diff → fail.

On any fail: fix in a new commit on the same branch, re-run the checklist. Iteration cap is 3. If iteration 3 still fails on any rule, leave the PR open with the failing items in the body and ping ops; do NOT merge dirty.

On all-clean: squash-merge to `main`.

## Workflow

1. Read this file. Read `/home/node/.openclaw/repos/RichardTool/sites/landing/AGENTS.md`.
2. Read the merge: `git log -1 development` in `/home/node/.openclaw/repos/RichardTool`. Decide whether anything is user-facing (new feature, changed label, new setting, new flow, new locale key, landing-relevant). If not: message MCD ops `no public-surface change required for <sha>` and exit.
3. If user-facing: branch `docs/sync-<sha>-<slug>` in docs repo, branch `landing-sync-<sha>-<slug>` in RichardTool. Edit EN first, mirror to nl/de/fr.
4. If `src/locales/en.json` (or equivalent) gained user-facing keys: fill nl/de/fr same PR. Commit those to the RichardTool branch.
5. Open PRs: docs against `main`, RichardTool landing branch against `development`. Body: link to source merge, list source citations, list any TODO(source-missing) items.
6. Run the strict self-review loop above. Fix + re-review until clean or cap hit.
7. On clean, squash-merge both PRs.
8. Notify MCD ops `120363428173214637@g.us` via `bella_wa.send_wa(text, to=<jid>)`. One message, both PR URLs, one-line summary, or the unresolved items if iteration cap was hit.

## Failure modes to refuse

- Merge intent unclear from diff alone, inferring would risk wrong copy → leave PR open, ping ops, do not merge.
- Change deletes user-facing functionality → open PRs that delete the doc/landing pages, link source merge, do NOT auto-merge, pause for human.
- Numbers/legal claims required but missing from `sources/` → TODO comment + PR open + ping ops. Do not invent.

## Commit / PR style

- Imperative, scope-prefixed: `docs(features/invoicing): describe VAT-locked period banner`, `landing(home): add bank-feed feature card`.
- One bundled PR-set per source merge. Docs and landing are coordinated.
- Co-author line: `Co-Authored-By: openclaw-public-sync <noreply@mycompanydesk.com>`.
