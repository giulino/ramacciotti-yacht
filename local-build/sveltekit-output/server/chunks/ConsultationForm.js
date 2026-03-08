import { a as attr_class, d as escape_html, e as ensure_array_like, b as attr, s as stringify } from "./index.js";
function ConsultationForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      context,
      title = "Begin your journey",
      subtitle = "All journeys begin with a private consultation.",
      variant = "dark"
    } = $$props;
    const phonePrefixes = [
      "+1",
      "+7",
      "+20",
      "+27",
      "+30",
      "+31",
      "+32",
      "+33",
      "+34",
      "+39",
      "+41",
      "+43",
      "+44",
      "+45",
      "+46",
      "+47",
      "+48",
      "+49",
      "+52",
      "+55",
      "+60",
      "+61",
      "+62",
      "+64",
      "+65",
      "+66",
      "+81",
      "+82",
      "+86",
      "+90",
      "+91",
      "+94",
      "+95",
      "+212",
      "+213",
      "+216",
      "+218",
      "+230",
      "+351",
      "+352",
      "+353",
      "+354",
      "+355",
      "+356",
      "+357",
      "+358",
      "+359",
      "+370",
      "+371",
      "+372",
      "+380",
      "+385",
      "+386",
      "+420",
      "+421",
      "+852",
      "+853",
      "+886",
      "+971"
    ];
    let loading = false;
    $$renderer2.push(`<div${attr_class(`mx-auto mt-14 w-full max-w-2xl p-6 md:p-8 ${stringify(variant === "dark" ? "border border-white/15 bg-white/5" : variant === "soft" ? "border border-charcoal/12 bg-cream" : "border border-charcoal/12 bg-white/55")}`)}><p${attr_class(`text-sm tracking-[0.1em] ${stringify(variant === "dark" ? "text-cream/70" : "text-slate")}`)}>${escape_html(context)} consultation</p> <h3${attr_class(`mt-3 text-3xl md:text-4xl ${stringify(variant === "dark" ? "text-white" : "text-charcoal")}`)}>${escape_html(title)}</h3> <p${attr_class(`mt-4 text-sm leading-relaxed md:text-base ${stringify(variant === "dark" ? "text-cream/75" : "text-slate")}`)}>${escape_html(subtitle)}</p> <form class="mt-8 grid gap-4" novalidate=""><input type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true"/> <input type="text" name="name" placeholder="Name" required=""${attr_class(`w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none ${stringify(variant === "dark" ? "border border-white/20 bg-white/6 text-white placeholder:text-cream/45" : variant === "soft" ? "border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60" : "border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60")}`)}/> <input type="email" name="email" placeholder="Email" required=""${attr_class(`w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none ${stringify(variant === "dark" ? "border border-white/20 bg-white/6 text-white placeholder:text-cream/45" : variant === "soft" ? "border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60" : "border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60")}`)}/> <div class="grid grid-cols-[7rem_minmax(0,1fr)] gap-3"><select name="phonePrefix" required="" aria-label="Phone prefix"${attr_class(`w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none ${stringify(variant === "dark" ? "border border-white/20 bg-white/6 text-white" : variant === "soft" ? "border border-charcoal/16 bg-white text-charcoal" : "border border-charcoal/20 bg-white text-charcoal")}`)}>`);
    $$renderer2.option({ value: "", disabled: true, selected: true }, ($$renderer3) => {
      $$renderer3.push(`Prefix`);
    });
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(phonePrefixes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let prefix = each_array[$$index];
      $$renderer2.option({ value: prefix }, ($$renderer3) => {
        $$renderer3.push(`${escape_html(prefix)}`);
      });
    }
    $$renderer2.push(`<!--]--></select> <input type="tel" name="phone" placeholder="Phone number" required="" inputmode="tel" autocomplete="tel-national"${attr_class(`w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none ${stringify(variant === "dark" ? "border border-white/20 bg-white/6 text-white placeholder:text-cream/45" : variant === "soft" ? "border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60" : "border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60")}`)}/></div> <textarea name="message" rows="4" placeholder="Message" required=""${attr_class(`w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none ${stringify(variant === "dark" ? "border border-white/20 bg-white/6 text-white placeholder:text-cream/45" : variant === "soft" ? "border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60" : "border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60")}`)}></textarea> <label${attr_class(`flex items-start gap-3 text-sm ${stringify(variant === "dark" ? "text-cream/72" : "text-slate")}`)}><input type="checkbox" name="consent" class="mt-1 h-4 w-4 border-white/30 accent-gold" required=""/> <span>I consent to be contacted by Ramacciotti Yachts for consultation purposes and understand my data is
				processed in accordance with GDPR.</span></label> <button type="submit"${attr("disabled", loading, true)} class="mt-2 inline-block w-fit border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light disabled:opacity-50">${escape_html("Begin your journey")}</button></form> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  ConsultationForm as C
};
