import { error } from '@sveltejs/kit';
import { getArticleBySlug, journalArticles } from '$lib/data/journal';

export function load({ params }) {
	const article = getArticleBySlug(params.slug);

	if (!article) {
		throw error(404, 'Article not found');
	}

	const related = journalArticles
		.filter((item) => item.category === article.category && item.slug !== article.slug)
		.slice(0, 2);

	return { article, related };
}
