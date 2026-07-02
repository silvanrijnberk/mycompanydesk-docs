import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit a quote","description":"","frontmatter":{"title":"Edit a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit quote","change quote","update quote","modify quote","correct quote","offerte bewerken","offerte wijzigen","angebot bearbeiten","devis modifier","editar cotizacion","editar proposta","modificare preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I duplicate a quote?","How do I preview the updated quote?","How do I change quote validity?"]}},"headers":[],"relativePath":"fr/faq/edit-quote.md","filePath":"fr/faq/edit-quote.md"}');
const _sfc_main = { name: "fr/faq/edit-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier un devis :</p><ol><li>Ouvrez le devis depuis la liste</li><li>Cliquez sur « Modifier » (ou /quotes/{id}/edit)</li><li>Mettez a jour client, lignes, notes ou dates</li><li>Enregistrez</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/edit-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editQuote as default
};
