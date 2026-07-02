import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a quote","description":"","frontmatter":{"title":"Create a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create quote","new quote","make quote","create proposal","new proposal","sales quote","estimate","offerte maken","offerte aanmaken","nieuwe offerte","angebot erstellen","neues angebot","wie erstelle ich ein angebot","devis creer","comment creer un devis","nouveau devis","crear cotizacion","crear presupuesto","criar proposta","nuovo preventivo"],"actions":[{"label":"Create quote","to":"/quotes/new"},{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I preview the quote PDF?","How do I send a quote by email?","How do I convert a quote to an invoice?"]}},"headers":[],"relativePath":"faq/create-quote.md","filePath":"faq/create-quote.md"}');
const _sfc_main = { name: "faq/create-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Here&#39;s how to create a quote:</p><ol><li>Go to Quotes and open &quot;Create quote&quot;</li><li>Select a customer and, if useful, link a project</li><li>Add the quote lines with description, quantity, price, and VAT</li><li>In the Quote Details card, set the quote date and &quot;Valid until&quot; date</li><li>Use &quot;Save as Draft&quot; if you still need to review it, or &quot;Finalize&quot; when the quote is ready</li><li>After saving, open the quote detail page to preview or send it</li></ol><p>Tip: Quotes stay separate from invoices until you convert one.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/create-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createQuote as default
};
