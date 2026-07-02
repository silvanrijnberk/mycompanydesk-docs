import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mobile access","description":"","frontmatter":{"title":"Mobile access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["mobile","phone","tablet","mobile app","responsive","on the go","mobiel","telefoon","mobil","handy","acces mobile","telephone","smartphone"],"actions":[],"follow_up":["How do I upload receipts from my phone?","How do I create an invoice on mobile?"]}},"headers":[],"relativePath":"fr/faq/mobile-access.md","filePath":"fr/faq/mobile-access.md"}');
const _sfc_main = { name: "fr/faq/mobile-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour accéder à l&#39;application sur mobile :</p><ol><li>Ouvrez votre navigateur mobile (Chrome, Safari, etc.)</li><li>Accédez à l&#39;URL de l&#39;application</li><li>L&#39;interface s&#39;adapte automatiquement à la taille de votre écran</li><li>Vous pouvez l&#39;ajouter à votre écran d&#39;accueil pour un accès rapide</li></ol><p>Astuce : Toutes les fonctionnalités sont disponibles sur mobile - créez des factures, enregistrez des dépenses et gérez vos clients en déplacement.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/mobile-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobileAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mobileAccess as default
};
