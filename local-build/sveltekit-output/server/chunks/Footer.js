import { e as ensure_array_like, b as attr, d as escape_html } from "./index.js";
function Footer($$renderer) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Fleet", href: "/#fleet-overview" },
    { label: "The Club", href: "/#club" },
    { label: "Corporate", href: "/#corporate-circle" },
    { label: "Journal", href: "/#journal-home" }
  ];
  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" }
  ];
  $$renderer.push(`<footer class="border-t border-white/10 bg-[#12163b] py-12 md:py-14"><div class="mx-auto max-w-7xl px-6 text-center md:px-12"><img src="/LOGO/RAMACCIOTTI_BIANCO_COMPLETO.png" alt="Ramacciotti Yachts" class="mx-auto h-auto w-52 md:w-[17rem]" loading="lazy" decoding="async"/> <p class="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-white/56">George Town, Cayman Islands</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-8"><!--[-->`);
  const each_array = ensure_array_like(navLinks);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$renderer.push(`<a${attr("href", link.href)} class="text-[0.74rem] uppercase tracking-[0.14em] text-white/68 transition-colors duration-200 hover:text-gold">${escape_html(link.label)}</a>`);
  }
  $$renderer.push(`<!--]--></div> <div class="mt-5 flex items-center justify-center gap-6 md:gap-8"><!--[-->`);
  const each_array_1 = ensure_array_like(socialLinks);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let link = each_array_1[$$index_1];
    $$renderer.push(`<a${attr("href", link.href)} class="text-[0.74rem] uppercase tracking-[0.14em] text-white/52 transition-colors duration-200 hover:text-gold">${escape_html(link.label)}</a>`);
  }
  $$renderer.push(`<!--]--></div> <p class="text-slate mt-8 text-xs tracking-wider">© 2026 Ramacciotti Yachts. All rights reserved.</p></div></footer>`);
}
export {
  Footer as F
};
