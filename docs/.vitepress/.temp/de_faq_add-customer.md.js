import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add a customer","description":"","frontmatter":{"title":"Add a customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create customer","new customer","add customer","add client","new client","klant toevoegen","nieuwe klant","klant aanmaken","kunde hinzufugen","wie fuege ich einen kunden hinzu","neuer kunde","ajouter client","comment ajouter un nouveau client"],"actions":[{"label":"Create customer","to":"/customers/new"}],"follow_up":["How do I create an invoice for this customer?","Which customer fields are most important?","How do I import customers in bulk?"]}},"headers":[],"relativePath":"de/faq/add-customer.md","filePath":"de/faq/add-customer.md"}');
const _sfc_main = { name: "de/faq/add-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So fuegst du einen Kunden hinzu:</p><ol><li>Gehe zu Kunden und oeffne „Neuer Kunde&quot;</li><li>Gib Kunden- oder Firmennamen und die Kontaktdaten ein</li><li>Fuege E-Mail, Telefonnummer und Adresse hinzu</li><li>Trage bei Bedarf USt-Nummer, IBAN und Zahlungsfrist ein</li><li>Speichere den Kunden</li></ol><p>Tipp: Das Kundenformular hat derzeit kein eigenes Feld fuer eine bevorzugte Sprache, also konzentriere dich auf Rechnungs- und Zahlungsdaten, die spaeter wiederverwendet werden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/add-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addCustomer as default
};
