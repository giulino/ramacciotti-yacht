export interface EventItem {
	slug: string;
	month: string;
	days: string;
	year: string;
	title: string;
	location: string;
	fullDate: string;
	category: string;
	address: string;
	stand: string;
	openingHours: string[];
	contactEmail: string;
	image: string;
	intro: string;
	note: string;
}

export const events: EventItem[] = [
	{
		slug: 'palm-beach-international-boat-show',
		month: 'MAR',
		days: '25 - 29',
		year: '2026',
		title: 'Palm Beach International Boat Show',
		location: 'Palm Beach',
		fullDate: 'March 25, 2026',
		category: 'Boat Show',
		address: '101 S Flagler Dr, West Palm Beach, Florida',
		stand: 'Private attendance by appointment',
		openingHours: [
			'25/03 12PM - 7PM',
			'26/03 10AM - 7PM',
			'27/03 10AM - 7PM',
			'28/03 10AM - 7PM',
			'29/03 10AM - 5PM'
		],
		contactEmail: 'events@ramacciottiyachts.com',
		image: '/images/hero/hero-01.jpg',
		intro:
			'Ramacciotti Yachts will be present in Palm Beach for private conversations around Mediterranean and Caribbean charter planning, yacht introductions, and founder-led advisory.',
		note:
			'Guests are received with discretion and one point of contact throughout the show, whether the brief is personal chartering, family travel, or a corporate hospitality itinerary.'
	},
	{
		slug: 'cannes-yachting-festival',
		month: 'SEP',
		days: '8 - 13',
		year: '2026',
		title: 'Cannes Yachting Festival',
		location: 'Cannes',
		fullDate: 'September 8, 2026',
		category: 'Boat Show',
		address: 'Vieux Port & Port Canto, Cannes',
		stand: 'Private attendance by appointment',
		openingHours: [
			'08/09 10AM - 7PM',
			'09/09 10AM - 7PM',
			'10/09 10AM - 7PM',
			'11/09 10AM - 7PM',
			'12/09 10AM - 7PM',
			'13/09 10AM - 6PM'
		],
		contactEmail: 'events@ramacciottiyachts.com',
		image: '/images/hero/hero-04.jpg',
		intro:
			'Cannes remains one of the defining moments of the season. Ramacciotti Yachts attends with a selective program of meetings focused on charter planning, new-season intelligence, and long-term guest relationships.',
		note:
			'For returning clients, the festival is also a natural setting to extend the conversation into The Club and upcoming founder-led gatherings.'
	}
];

export function getEventBySlug(slug: string) {
	return events.find((event) => event.slug === slug);
}
