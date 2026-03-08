import { error } from "@sveltejs/kit";
import { g as getEventBySlug, e as events } from "../../../../chunks/events.js";
function load({ params }) {
  const event = getEventBySlug(params.slug);
  if (!event) {
    throw error(404, "Event not found");
  }
  const related = events.filter((item) => item.slug !== event.slug).slice(0, 2);
  return { event, related };
}
export {
  load
};
