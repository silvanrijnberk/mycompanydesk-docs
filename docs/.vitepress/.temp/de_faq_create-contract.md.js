import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a contract","description":"","frontmatter":{"title":"Create a contract","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create contract","new contract","add contract","contract aanmaken","nieuw contract","vertrag erstellen","creer contrat","comment creer un contrat"],"actions":[],"follow_up":["How do I create a project?","How do I link invoices to a contract?"]}},"headers":[],"relativePath":"de/faq/create-contract.md","filePath":"de/faq/create-contract.md"}');
const _sfc_main = { name: "de/faq/create-contract.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellst du einen Vertrag:</p><ol><li>Gehe zu Vertraege und oeffne „Neuer Vertrag&quot;</li><li>Waehle bei Mietvertraegen das Objekt und den Kunden aus. Bei anderen Typen (Service, NDA, Projekt) ist nur ein Kunde erforderlich.</li><li>Gib Vertragsname, Betrag, MwSt-Satz und Wiederholung ein</li><li>Setze Startdatum und Datum der ersten Rechnung</li><li>Fuege bei Bedarf Serviceangaben oder Auto-Senden hinzu und speichere</li></ol><p>Tipp: Du kannst den gespeicherten Vertrag spaeter erneut oeffnen, um die Abrechnung anzupassen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/create-contract.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createContract = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createContract as default
};
