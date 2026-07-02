import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"MyCompanyDesk","text":"La comptabilité simplifiée","tagline":"La plateforme tout-en-un pour les indépendants et petites entreprises pour gérer factures, dépenses, clients et bien plus.","actions":[{"theme":"brand","text":"Commencer","link":"/fr/getting-started/introduction"},{"theme":"alt","text":"Ouvrir l'app","link":"https://app.mycompanydesk.com"}]},"features":[{"icon":{"src":"/icons/file-bar-chart.svg"},"title":"Factures & Devis","details":"Créez des factures et devis professionnels, envoyez-les à vos clients et suivez les paiements — tout en un seul endroit."},{"icon":{"src":"/icons/receipt.svg"},"title":"Suivi des dépenses","details":"Enregistrez vos dépenses manuellement ou scannez vos reçus avec l'OCR alimenté par l'IA. Catégorisez et liez-les à des projets."},{"icon":{"src":"/icons/bar-chart-3.svg"},"title":"Rapports & TVA","details":"Obtenez des informations sur le chiffre d'affaires, les bénéfices, la trésorerie et la TVA. Verrouillez les périodes après déclaration."},{"icon":{"src":"/icons/users.svg"},"title":"Clients & Projets","details":"Gérez votre base de données clients, organisez le travail en projets et suivez la rentabilité par client."},{"icon":{"src":"/icons/refresh-cw.svg"},"title":"Facturation récurrente","details":"Configurez des factures et dépenses récurrentes qui se génèrent automatiquement selon le calendrier choisi."},{"icon":{"src":"/icons/house.svg"},"title":"Contrats & Actifs","details":"Gérez les contrats de location, suivez les biens immobiliers, véhicules et équipements avec une gestion complète du cycle de vie."}]},"headers":[],"relativePath":"fr/index.md","filePath":"fr/index.md"}`);
const _sfc_main = { name: "fr/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
