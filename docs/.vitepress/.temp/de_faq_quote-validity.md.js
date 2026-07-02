import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gültigkeit von Angeboten","description":"","frontmatter":{"title":"Gültigkeit von Angeboten","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote validity","valid until quote","quote expiry","quote expiration","how long quote valid","quote valid days","geldigheid offerte","offerte geldig","angebotsgultigkeit","devis validite","validez devis","validez cotizacion","validade proposta"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How does quote numbering work?","How do I edit valid-until per quote?","How do I preview the final PDF?"]}},"headers":[],"relativePath":"de/faq/quote-validity.md","filePath":"de/faq/quote-validity.md"}');
const _sfc_main = { name: "de/faq/quote-validity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Die Angebotsgültigkeit ist eine einzige Einstellung:</p><ol><li>Gehen Sie zu Einstellungen → &quot;Rechnungen und Angebote&quot;</li><li>Wählen Sie unter &quot;Wie lange bleibt ein Angebot gültig?&quot; 2 Wochen, 1 Monat oder 2 Monate</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Neue Angebote erhalten ihr Gültig-bis-Datum aus dieser Auswahl. Ist das Datum verstrichen, erscheint das Angebot in Ihrer Angebotsliste als Abgelaufen.</p><p>Tipp: Der Status Abgelaufen erscheint automatisch, Sie müssen Angebote nicht selbst aktualisieren.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/quote-validity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteValidity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteValidity as default
};
