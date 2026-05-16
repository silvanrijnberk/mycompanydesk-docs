# Source-of-truth corpus

This directory is the only place the docs/landing sync agent is allowed to read country-specific numbers, rates, thresholds, deadlines, or legal-status claims from. It exists so user-facing copy can never silently drift from authoritative figures.

## Hard rules

- **Human-only curation.** The `mcd-public-surfaces-sync` agent reads these files. It never writes to them. Updates land via human-authored PRs.
- **Verbatim quoting.** Docs and landing cite values from here by `file#dotted.path`. The cited value must appear in the rendered page byte-identical (modulo locale-specific formatting like `21,0%` vs `21.0%`).
- **No invented values.** If the agent needs a value not in this corpus, it inserts a `<!-- TODO(source-missing): … -->` HTML comment and pings ops. It does not search the web. It does not infer.
- **Mirrored locale rendering, single source.** One value per rule lives here in canonical form. Locale-specific formatting (separator, currency symbol position) happens at render time in the docs/landing.

## File schema

Every file under `sources/` has these top-level fields:

```yaml
last_verified: 2026-05-16     # ISO date of last human check against the authoritative source
verified_by: silvanrijnberk    # who attested
source_url: https://...        # authoritative public URL (gov / official body)
notes: |                       # free-text caveats, exceptions, deprecation dates
  Standard rate applies to most goods. Reduced rate covers food, books, etc.
# domain-specific structure follows
```

If `last_verified` is older than 180 days when the agent reads it, the agent flags the staleness in PR bodies but still uses the value. Refresh by reading the `source_url`, updating values + `last_verified` + `verified_by`, committing.

## Files

| File | Scope |
|---|---|
| `vat-rates.yaml` | Standard / reduced / zero VAT rates per country + small-business thresholds |

More to come as needs surface. Add files conservatively, one rule domain per file.

## When the agent reports a missing source

It will ping the MCD ops group with text like `TODO(source-missing): NL OSS threshold for cross-border B2C`. Resolve by:

1. Looking up the authoritative figure (EU / national tax authority).
2. Adding it under the right file with `source_url` cited.
3. Updating `last_verified` and `verified_by`.
4. The next merge that needs it picks it up automatically.

## When a rule changes upstream

Tax law changes. When you read in the news that a rate moved (or the EU OSS threshold shifted, or a new digital-services rule kicked in):

1. Update the file here first, in its own PR.
2. The agent's next sync run will see the new value and update any docs/landing pages that cite it.
3. If you want to force a re-sweep without waiting for a code merge, the agent's cron entry can be triggered manually from the openclaw control plane.
