import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mode sombre","description":"","frontmatter":{"title":"Mode sombre","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["dark mode","light mode","switch theme","change theme","night mode","donkere modus","thema wijzigen","dunkler modus","mode sombre"],"actions":[],"follow_up":["How do I change my language?","How do I update my profile?"]}},"headers":[],"relativePath":"fr/faq/dark-mode.md","filePath":"fr/faq/dark-mode.md"}');
const _sfc_main = { name: "fr/faq/dark-mode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="mode-sombre-dans-l-application" tabindex="-1">Mode sombre dans l&#39;application <a class="header-anchor" href="#mode-sombre-dans-l-application" aria-label="Permalink to &quot;Mode sombre dans l&#39;application&quot;">​</a></h2><p>Pour changer de thème :</p><ol><li>Allez dans Paramètres → « Affichage »</li><li>Choisissez Clair, Sombre ou Automatique (suit votre appareil)</li><li>Le changement s&#39;applique immédiatement et est enregistré automatiquement</li></ol><p>Astuce : vous pouvez aussi utiliser le bouton de thème dans le menu de navigation pour un changement rapide.</p><h2 id="mode-sombre-pour-votre-site-web" tabindex="-1">Mode sombre pour votre site web <a class="header-anchor" href="#mode-sombre-pour-votre-site-web" aria-label="Permalink to &quot;Mode sombre pour votre site web&quot;">​</a></h2><p>Vous avez un site web professionnel hébergé ? Vous pouvez également définir un mode sombre pour vos visiteurs. Ouvrez la section <strong>Site web</strong> de l&#39;application, allez sur la page <strong>Style</strong> et cherchez le réglage du mode sombre dans la section <strong>Couleurs</strong>.</p><p>Trois options :</p><ul><li><strong>Désactivé</strong> (par défaut) : Pas de mode sombre. Votre site reste sur le thème clair.</li><li><strong>Bouton</strong> : Les visiteurs voient un bouton soleil/lune dans la barre de navigation. Le mode clair est toujours le choix par défaut ; les visiteurs qui préfèrent le mode sombre doivent l&#39;activer eux-mêmes. Une fois choisi, le réglage est enregistré dans leur navigateur pour la prochaine visite.</li><li><strong>Suivre le système</strong> : Le site suit automatiquement la préférence du visiteur au niveau du système d&#39;exploitation. S&#39;adapte dès que le visiteur change son paramètre système.</li></ul><p>Lorsque vous activez le mode sombre, un panneau de palette sombre apparaît pour que vous puissiez choisir une version nocturne de chaque couleur de marque. Laisser la palette vide est possible ; le site applique une inversion par défaut qui préserve vos couleurs de marque et d&#39;accent.</p><p>Consultez <a href="/fr/advanced/business-page">Constructeur de site</a> pour en savoir plus sur la personnalisation de votre site.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/dark-mode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const darkMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  darkMode as default
};
