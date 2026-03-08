import { h as head, e as ensure_array_like, b as attr, d as escape_html } from "../../../chunks/index.js";
import { C as ConsultationForm } from "../../../chunks/ConsultationForm.js";
import { E as EditorialTopNav } from "../../../chunks/EditorialTopNav.js";
function _page($$renderer) {
  const vessels = [
    {
      name: "Riva Folgore 88",
      length: "88 ft",
      guests: "8 guests",
      style: "Sport flybridge",
      cruising: "Mediterranean day and multi-day charters",
      images: [
        "/images/fleet/folgore-88/folgore-88-02.jpg",
        "/images/fleet/folgore-88/folgore-88-03.jpg",
        "/images/fleet/folgore-88/folgore-88-04.jpg",
        "/images/fleet/folgore-88/folgore-88-05.jpg",
        "/images/fleet/folgore-88/folgore-88-06.jpg"
      ]
    },
    {
      name: "Casagnola Heritage",
      length: "85 ft",
      guests: "8 guests",
      style: "Classic gentleman yacht",
      cruising: "Founder-led coastal itineraries",
      images: [
        "/images/fleet/casagnola-heritage/casagnola-heritage-01.jpeg",
        "/images/fleet/casagnola-heritage/casagnola-heritage-02.jpeg",
        "/images/fleet/casagnola-heritage/casagnola-heritage-03.jpeg",
        "/images/fleet/casagnola-heritage/casagnola-heritage-04.jpeg",
        "/images/fleet/casagnola-heritage/casagnola-heritage-05.jpeg",
        "/images/fleet/casagnola-heritage/casagnola-heritage-06.jpeg"
      ]
    },
    {
      name: "Ferretti 860",
      length: "86 ft",
      guests: "8 guests",
      style: "Flybridge motor yacht",
      cruising: "Long-weekend and hosted escapes",
      images: [
        "/images/fleet/ferretti-860/ferretti-860-16.jpg",
        "/images/fleet/ferretti-860/ferretti-860-17.jpg",
        "/images/fleet/ferretti-860/ferretti-860-29.jpg"
      ]
    },
    {
      name: "Magnum 40",
      length: "40 ft",
      guests: "6 guests",
      style: "Open performance cruiser",
      cruising: "Fast day charters and island transfers",
      images: ["/images/fleet/magnum-40/magnum-40-01.jpg"]
    },
    {
      name: "Pershing 70",
      length: "70 ft",
      guests: "6 guests",
      style: "Performance coupé",
      cruising: "Fast island hopping and day charters",
      images: [
        "/images/fleet/pershing-70/Pershing_35.jpg",
        "/images/fleet/pershing-70/Pershing_36.jpg"
      ]
    },
    {
      name: "Van Dutch 40",
      length: "40 ft",
      guests: "6 guests",
      style: "Open day cruiser",
      cruising: "Riviera day charters and transfers",
      images: [
        "/images/fleet/van-dutch-40/van-dutch-40-01.jpg",
        "/images/fleet/van-dutch-40/van-dutch-40-02.jpg"
      ]
    }
  ];
  head("bl1f57", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Ramacciotti Yachts | Fleet</title>`);
    });
  });
  $$renderer.push(`<section class="fleet-page-intro svelte-bl1f57">`);
  EditorialTopNav($$renderer, {});
  $$renderer.push(`<!----> <div class="fleet-page-intro__shell svelte-bl1f57"><p class="fleet-page-intro__kicker svelte-bl1f57">Fleet</p> <h1 class="svelte-bl1f57">A considered fleet selected for character, crew quality, and life onboard.</h1></div></section> <!--[-->`);
  const each_array = ensure_array_like(vessels);
  for (let vesselIndex = 0, $$length = each_array.length; vesselIndex < $$length; vesselIndex++) {
    let vessel = each_array[vesselIndex];
    $$renderer.push(`<section class="fleet-gallery svelte-bl1f57"${attr("aria-label", `${vessel.name} gallery`)}><a href="/" class="fleet-gallery__logo svelte-bl1f57" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="lazy" decoding="async" class="svelte-bl1f57"/></a> <div class="fleet-gallery__track svelte-bl1f57"><!--[-->`);
    const each_array_1 = ensure_array_like(vessel.images);
    for (let imageIndex = 0, $$length2 = each_array_1.length; imageIndex < $$length2; imageIndex++) {
      let image = each_array_1[imageIndex];
      $$renderer.push(`<article class="fleet-gallery__slide svelte-bl1f57"${attr("aria-label", `${vessel.name} image ${imageIndex + 1}`)}><img${attr("src", image)}${attr("alt", `${vessel.name} yacht`)} class="fleet-gallery__image svelte-bl1f57"${attr("loading", vesselIndex === 0 && imageIndex === 0 ? "eager" : "lazy")} decoding="async"/></article>`);
    }
    $$renderer.push(`<!--]--></div> <div class="fleet-gallery__bottom svelte-bl1f57"><p class="fleet-gallery__name svelte-bl1f57">${escape_html(vessel.name)}</p> <div class="fleet-gallery__details svelte-bl1f57"><p class="svelte-bl1f57"><span class="svelte-bl1f57">Length</span>${escape_html(vessel.length)}</p> <p class="svelte-bl1f57"><span class="svelte-bl1f57">Guests</span>${escape_html(vessel.guests)}</p> <p class="svelte-bl1f57"><span class="svelte-bl1f57">Style</span>${escape_html(vessel.style)}</p> <p class="svelte-bl1f57"><span class="svelte-bl1f57">Cruising</span>${escape_html(vessel.cruising)}</p></div></div> `);
    if (vessel.images.length > 1) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="fleet-gallery__arrows svelte-bl1f57" aria-label="Gallery navigation"><button type="button" class="fleet-gallery__arrow svelte-bl1f57"${attr("aria-label", `Previous ${vessel.name} image`)}><span aria-hidden="true">←</span></button> <button type="button" class="fleet-gallery__arrow svelte-bl1f57"${attr("aria-label", `Next ${vessel.name} image`)}><span aria-hidden="true">→</span></button></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></section>`);
  }
  $$renderer.push(`<!--]--> <section class="fleet-consultation svelte-bl1f57"><div class="fleet-consultation__shell svelte-bl1f57">`);
  ConsultationForm($$renderer, {
    context: "Fleet",
    title: "Request a private proposal",
    subtitle: "Tell us your preferred season and priorities. We will curate options accordingly.",
    variant: "soft"
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
