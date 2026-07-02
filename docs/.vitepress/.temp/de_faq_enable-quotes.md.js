import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Angebote aktivieren","description":"","frontmatter":{"title":"Angebote aktivieren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quotes not visible","where are quotes","enable quotes","turn on quotes","show quotes in menu","qoutes not visible","qoutes missing","where are qoutes","offertes niet zichtbaar","quotes activeren","angebote nicht sichtbar","devis non visible","activar cotizaciones","ativar propostas"],"actions":[{"label":"Open features","to":"/settings/onderdelen"},{"label":"Open team settings","to":"/settings/team"}],"follow_up":["How do I grant quote permissions to team members?","How do I create the first quote?","How do I send quotes?"]}},"headers":[],"relativePath":"de/faq/enable-quotes.md","filePath":"de/faq/enable-quotes.md"}');
const _sfc_main = { name: "de/faq/enable-quotes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Fehlen Angebote in der Navigation?</p><ol><li>Gehen Sie zu Einstellungen → &quot;Funktionen&quot;</li><li>Aktivieren Sie den Schalter &quot;Angebote&quot;</li><li>Das Menü wird sofort aktualisiert</li></ol><p>Eine Funktion auszuschalten löscht nichts; schalten Sie sie später wieder ein, ist alles noch genau so da.</p><p>Tipp: Prüfen Sie in Team-Arbeitsumgebungen auch, ob Ihr Konto Seitenzugriff auf Angebote hat.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/enable-quotes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enableQuotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  enableQuotes as default
};
