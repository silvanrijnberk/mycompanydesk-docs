---
title: "Avoir"
last_verified: 2026-07-02
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

Pour créer un avoir :
1. Ouvrez la facture d'origine que vous souhaitez créditer
2. Cliquez sur "Créer un avoir / une correction" sur la page de détail
3. MyCompanyDesk crée en une seule étape un avoir complet et finalisé : chaque ligne de l'original est reprise en négatif et l'avoir reçoit le numéro suivant de votre série
4. Envoyez l'avoir au client

Vous ne pouvez pas ajuster les montants pendant la création ; les documents envoyés sont verrouillés, l'avoir reflète donc toujours exactement l'original. Pour une correction partielle, créez d'abord l'avoir complet, puis émettez une nouvelle facture avec le bon montant.

Astuce : comme vous créez l'avoir depuis la facture d'origine, les deux documents correspondent exactement et votre comptabilité reste cohérente.
