import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kunden löschen","description":"","frontmatter":{"title":"Kunden löschen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete customer","remove customer","trash customer","klant verwijderen","klant wissen","kunde loschen","supprimer client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I archive a customer instead?","How do I edit customer details?"]}},"headers":[],"relativePath":"de/faq/delete-customer.md","filePath":"de/faq/delete-customer.md"}');
const _sfc_main = { name: "de/faq/delete-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So löschen Sie einen Kunden:</p><ol><li>Gehen Sie zu Kunden und suchen Sie den Kunden</li><li>Öffnen Sie das Profil</li><li>Scrollen Sie in der Seitenleiste zum Abschnitt „Gefahrenzone&quot;</li><li>Klicken Sie auf „Löschen&quot;</li><li>Bestätigen Sie die Löschung</li></ol><p>Das Löschen wird nie blockiert, auch nicht bei Kunden mit verknüpften Rechnungen. Es erfolgt in Stufen: Das Löschen eines aktiven Kunden archiviert ihn zunächst, erneutes Löschen verschiebt ihn in den Papierkorb, und das Löschen aus dem Papierkorb ist endgültig. Bis zu diesem letzten Schritt können Sie den Kunden jederzeit aus der Ansicht Archiv oder Papierkorb wiederherstellen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/delete-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteCustomer as default
};
