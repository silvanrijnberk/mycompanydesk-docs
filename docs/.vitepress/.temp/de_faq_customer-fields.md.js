import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer fields","description":"","frontmatter":{"title":"Customer fields","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer fields","important fields","which fields","required fields","fields matter","klantvelden","welke velden","belangrijkste velden","kundenfelder","wichtigste felder","champs clients","champs importants"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I add a new customer?","How do I edit a customer?","How do I set default payment terms?"]}},"headers":[],"relativePath":"de/faq/customer-fields.md","filePath":"de/faq/customer-fields.md"}');
const _sfc_main = { name: "de/faq/customer-fields.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Die Kundenfelder, die die App am haeufigsten verwendet, sind:</p><ol><li>Kunden- oder Firmenname - sichtbar auf Rechnungen und Angeboten</li><li>E-Mail-Adresse - wird beim Versand von Dokumenten per E-Mail verwendet</li><li>Adressfelder - werden auf Dokumentlayouts mit Adressangaben wiederverwendet</li><li>USt-IdNr. - erscheint auf Dokumenten, wenn das Feld ausgefuellt ist</li><li>IBAN und Zahlungsfrist - werden dort wiederverwendet, wo Rechnungsstandards sie brauchen</li><li>Ansprechpartner und Telefonnummer - im Kundenprofil als Referenz sichtbar</li></ol><p>Fuelle die Felder aus, die die App auf neuen Rechnungen, Angeboten und Versandansichten wiederverwenden soll.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/customer-fields.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerFields = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerFields as default
};
