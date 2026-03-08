import { b as attr, a as attr_class, e as ensure_array_like, d as escape_html, s as stringify } from "./index.js";
function FullscreenMenu($$renderer, $$props) {
  let { open, navLinks, panelId, onclose } = $$props;
  $$renderer.push(`<div${attr("id", panelId)}${attr_class(`fullscreen-menu ${stringify(open ? "is-open" : "")}`, "svelte-rutwyh")}${attr("aria-hidden", !open)}><div class="fullscreen-menu__sheet svelte-rutwyh"><div class="fullscreen-menu__top svelte-rutwyh"><a href="/" class="fullscreen-menu__logo-link svelte-rutwyh" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png" alt="Ramacciotti Yachts" class="fullscreen-menu__logo svelte-rutwyh" loading="eager" decoding="async"/></a> <button type="button" class="fullscreen-menu__close svelte-rutwyh" aria-label="Close menu"><span class="fullscreen-menu__close-icon svelte-rutwyh" aria-hidden="true"></span> <span>Close</span></button></div> <nav class="fullscreen-menu__nav svelte-rutwyh" aria-label="Site sections"><!--[-->`);
  const each_array = ensure_array_like(navLinks);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.href)} class="fullscreen-menu__link svelte-rutwyh"><span>${escape_html(link.label)}</span> <span class="fullscreen-menu__plus svelte-rutwyh" aria-hidden="true">+</span></a>`);
  }
  $$renderer.push(`<!--]--></nav></div></div>`);
}
export {
  FullscreenMenu as F
};
