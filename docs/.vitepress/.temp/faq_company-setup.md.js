import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Company setup","description":"","frontmatter":{"title":"Company setup","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["set up company","company setup","company settings","first setup","getting started","initial setup","how to start","where to begin","bedrijf instellen","aan de slag","unternehmen einrichten","configurer entreprise"],"actions":[{"label":"Open company setup","to":"/company"},{"label":"Create first invoice","to":"/invoices/new"}],"follow_up":["How do I add my logo?","How do I create my first invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"faq/company-setup.md","filePath":"faq/company-setup.md"}');
const _sfc_main = { name: "faq/company-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Here&#39;s a first-time setup checklist:</p><ol><li>Go to Company → Company Info</li><li>Add your legal company name, address, and tax details</li><li>Go to Company → Branding &amp; Documents to upload your logo and document branding</li><li>Go to Company → Payment Options to add bank details and payment instructions</li><li>Go to Company → Invoicing to set numbering, payment terms, and PDF defaults</li><li>Open My Account → Language and My Account → Preferences for your personal language and currency defaults</li></ol><p>Next step: Create your first customer and send a test invoice!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/company-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const companySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  companySetup as default
};
