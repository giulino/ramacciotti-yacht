import { error } from '@sveltejs/kit';
import { events, getEventBySlug } from '$lib/data/events';

export function load({ params }) {
	const event = getEventBySlug(params.slug);

	if (!event) {
		throw error(404, 'Event not found');
	}

	const related = events.filter((item) => item.slug !== event.slug).slice(0, 2);

	return { event, related };
}
