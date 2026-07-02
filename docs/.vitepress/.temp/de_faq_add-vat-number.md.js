import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"USt-IdNr. hinzufügen","description":"","frontmatter":{"title":"USt-IdNr. hinzufügen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add vat number","set vat number","enter vat number","btw nummer","btw nummer invoeren","ust id eingeben","numero tva"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I set VAT on an invoice?"]}},"headers":[],"relativePath":"de/faq/add-vat-number.md","filePath":"de/faq/add-vat-number.md"}');
const _sfc_main = { name: "de/faq/add-vat-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So fügen Sie Ihre USt-IdNr. hinzu oder ändern sie:</p><ol><li>Gehen Sie zu Einstellungen → „Unternehmensdaten&quot;</li><li>Füllen Sie dort das Feld „USt-IdNr.&quot; aus</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Ihre USt-IdNr. wird danach auf erzeugten Dokumenten verwendet. Für Kunden-USt-Nummern öffnen Sie das Kundenprofil und pflegen dort das Feld ein.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/add-vat-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addVatNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addVatNumber as default
};
