import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"MyCompanyDesk","text":"Accounting made simple","tagline":"The all-in-one platform for freelancers and small businesses to manage invoices, expenses, customers, and more.","actions":[{"theme":"brand","text":"Get Started","link":"/getting-started/introduction"},{"theme":"alt","text":"Open App","link":"https://app.mycompanydesk.com"}]},"features":[{"icon":{"src":"/icons/file-bar-chart.svg"},"title":"Invoices & Quotes","details":"Create professional invoices and quotes, send them to customers, and track payments — all in one place."},{"icon":{"src":"/icons/receipt.svg"},"title":"Expense Tracking","details":"Log expenses manually or scan receipts with AI-powered OCR. Categorize and link them to projects."},{"icon":{"src":"/icons/bar-chart-3.svg"},"title":"Reports & VAT","details":"Get insights into revenue, profit, cash flow, and VAT. Lock periods after filing for compliance."},{"icon":{"src":"/icons/users.svg"},"title":"Customers & Projects","details":"Manage your customer database, organize work into projects, and track profitability per client."},{"icon":{"src":"/icons/refresh-cw.svg"},"title":"Recurring Billing","details":"Set up recurring invoices and expenses that generate automatically on your chosen schedule."},{"icon":{"src":"/icons/house.svg"},"title":"Contracts & Assets","details":"Manage rental contracts, track properties, vehicles, and equipment with full lifecycle management."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
