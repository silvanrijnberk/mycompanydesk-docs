import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Konto löschen","description":"","frontmatter":{"title":"Konto löschen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["delete account","close account","remove account","cancel subscription","account verwijderen","account opzeggen","konto loschen","supprimer compte","resilier abonnement"],"actions":[{"label":"Open account cancellation","to":"/settings/opzeggen"},{"label":"Download your data","to":"/settings/downloaden"}],"follow_up":["How do I export my data first?","How do I back up my data?","Can I temporarily deactivate instead?"]}},"headers":[],"relativePath":"de/faq/delete-account.md","filePath":"de/faq/delete-account.md"}');
const _sfc_main = { name: "de/faq/delete-account.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So löschen Sie Ihr Konto:</p><ol><li>Laden Sie zuerst Ihre Daten über Einstellungen → &quot;Daten herunterladen&quot; herunter, wenn Sie eine Kopie behalten möchten</li><li>Gehen Sie zu Einstellungen → &quot;Konto kündigen&quot;</li><li>Klicken Sie unter &quot;Konto dauerhaft löschen&quot; auf &quot;Löschen&quot;</li><li>Bestätigen Sie mit Ihrem aktuellen Passwort. Dieser Schritt ist endgültig</li></ol><p>Auf derselben Seite können Sie auch nur Ihr bezahltes Abonnement kündigen. Sie zahlen dann nichts mehr, Ihr Konto und Ihre Daten bleiben aber erhalten, da das niederländische Steuerrecht eine Aufbewahrung Ihrer Unterlagen für 7 Jahre verlangt. Löschen Sie Ihr Konto, sind Ihr Konto und alle Ihre Daten endgültig weg.</p><p>Wichtig: Die Kontolöschung kann nicht rückgängig gemacht werden. Exportieren Sie alles, was Sie brauchen, bevor Sie fortfahren.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/delete-account.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteAccount as default
};
