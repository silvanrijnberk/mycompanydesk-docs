import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"MyCompanyDesk","text":"Boekhouding eenvoudig gemaakt","tagline":"Het alles-in-één platform voor zzp'ers en kleine bedrijven om facturen, uitgaven, klanten en meer te beheren.","actions":[{"theme":"brand","text":"Aan de slag","link":"/nl/getting-started/introduction"},{"theme":"alt","text":"Open App","link":"https://app.mycompanydesk.com"}]},"features":[{"icon":{"src":"/icons/file-bar-chart.svg"},"title":"Facturen & Offertes","details":"Maak professionele facturen en offertes, verstuur ze naar klanten en houd betalingen bij — alles op één plek."},{"icon":{"src":"/icons/receipt.svg"},"title":"Uitgaven bijhouden","details":"Registreer uitgaven handmatig of scan bonnen met AI-gestuurde OCR. Categoriseer en koppel ze aan projecten."},{"icon":{"src":"/icons/bar-chart-3.svg"},"title":"Rapporten & BTW","details":"Krijg inzicht in omzet, winst, cashflow en BTW. Vergrendel periodes na aangifte voor compliance."},{"icon":{"src":"/icons/users.svg"},"title":"Klanten & Projecten","details":"Beheer je klantendatabase, organiseer werk in projecten en volg winstgevendheid per klant."},{"icon":{"src":"/icons/refresh-cw.svg"},"title":"Terugkerende facturering","details":"Stel terugkerende facturen en uitgaven in die automatisch worden gegenereerd volgens je gekozen schema."},{"icon":{"src":"/icons/house.svg"},"title":"Contracten & Assets","details":"Beheer huurcontracten, volg vastgoed, voertuigen en apparatuur met volledig levenscyclusbeheer."}]},"headers":[],"relativePath":"nl/index.md","filePath":"nl/index.md"}`);
const _sfc_main = { name: "nl/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
