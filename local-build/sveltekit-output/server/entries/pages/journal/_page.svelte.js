import { h as head, e as ensure_array_like, d as escape_html, b as attr } from "../../../chunks/index.js";
import { j as journalArticles } from "../../../chunks/journal.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const categories = ["Voyages", "Founder's Notes", "Partners", "News"];
    let newsletterState = "idle";
    head("1gt2yrk", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Ramacciotti Yachts | Journal</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Journal notes from Ramacciotti Yachts: voyages, founder reflections, partners, and seasonal updates."/>`);
    });
    $$renderer2.push(`<section class="bg-cream py-28 md:py-36 lg:py-44"><div class="mx-auto max-w-7xl px-6 md:px-12"><p class="text-sm tracking-[0.12em] text-slate">Journal</p> <h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-charcoal md:text-6xl">Stories and reflections from the world of Ramacciotti Yachts.</h1> <!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let category = each_array[$$index_1];
      $$renderer2.push(`<div class="mt-16"><h2 class="text-2xl text-charcoal md:text-3xl">${escape_html(category)}</h2> <div class="mt-8 grid gap-8 md:grid-cols-2"><!--[-->`);
      const each_array_1 = ensure_array_like(journalArticles.filter((article) => article.category === category));
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let article = each_array_1[$$index];
        $$renderer2.push(`<a${attr("href", `/journal/${article.slug}`)} class="group overflow-hidden border border-charcoal/12 bg-white/55"><div class="overflow-hidden"><img${attr("src", article.image)}${attr("alt", article.title)} class="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" loading="lazy" decoding="async"/></div> <div class="p-7"><p class="text-sm tracking-[0.08em] text-slate">${escape_html(article.date)}</p> <h3 class="mt-3 text-3xl leading-tight text-charcoal">${escape_html(article.title)}</h3> <p class="mt-4 text-sm leading-relaxed text-slate md:text-base">${escape_html(article.excerpt)}</p> <span class="mt-5 inline-block border-b border-transparent pb-1 text-sm text-charcoal transition-colors duration-300 group-hover:border-gold/70 group-hover:text-gold">Continue reading</span></div></a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="bg-navy py-24 md:py-28"><div class="mx-auto max-w-3xl px-6 md:px-12"><p class="text-sm tracking-[0.12em] text-cream/70">Newsletter</p> <h2 class="mt-4 text-4xl text-white md:text-5xl">Subscribe to The Founder’s Dispatch</h2> <p class="mt-5 text-sm leading-relaxed text-cream/75 md:text-base">Mailchimp integration-ready. Subscribe for new journal notes and seasonal voyage reflections.</p> <form class="mt-8 grid gap-4"><input type="email" name="email" placeholder="Email" required="" class="w-full border border-white/20 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-cream/45 focus:border-gold/60 focus:outline-none"/> <label class="flex items-start gap-3 text-sm text-cream/72"><input type="checkbox" name="consent" required="" class="mt-1 h-4 w-4 accent-gold"/> <span>I consent to receiving Journal updates and can unsubscribe at any time.</span></label> <button type="submit"${attr("disabled", newsletterState === "loading", true)} class="inline-block w-fit border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light disabled:opacity-60">${escape_html("Subscribe")}</button></form> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  _page as default
};
