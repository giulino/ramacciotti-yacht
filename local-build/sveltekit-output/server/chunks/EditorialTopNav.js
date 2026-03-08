import { b as attr, e as ensure_array_like, d as escape_html } from "./index.js";
import { F as FullscreenMenu } from "./FullscreenMenu.js";
function EditorialTopNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { quickLinks = [{ label: "Contacts", href: "/#home-enquiry" }] } = $$props;
    const navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Fleet", href: "/fleet" },
      { label: "The Club", href: "/club" },
      { label: "Corporate", href: "/corporate" },
      { label: "Journal", href: "/journal" }
    ];
    let menuOpen = false;
    function closeMenu() {
      menuOpen = false;
    }
    $$renderer2.push(`<header class="editorial-top-nav svelte-jpp9c8" aria-label="Primary"><button type="button" class="editorial-menu-trigger svelte-jpp9c8" aria-label="Open menu"${attr("aria-expanded", menuOpen)} aria-controls="editorial-menu-panel"><span class="editorial-menu-icon svelte-jpp9c8" aria-hidden="true"><span class="editorial-menu-line editorial-menu-line-top svelte-jpp9c8"></span> <span class="editorial-menu-line editorial-menu-line-bottom svelte-jpp9c8"></span></span> <span>Menu</span></button> <a href="/" class="editorial-brand-mark svelte-jpp9c8" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png" alt="Ramacciotti Yachts" class="editorial-brand-logo svelte-jpp9c8" loading="eager" decoding="async"/></a> <nav class="editorial-quick-links svelte-jpp9c8" aria-label="Quick links"><!--[-->`);
    const each_array = ensure_array_like(quickLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="svelte-jpp9c8">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav></header> `);
    FullscreenMenu($$renderer2, {
      open: menuOpen,
      navLinks,
      panelId: "editorial-menu-panel",
      onclose: closeMenu
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  EditorialTopNav as E
};
