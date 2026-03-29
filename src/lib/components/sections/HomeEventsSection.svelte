<script lang="ts">
	import { events } from '$lib/data/events';

	let activeEventIndex: number | null = null;
</script>

<section id="events-home" class="home-events">
	<div class="events-shell">
		<header class="events-header">
			<div>
				<p class="events-kicker">Events</p>
				<h2>Upcoming Events</h2>
			</div>
			<a href="/journal" class="events-pill">View Journal</a>
		</header>

	<div class="events-list" class:is-hovering={activeEventIndex !== null}>
			{#each events as event, index}
				<div
					class:event-active={activeEventIndex === index}
					class="event-row"
					role="group"
					aria-label={`${event.title}, ${event.location}`}
					onmouseenter={() => {
						activeEventIndex = index;
					}}
					onmouseleave={() => {
						activeEventIndex = null;
					}}
				>
					<div class="event-date" aria-label={`${event.month} ${event.days}, ${event.year}`}>
						<span>{event.month} {event.days}</span>
						<span>{event.year}</span>
					</div>
					<div class="event-main">
						<h3>{event.title}</h3>
						<p>{event.location}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.home-events {
		background: #ffffff;
		color: #12163b;
	}

	.events-shell {
		width: 100%;
		margin: 0 auto;
		padding: clamp(2.4rem, 6vh, 4.4rem) var(--page-gutter) clamp(3rem, 8vh, 5rem);
	}

	.events-header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1.4rem;
		border-bottom: 1px solid rgba(18, 22, 59, 0.14);
	}

	.events-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.86rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.62);
	}

	.events-header h2 {
		margin: 0.5rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.7rem, 4vw, 3rem);
		line-height: 0.96;
		color: rgba(18, 22, 59, 0.96);
	}

	.events-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(18, 22, 59, 0.22);
		border-radius: 999px;
		padding: 0.46rem 0.9rem;
		font-family: var(--font-primary);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.78);
		transition: border-color 220ms ease, color 220ms ease;
	}

	.events-pill:hover {
		border-color: rgba(186, 154, 102, 0.78);
		color: rgba(186, 154, 102, 0.95);
	}

	.events-list {
		display: grid;
	}

	.event-row {
		display: grid;
		grid-template-columns: minmax(7rem, 10rem) minmax(0, 1fr);
		gap: clamp(1rem, 2vw, 2rem);
		align-items: start;
		padding: clamp(1.25rem, 2.8vh, 2rem) 0;
		border-bottom: 1px solid rgba(18, 22, 59, 0.14);
		transition:
			opacity 220ms ease,
			transform 220ms ease,
			color 220ms ease;
	}

	.events-list.is-hovering .event-row {
		opacity: 0.36;
	}

	.events-list.is-hovering .event-row.event-active {
		opacity: 1;
	}

	.event-row:hover,
	.event-row:focus-visible {
		transform: translateX(0.18rem);
	}

	.event-row:focus-visible {
		outline: none;
	}

	.event-date {
		padding-top: 0.42rem;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.86vw, 0.82rem);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.66);
	}

	.event-date span {
		display: block;
	}

	.event-main {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.event-main h3 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(2.1rem, 6vw, 5.3rem);
		line-height: 0.95;
		letter-spacing: 0.002em;
		color: rgba(18, 22, 59, 0.96);
	}

	.event-main p {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.92rem, 1.1vw, 1rem);
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.56);
	}

	.event-row:hover .event-main h3,
	.event-row:focus-visible .event-main h3 {
		color: rgba(18, 22, 59, 1);
	}

	.event-row:hover .event-main p,
	.event-row:focus-visible .event-main p {
		color: rgba(186, 154, 102, 0.9);
	}

	@media (max-width: 1439px) and (min-width: 1024px) {
		.events-shell {
			padding-top: 2.1rem;
			padding-bottom: 3.6rem;
		}

		.event-row {
			grid-template-columns: minmax(6rem, 8.2rem) minmax(0, 1fr);
			gap: 1.25rem;
		}

		.event-main h3 {
			font-size: clamp(1.9rem, 4.6vw, 4rem);
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.events-header {
			flex-direction: column;
			align-items: start;
		}

		.events-shell {
			padding-top: 1.95rem;
			padding-bottom: 3rem;
		}

		.event-row {
			grid-template-columns: 1fr;
			gap: 0.8rem;
			padding-block: 1rem;
		}

		.event-date {
			padding-top: 0;
		}

		.event-main h3 {
			font-size: clamp(1.85rem, 5vw, 3rem);
		}
	}

</style>
