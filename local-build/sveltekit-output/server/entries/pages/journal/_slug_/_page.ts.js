import { error } from "@sveltejs/kit";
import { g as getArticleBySlug, j as journalArticles } from "../../../../chunks/journal.js";
function load({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    throw error(404, "Article not found");
  }
  const related = journalArticles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, 2);
  return { article, related };
}
export {
  load
};
