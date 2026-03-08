import { h as head } from "../../../chunks/index.js";
import { C as ConsultationForm } from "../../../chunks/ConsultationForm.js";
import { E as EditorialTopNav } from "../../../chunks/EditorialTopNav.js";
function _page($$renderer) {
  head("1flpb1c", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Ramacciotti Yachts | Corporate</title>`);
    });
  });
  $$renderer.push(`<section class="relative bg-white pt-28 pb-28 md:pt-36 md:pb-36 lg:pt-44 lg:pb-44">`);
  EditorialTopNav($$renderer, {});
  $$renderer.push(`<!----> <div class="mx-auto max-w-6xl px-6 md:px-12"><p class="text-sm tracking-[0.12em] text-slate">Corporate</p> <h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-charcoal md:text-6xl">Corporate hospitality at sea, designed with discretion and strategic clarity.</h1> <p class="mt-10 max-w-3xl text-base leading-relaxed text-slate md:text-lg">From leadership retreats to client entertainment, each voyage is planned as a complete brand-aligned
			experience, managed with one point of contact from concept to return.</p> <div class="mt-12 border border-charcoal/12 bg-cream p-6 md:p-8"><p class="text-sm tracking-[0.09em] text-charcoal">Connected to The Club</p> <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate md:text-base">Many corporate guests continue into The Club for long-term continuity and priority planning.</p> <a href="/club" class="mt-5 inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold">Discover the Club</a></div> `);
  ConsultationForm($$renderer, {
    context: "Corporate",
    title: "Request a Proposal",
    subtitle: "Share company goals, timing, and guest profile. We will reply with a tailored outline.",
    variant: "soft"
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
