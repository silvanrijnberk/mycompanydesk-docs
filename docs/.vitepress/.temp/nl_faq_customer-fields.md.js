import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer fields","description":"","frontmatter":{"title":"Customer fields","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer fields","important fields","which fields","required fields","fields matter","klantvelden","welke velden","belangrijkste velden","kundenfelder","wichtigste felder","champs clients","champs importants"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I add a new customer?","How do I edit a customer?","How do I set default payment terms?"]}},"headers":[],"relativePath":"nl/faq/customer-fields.md","filePath":"nl/faq/customer-fields.md"}');
const _sfc_main = { name: "nl/faq/customer-fields.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>De klantvelden die de app het vaakst gebruikt zijn:</p><ol><li>Klant- of bedrijfsnaam - zichtbaar op facturen en offertes</li><li>E-mailadres - gebruikt wanneer je documenten per e-mail verstuurt</li><li>Adresvelden - hergebruikt op documentlay-outs die adresgegevens tonen</li><li>BTW-nummer - zichtbaar op documenten als dit veld is ingevuld</li><li>IBAN en betaaltermijn - hergebruikt waar factuurstandaarden die nodig hebben</li><li>Contactpersoon en telefoonnummer - zichtbaar in het klantprofiel als referentie</li></ol><p>Vul de velden in die je wilt laten hergebruiken op nieuwe facturen, offertes en verzendschermen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/customer-fields.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerFields = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerFields as default
};
