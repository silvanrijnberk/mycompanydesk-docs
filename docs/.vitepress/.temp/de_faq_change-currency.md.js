import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Währung ändern","description":"","frontmatter":{"title":"Währung ändern","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change currency","set currency","currency settings","euro dollar","valuta wijzigen","valuta instellen","wahrung andern","changer devise"],"follow_up":["How do I invoice in a different currency?","How do I change my language?"]}},"headers":[],"relativePath":"de/faq/change-currency.md","filePath":"de/faq/change-currency.md"}');
const _sfc_main = { name: "de/faq/change-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Es gibt keine Währungseinstellung, die Sie ändern könnten. MyCompanyDesk arbeitet bewusst nur in Euro: Alle Rechnungen, Angebote, Ausgaben und Berichte sind in EUR. Das lässt sich nirgendwo anpassen, auch nicht unter Mein Konto.</p><p>Wie das bei Kunden im Ausland funktioniert, lesen Sie unter <a href="/de/faq/multi-currency">Mehrere Währungen</a>.</p><p>Tipp: Rechnungen können Sie trotzdem auf Englisch, Deutsch oder Französisch versenden; nur die Beträge sind immer in Euro.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/change-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCurrency as default
};
