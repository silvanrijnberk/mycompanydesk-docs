import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"MyCompanyDesk","text":"Buchhaltung leicht gemacht","tagline":"Die All-in-One-Plattform für Freiberufler und kleine Unternehmen zur Verwaltung von Rechnungen, Ausgaben, Kunden und mehr.","actions":[{"theme":"brand","text":"Erste Schritte","link":"/de/getting-started/introduction"},{"theme":"alt","text":"App öffnen","link":"https://app.mycompanydesk.com"}]},"features":[{"icon":{"src":"/icons/file-bar-chart.svg"},"title":"Rechnungen & Angebote","details":"Erstellen Sie professionelle Rechnungen und Angebote, versenden Sie diese an Kunden und verfolgen Sie Zahlungen — alles an einem Ort."},{"icon":{"src":"/icons/receipt.svg"},"title":"Ausgabenverfolgung","details":"Erfassen Sie Ausgaben manuell oder scannen Sie Belege mit KI-gestützter OCR. Kategorisieren und verknüpfen Sie diese mit Projekten."},{"icon":{"src":"/icons/bar-chart-3.svg"},"title":"Berichte & USt.","details":"Erhalten Sie Einblicke in Umsatz, Gewinn, Cashflow und Umsatzsteuer. Sperren Sie Zeiträume nach der Meldung für die Compliance."},{"icon":{"src":"/icons/users.svg"},"title":"Kunden & Projekte","details":"Verwalten Sie Ihre Kundendatenbank, organisieren Sie Arbeit in Projekten und verfolgen Sie die Rentabilität pro Kunde."},{"icon":{"src":"/icons/refresh-cw.svg"},"title":"Wiederkehrende Abrechnung","details":"Richten Sie wiederkehrende Rechnungen und Ausgaben ein, die automatisch nach Ihrem gewählten Zeitplan erstellt werden."},{"icon":{"src":"/icons/house.svg"},"title":"Verträge & Anlagen","details":"Verwalten Sie Mietverträge, verfolgen Sie Immobilien, Fahrzeuge und Geräte mit vollständigem Lebenszyklus-Management."}]},"headers":[],"relativePath":"de/index.md","filePath":"de/index.md"}');
const _sfc_main = { name: "de/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
