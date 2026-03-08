const journalArticles = [
  {
    slug: "caribbean-winter-calm",
    title: "The Caribbean: Where Winter Finds Its Calm",
    category: "Voyages",
    date: "2026-01-18",
    excerpt: "From Antigua to St. Barth, winter unfolds through warm trade winds, clear horizons, and unhurried days at sea.",
    image: "/images/hero/hero-01.jpg"
  },
  {
    slug: "sardinia-at-dusk",
    title: "Sardinia at Dusk: The Calm Between Coves",
    category: "Voyages",
    date: "2026-01-30",
    excerpt: "A summer chapter shaped by emerald water, granite light, and evenings that linger long after the sun has set.",
    image: "/images/hero/hero-02.jpg"
  },
  {
    slug: "ligurian-riviera-light",
    title: "Ligurian Riviera: Mornings of Light and Quiet Harbors",
    category: "Voyages",
    date: "2026-02-06",
    excerpt: "Portofino, Camogli, and the Cinque Terre reveal a coastline where elegance is measured in pace, not spectacle.",
    image: "/images/hero/hero-03.jpg"
  },
  {
    slug: "founders-notes-art-of-belonging",
    title: "Founder's Notes: The Art of Belonging",
    category: "Founder's Notes",
    date: "2026-02-10",
    excerpt: "Why each charter is designed as the beginning of a relationship, not the end of a transaction.",
    image: "/images/hero/hero-04.jpg"
  },
  {
    slug: "partner-spotlight-italian-hospitality",
    title: "Partner Spotlight: A Shared Language of Italian Hospitality",
    category: "Partners",
    date: "2026-02-12",
    excerpt: "How selected hospitality partners onshore extend the same discretion and care clients experience at sea.",
    image: "/images/hero/hero-02.jpg"
  },
  {
    slug: "corporate-circle-spring-update",
    title: "Corporate Circle: Spring Season Preview",
    category: "News",
    date: "2026-02-15",
    excerpt: "New itineraries for executive retreats and client hosting across the Mediterranean calendar.",
    image: "/images/hero/hero-01.jpg"
  }
];
function getArticleBySlug(slug) {
  return journalArticles.find((article) => article.slug === slug);
}
export {
  getArticleBySlug as g,
  journalArticles as j
};
