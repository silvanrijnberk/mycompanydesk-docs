---
title: Bulk actions
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
Om bulkacties uit te voeren:
1. Ga naar de lijstweergave (Facturen, Uitgaven of Klanten)
2. Selecteer meerdere items met de selectievakjes
3. Gebruik het bulkactiemenu bovenaan de lijst
4. Kies de actie (bijv. verwijderen, verzenden, exporteren)
5. Bevestig de bulkbewerking

## Controles bij bulksgewijs afronden

Als je facturen bulksgewijs afrondt of verstuurt, voert MyCompanyDesk dezelfde BTW- en statuscontroles uit als bij een enkele factuur. Zo kan een factuur met verlegde BTW bijvoorbeeld niet worden afgerond als de klant geen BTW-nummer heeft, en moet een regel met 0% BTW (sources/vat-rates.yaml#countries.NL.zero) een duidelijke grondslag hebben (verlegde BTW of een goedgekeurde nultariefreden). Facturen die een controle niet doorstaan, worden overgeslagen; in het resultatenscherm zie je welke facturen het betreft en waarom.

Tip: Gebruik eerst filters om de lijst te beperken en selecteer vervolgens alle zichtbare items voor efficiënte batchverwerking.
