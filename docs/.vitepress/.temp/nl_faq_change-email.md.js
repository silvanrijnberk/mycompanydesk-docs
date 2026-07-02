import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"E-mailadres wijzigen","description":"","frontmatter":{"title":"E-mailadres wijzigen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change email","update email","new email address","login email","email address","can i change my email in settings","email wijzigen","email aanpassen","e-mailadres wijzigen","emailadres wijzigen","kan ik mijn e-mailadres wijzigen","email andern","e mail adresse andern","kann ich meine e-mail andern","kann ich meine e mail andern","kann ich hier meine e mail adresse andern","kann ich meine e mail adresse andern","meine e-mail andern","meine email andern","changer email","changer e-mail","modifier mon e-mail","modifier mon email","puis-je modifier mon e-mail","puis je modifier mon e mail","adresse e-mail"],"actions":[],"follow_up":["How do I change my password?","How do I update my profile?"]}},"headers":[],"relativePath":"nl/faq/change-email.md","filePath":"nl/faq/change-email.md"}');
const _sfc_main = { name: "nl/faq/change-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Je login-e-mailadres staat onder Instellingen → &quot;Jouw gegevens&quot;, maar het veld &quot;E-mailadres&quot; is alleen-lezen. Je kunt het login-e-mailadres niet zelf wijzigen.</p><p>Moet het toch aangepast worden, gebruik dan het supportticketformulier onder de chat.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/change-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeEmail as default
};
