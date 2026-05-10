---
title: "Add VAT number"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "add vat number"
    - "set vat number"
    - "enter vat number"
    - "btw nummer"
    - "btw nummer invoeren"
    - "ust id eingeben"
    - "numero tva"
  actions:
    - { label: "Open company info", to: "/company?section=company" }
  follow_up:
    - "How do I set up my company settings?"
    - "How do I set VAT on an invoice?"
---

Pour ajouter ou modifier votre numero de TVA :
1. Allez dans Entreprise → Informations entreprise
2. Trouvez-y le champ « Numero de TVA »
3. Les modifications s enregistrent automatiquement

Votre numero de TVA sera ensuite utilise sur les documents generes. Pour les numeros de TVA des clients, ouvrez la fiche client et renseignez le champ correspondant.
