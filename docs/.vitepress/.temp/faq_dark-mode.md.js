import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dark mode","description":"","frontmatter":{"title":"Dark mode","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["dark mode","light mode","switch theme","change theme","night mode","donkere modus","thema wijzigen","dunkler modus","mode sombre"],"actions":[],"follow_up":["How do I change my language?","How do I update my profile?"]}},"headers":[],"relativePath":"faq/dark-mode.md","filePath":"faq/dark-mode.md"}');
const _sfc_main = { name: "faq/dark-mode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="app-dark-mode" tabindex="-1">App dark mode <a class="header-anchor" href="#app-dark-mode" aria-label="Permalink to &quot;App dark mode&quot;">​</a></h2><p>To switch your app theme:</p><ol><li>Go to Settings → &quot;Weergave&quot; (display)</li><li>Choose Licht (light), Donker (dark), or Vanzelf (automatic, follows your device)</li><li>The change is applied immediately and saved automatically</li></ol><p>Tip: You can also use the theme toggle from the navigation menu for a quick switch.</p><h2 id="website-dark-mode" tabindex="-1">Website dark mode <a class="header-anchor" href="#website-dark-mode" aria-label="Permalink to &quot;Website dark mode&quot;">​</a></h2><p>If you have a hosted business website, you can also set a dark mode for your visitors. Open the <strong>Website</strong> area of the app, go to the <strong>Stijl</strong> (style) page, and find the dark-mode control in the <strong>Kleuren</strong> (colours) section.</p><p>Three modes are available:</p><ul><li><strong>Off</strong> (default): No dark mode. Your site stays in its light color palette.</li><li><strong>Button</strong>: Visitors see a sun/moon toggle in the navigation bar. The default is always light, so visitors who prefer dark must toggle it on. Once chosen, the preference is saved in their browser for the next visit.</li><li><strong>System</strong>: The site follows the visitor&#39;s OS-level preference automatically. Changes when the visitor flips their system setting.</li></ul><p>When you enable dark mode, a dark palette panel appears so you can pick night-optimized versions of each brand color. Leaving the dark palette empty is fine; the site applies a sensible default inversion that keeps your brand and accent colors intact.</p><p>See <a href="/advanced/business-page">Site Builder</a> for more on styling your website.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/dark-mode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const darkMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  darkMode as default
};
