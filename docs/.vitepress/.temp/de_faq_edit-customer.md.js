import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit a customer","description":"","frontmatter":{"title":"Edit a customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit customer","change customer","update customer","modify customer","customer details","klant bewerken","klant wijzigen","kunde bearbeiten","modifier client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I merge duplicate customers?","How do I view customer payment history?"]}},"headers":[],"relativePath":"de/faq/edit-customer.md","filePath":"de/faq/edit-customer.md"}');
const _sfc_main = { name: "de/faq/edit-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So bearbeitest du einen Kunden:</p><ol><li>Gehe zu Kunden und finde den Kunden</li><li>Klicke auf den Kunden, um das Profil zu öffnen</li><li>Klicke auf „Bearbeiten&quot;</li><li>Aktualisiere Name, Adresse, E-Mail, Ust-IdNr. oder Zahlungsbedingungen</li><li>Speichere deine Änderungen</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/edit-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editCustomer as default
};
