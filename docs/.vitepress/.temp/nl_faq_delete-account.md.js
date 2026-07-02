import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Account verwijderen","description":"","frontmatter":{"title":"Account verwijderen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["delete account","close account","remove account","cancel subscription","account verwijderen","account opzeggen","konto loschen","supprimer compte","resilier abonnement"],"actions":[{"label":"Open account cancellation","to":"/settings/opzeggen"},{"label":"Download your data","to":"/settings/downloaden"}],"follow_up":["How do I export my data first?","How do I back up my data?","Can I temporarily deactivate instead?"]}},"headers":[],"relativePath":"nl/faq/delete-account.md","filePath":"nl/faq/delete-account.md"}');
const _sfc_main = { name: "nl/faq/delete-account.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo verwijder je je account:</p><ol><li>Download eerst je gegevens via Instellingen → &quot;Gegevens downloaden&quot; als je een kopie wilt bewaren</li><li>Ga naar Instellingen → &quot;Account opzeggen&quot;</li><li>Klik onder &quot;Account definitief verwijderen&quot; op &quot;Verwijderen&quot;</li><li>Bevestig met je huidige wachtwoord. Deze actie is permanent</li></ol><p>Op dezelfde pagina kun je ook alleen je betaalde abonnement opzeggen. Je betaalt dan niets meer, maar je account en gegevens blijven bewaard, want de Belastingdienst wil dat je je administratie 7 jaar kunt laten zien. Verwijder je je account, dan zijn je account en al je gegevens voorgoed weg.</p><p>Belangrijk: het verwijderen van je account kan niet ongedaan worden gemaakt. Exporteer alles wat je nodig hebt voordat je doorgaat.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/delete-account.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteAccount as default
};
