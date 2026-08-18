---
title: "Avoir"
last_verified: 2026-08-16
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

Les factures annulées ne peuvent pas faire l'objet d'un avoir. Si vous devez corriger une facture déjà annulée, dupliquez la facture annulée et apportez-y les modifications.

Vous ne pouvez pas ajuster les montants pendant la création ; les documents envoyés sont verrouillés, l'avoir reflète donc toujours exactement l'original. Pour une correction partielle, créez d'abord l'avoir complet, puis émettez une nouvelle facture avec le bon montant.

MyCompanyDesk empêche également de créditer plus que le montant de la facture d'origine. Vous pouvez émettre plusieurs avoirs partiels sur la même facture, mais une fois que le total des avoirs atteint le montant de la facture, aucun nouvel avoir ne peut être créé pour cette facture.

Un avoir rembourse le client et n'a donc pas de date d'échéance propre. Dans le portail client, la ligne d'échéance et le tableau des factures antérieures masquent le délai pour les avoirs. Le bouton Confirmer le paiement est également masqué, car un avoir rembourse le client au lieu de lui demander de payer. Quand la facture d'origine est entièrement créditée, le portail masque aussi les boutons de paiement sur cette facture, affiche le résumé de paiement comme Crédité et indique le montant de l'avoir dans le détail du solde.

Dans le rapport des créances clients, le montant de l'avoir est compensé avec la facture originale qu'il corrige, de sorte que le solde du client reflète ce qui est réellement encore dû.

Dans le back-office, la page de détail de l'avoir indique si le montant reste à compenser ou a déjà été compensé. Vous voyez ainsi d'un seul coup d'œil si vous devez encore rembourser ou compenser le client.

Quand la facture d'origine est entièrement créditée, la page de détail de la facture n'affiche plus l'étiquette entièrement payée. À la place, elle indique que la facture est créditée et qu'il ne reste plus rien à payer. Si le client avait déjà payé avant la création de l'avoir et que ce paiement dépasse désormais le montant restant, la page indique aussi le montant du remboursement que vous devez au client.

Quand vous envoyez un avoir par e-mail, il utilise un modèle dédié. L'objet le présente comme un avoir, le corps mentionne le montant crédité comme un nombre positif et il ne demande pas de paiement ni n'affiche de date d'échéance. Le PDF utilise "Avoir à", "Détails de l'avoir" et "N° d'avoir" au lieu des mentions de facture, pour qu'un avoir ne soit jamais présenté comme une facture. Tant que l'avoir est encore un brouillon, la carte d'action propose seulement de l'envoyer; une fois envoyé, aucune action de rappel ou d'encaissement n'apparaît, car un avoir rembourse le client au lieu de lui demander de l'argent.

Astuce : comme vous créez l'avoir depuis la facture d'origine, les deux documents correspondent exactement et votre comptabilité reste cohérente.
