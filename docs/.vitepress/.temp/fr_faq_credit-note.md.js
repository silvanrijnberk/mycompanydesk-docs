import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Avoir","description":"","frontmatter":{"title":"Avoir","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["credit note","create credit note","issue credit","credit invoice","creditnota","creditnota aanmaken","gutschrift erstellen","note de credit","avoir"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel an invoice instead?","How does a credit note affect my VAT?","How do I find the original invoice?"]}},"headers":[],"relativePath":"fr/faq/credit-note.md","filePath":"fr/faq/credit-note.md"}');
const _sfc_main = { name: "fr/faq/credit-note.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour créer un avoir :</p><ol><li>Ouvrez la facture d&#39;origine que vous souhaitez créditer</li><li>Cliquez sur &quot;Créer un avoir / une correction&quot; sur la page de détail</li><li>MyCompanyDesk crée en une seule étape un avoir complet et finalisé : chaque ligne de l&#39;original est reprise en négatif et l&#39;avoir reçoit le numéro suivant de votre série</li><li>Envoyez l&#39;avoir au client</li></ol><p>Vous ne pouvez pas ajuster les montants pendant la création ; les documents envoyés sont verrouillés, l&#39;avoir reflète donc toujours exactement l&#39;original. Pour une correction partielle, créez d&#39;abord l&#39;avoir complet, puis émettez une nouvelle facture avec le bon montant.</p><p>Astuce : comme vous créez l&#39;avoir depuis la facture d&#39;origine, les deux documents correspondent exactement et votre comptabilité reste cohérente.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/credit-note.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creditNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  creditNote as default
};
