import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Delete account","description":"","frontmatter":{"title":"Delete account","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["delete account","close account","remove account","cancel subscription","account verwijderen","account opzeggen","konto loschen","supprimer compte","resilier abonnement"],"actions":[{"label":"Open account cancellation","to":"/settings/opzeggen"},{"label":"Download your data","to":"/settings/downloaden"}],"follow_up":["How do I export my data first?","How do I back up my data?","Can I temporarily deactivate instead?"]}},"headers":[],"relativePath":"faq/delete-account.md","filePath":"faq/delete-account.md"}');
const _sfc_main = { name: "faq/delete-account.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To delete your account:</p><ol><li>Download your data first at Settings (&quot;Instellingen&quot;) → &quot;Gegevens downloaden&quot; if you want to keep a copy</li><li>Go to Settings → &quot;Account opzeggen&quot;</li><li>Under &quot;Account definitief verwijderen&quot; (permanently delete account), click &quot;Delete&quot;</li><li>Confirm with your current password. This action is permanent</li></ol><p>The same page also lets you cancel only your paid subscription. You then stop paying, but your account and data stay, since Dutch tax rules require you to keep your records for 7 years. Deleting your account removes your account and all your data for good.</p><p>Important: account deletion cannot be undone. Export everything you need before you proceed.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/delete-account.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteAccount as default
};
