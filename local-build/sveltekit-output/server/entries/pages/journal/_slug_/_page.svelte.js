import { h as head, d as escape_html, b as attr, e as ensure_array_like } from "../../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1hqih8e", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.article.title)} | Ramacciotti Journal</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.article.excerpt)}/>`);
    });
    $$renderer2.push(`<article class="bg-cream py-28 md:py-36 lg:py-44"><div class="mx-auto max-w-4xl px-6 md:px-12"><p class="text-sm tracking-[0.1em] text-slate">${escape_html(data.article.category)}</p> <h1 class="mt-4 text-4xl leading-[1.12] text-charcoal md:text-6xl">${escape_html(data.article.title)}</h1> <p class="mt-6 text-sm tracking-[0.08em] text-slate">${escape_html(data.article.date)}</p> <img${attr("src", data.article.image)}${attr("alt", data.article.title)} class="mt-10 h-[28rem] w-full object-cover" loading="eager" decoding="async"/> <div class="mt-10 space-y-6 text-base leading-relaxed text-slate md:text-lg"><p>${escape_html(data.article.excerpt)}</p> <p>Every voyage is curated around context: season, guest profile, and the atmosphere you want to create.
				Our role is to align these details with precision so the experience feels both effortless and deeply personal.</p> <p>If this chapter resonates with your next itinerary, we will prepare a private consultation and advise the
				right route forward.</p></div> <a href="/journal" class="mt-10 inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold">Back to Journal</a></div></article> `);
    if (data.related.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="bg-navy py-20 md:py-24"><div class="mx-auto max-w-6xl px-6 md:px-12"><p class="text-sm tracking-[0.1em] text-cream/70">Related</p> <div class="mt-8 grid gap-6 md:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(data.related);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let article = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/journal/${article.slug}`)} class="group border border-white/12 bg-white/[0.03] p-6"><h2 class="text-3xl text-white">${escape_html(article.title)}</h2> <p class="mt-3 text-sm leading-relaxed text-cream/74">${escape_html(article.excerpt)}</p> <span class="mt-4 inline-block border-b border-transparent pb-1 text-sm text-cream/78 transition-colors duration-300 group-hover:border-gold/70 group-hover:text-gold">Read article</span></a>`);
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
