import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Accountant access","description":"","frontmatter":{"title":"Accountant access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["accountant access","accountant permissions","add accountant","invite accountant","accountant toevoegen","boekhouder","buchhalter einladen","buchhalter zugang","comptable acces","ajouter comptable","accountant invite","revoke accountant"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I set page permissions?","How do I invite a team member?","How do I revoke access?"]}},"headers":[],"relativePath":"nl/faq/accountant-access.md","filePath":"nl/faq/accountant-access.md"}');
const _sfc_main = { name: "nl/faq/accountant-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om accountantstoegang te beheren:</p><ol><li>Ga naar Workspace-instellingen → Team</li><li>Klik in de sectie Accountants op &quot;Accountant toevoegen&quot;</li><li>Vul naam en e-mailadres in, en eventueel kantoor of telefoon</li><li>Klik op &quot;Uitnodigen&quot; om accounttoegang te geven</li><li>Gebruik &quot;Toegang beheren&quot; om de paginarechten in te stellen</li></ol><p>Veelvoorkomende statussen zijn alleen contact, uitgenodigd, actief en ingetrokken.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/accountant-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountantAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accountantAccess as default
};
