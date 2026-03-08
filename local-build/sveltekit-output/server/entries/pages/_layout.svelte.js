import { a as attr_class, e as ensure_array_like, b as attr, c as attr_style, d as escape_html, s as stringify, h as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { F as Footer } from "../../chunks/Footer.js";
function MobileMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { navLinks } = $$props;
    function formatMenuLabel(label) {
      return label.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    }
    $$renderer2.push(`<div${attr_class(`fixed inset-0 z-40 ${stringify(
      // Lock body scroll when menu is open
      "pointer-events-none"
    )}`)}><div${attr_class(`absolute inset-0 flex flex-col items-center justify-center bg-navy will-change-transform transition-transform duration-700 ease-in-out ${stringify("-translate-y-full")}`)}><div class="flex flex-col items-center gap-8"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link = each_array[i];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`text-white text-2xl font-bold normal-case [font-variant-caps:normal] tracking-[0.16em] transition-all duration-500 ease-out hover:text-gold md:text-3xl md:tracking-[0.2em] ${stringify("translate-y-4 opacity-0")}`)}${attr_style(`transition-delay: ${stringify(0)}ms`)}>${escape_html(formatMenuLabel(link.label))}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <div${attr_class(`mt-12 h-px w-16 bg-gold/40 transition-all duration-700 ease-out ${stringify("scale-x-0 opacity-0")}`)}${attr_style(`transition-delay: ${stringify(0)}ms`)}></div></div></div>`);
  });
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Fleet", href: "/fleet" },
      { label: "The Club", href: "/club" },
      { label: "Corporate", href: "/corporate" },
      { label: "Journal", href: "/journal" }
    ];
    $$renderer2.push(`<nav${attr_class(`fixed top-0 left-0 z-50 w-full transition-all duration-[350ms] ease-in-out ${stringify("bg-transparent")}`)}><div class="flex items-center justify-between px-6 py-5 md:px-12"><button class="relative z-[60] flex items-center gap-3" aria-label="Toggle menu"><div class="flex flex-col items-start gap-1.5"><span${attr_class(`block h-px w-6 bg-white transition-all duration-300 ${stringify("")}`)}></span> <span${attr_class(`block h-px bg-white transition-all duration-300 ${stringify("w-4")}`)}></span></div> <span${attr_class(`text-xs md:text-sm tracking-[0.25em] text-white/70 transition-opacity duration-300 ${stringify("opacity-100")}`)}>Menu</span></button> <a href="/" class="absolute left-1/2 -translate-x-1/2"><img src="/images/brand/RAMACCIOTTI_BIANCO_COMPLETO.png" alt="Ramacciotti Yachts" class="h-auto w-52 md:w-64"/></a> <div class="flex w-20 justify-end md:w-auto md:items-center md:gap-6 lg:gap-8">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(navLinks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let link = each_array[$$index];
        $$renderer2.push(`<a${attr("href", link.href)} class="hidden text-xs tracking-[0.16em] text-white/72 transition-colors duration-200 hover:text-gold lg:inline-block">${escape_html(link.label)}</a>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></nav> `);
    MobileMenu($$renderer2, { navLinks });
    $$renderer2.push(`<!---->`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const isHome = page.url.pathname === "/";
    const hideDefaultNavigation = page.url.pathname === "/club" || page.url.pathname === "/corporate" || page.url.pathname === "/fleet" || page.url.pathname === "/fleet-showcase" || page.url.pathname.startsWith("/events/");
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Ramacciotti Yachts</title>`);
      });
      $$renderer3.push(`<link rel="icon" type="image/x-icon" href="/favicon.ico"/> <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/> <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"/> <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/> <link rel="manifest" href="/site.webmanifest"/> <meta name="theme-color" content="#12163b"/> <meta name="msapplication-TileColor" content="#12163b"/> <meta name="msapplication-TileImage" content="/mstile-150x150.png"/> <meta name="description" content="Founder-led yacht advisory and charter journeys shaped with discretion, refinement, and personal care."/>`);
    });
    if (!isHome && !hideDefaultNavigation) {
      $$renderer2.push("<!--[-->");
      Navigation($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <main>`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    if (!isHome) {
      $$renderer2.push("<!--[-->");
      Footer($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _layout as default
};
