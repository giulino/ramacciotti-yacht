const events = [
  {
    slug: "palm-beach-international-boat-show",
    month: "MAR",
    days: "25 - 29",
    year: "2026",
    title: "Palm Beach International Boat Show",
    location: "Palm Beach",
    fullDate: "March 25, 2026",
    category: "Boat Show",
    address: "101 S Flagler Dr, West Palm Beach, Florida",
    stand: "Private attendance by appointment",
    openingHours: [
      "25/03 12PM - 7PM",
      "26/03 10AM - 7PM",
      "27/03 10AM - 7PM",
      "28/03 10AM - 7PM",
      "29/03 10AM - 5PM"
    ],
    contactEmail: "events@ramacciottiyachts.com",
    image: "/images/hero/hero-01.jpg",
    intro: "Ramacciotti Yachts will be present in Palm Beach for private conversations around Mediterranean and Caribbean charter planning, yacht introductions, and founder-led advisory.",
    note: "Guests are received with discretion and one point of contact throughout the show, whether the brief is personal chartering, family travel, or a corporate hospitality itinerary."
  },
  {
    slug: "dubai-international-boat-show",
    month: "APR",
    days: "8 - 12",
    year: "2026",
    title: "Dubai International Boat Show",
    location: "Dubai Harbour",
    fullDate: "April 8, 2026",
    category: "Boat Show",
    address: "Dubai Harbour, Dubai Marina District",
    stand: "Private attendance by appointment",
    openingHours: [
      "08/04 3PM - 8PM",
      "09/04 3PM - 8PM",
      "10/04 3PM - 8PM",
      "11/04 3PM - 8PM",
      "12/04 3PM - 8PM"
    ],
    contactEmail: "events@ramacciottiyachts.com",
    image: "/images/hero/casagnola-05.jpeg",
    intro: "In Dubai, our team hosts a limited number of appointments for owners, charter guests, and companies looking for a more discreet way to stage hospitality at sea.",
    note: "Meetings are tailored around your calendar and objectives, with curated yacht recommendations, routing ideas, and private next steps prepared in advance."
  },
  {
    slug: "cannes-yachting-festival",
    month: "SEP",
    days: "8 - 13",
    year: "2026",
    title: "Cannes Yachting Festival",
    location: "Cannes",
    fullDate: "September 8, 2026",
    category: "Boat Show",
    address: "Vieux Port & Port Canto, Cannes",
    stand: "Private attendance by appointment",
    openingHours: [
      "08/09 10AM - 7PM",
      "09/09 10AM - 7PM",
      "10/09 10AM - 7PM",
      "11/09 10AM - 7PM",
      "12/09 10AM - 7PM",
      "13/09 10AM - 6PM"
    ],
    contactEmail: "events@ramacciottiyachts.com",
    image: "/images/hero/hero-04.jpg",
    intro: "Cannes remains one of the defining moments of the season. Ramacciotti Yachts attends with a selective program of meetings focused on charter planning, new-season intelligence, and long-term guest relationships.",
    note: "For returning clients, the festival is also a natural setting to extend the conversation into The Club and upcoming founder-led gatherings."
  }
];
function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}
export {
  events as e,
  getEventBySlug as g
};
