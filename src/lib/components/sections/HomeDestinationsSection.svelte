<script lang="ts">
	type Destination = {
		name: string;
		tagline: string;
		bestSeason: string;
		description: string;
		cta: string;
		image: string;
	};

	const destinations: Destination[] = [
		{
			tagline: 'The Caribbean',
			bestSeason: 'December - April',
			description:
				'A collection of islands shaped by light and rhythm — St. Barth, Antigua, the Bahamas, Cayman Islands. Warm winds, long lunches on deck, evenings of quiet laughter under starlit skies. A winter chapter written in turquoise.',
			cta: 'Enquire for Caribbean Voyages',
			image: 'https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/DESTINATIONS/CARAIBI.webp'
		},
		{
			tagline: 'Sardinia & Costa Smeralda',
			bestSeason: 'June - September',
			description:
				'Days of barefoot elegance between hidden coves and the unmistakable hum of Porto Cervo. The scent of the sea, Italian music in the distance, and the timeless ease of Mediterranean living. The heart of Mediterranean grace.',
			cta: 'Plan a Sardinia Voyage',
			image: 'https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/DESTINATIONS/SARDEGNA.jpg'
		},
		{
			tagline: 'Liguria Riviera',
			bestSeason: 'May - October',
			description:
				'Sail along a coastline painted with charm — Portofino, Camogli, Cinque Terre. Mornings of espresso and sea spray, evenings of lights flickering on the harbor. A voyage of light, cliffs, and quiet Italian rhythm.',
			cta: 'Request Itinerary Inspiration',
			image: 'https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/DESTINATIONS/LIGURIA.jpg'
		}
	];
</script>

<section id="destinations" class="home-destinations">
	<a href="/" class="destinations-corner-logo" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png"
			alt="Ramacciotti Yachts monogram"
			loading="lazy"
			decoding="async"
		/>
	</a>

	<header class="destinations-intro">
		<p class="destinations-kicker">Our Destinations</p>
		<h2>Journeys Curated by Feeling</h2>
	</header>

	<section class="destinations-editorial">
		{#each destinations as destination, index}
			<article class="destination-block {index % 2 === 1 ? 'is-reversed' : ''}">
				<div class="destination-media">
					<img src={destination.image} alt={destination.name} loading="lazy" decoding="async" />
				</div>
				<div class="destination-copy">
					<p class="destination-region">{destination.name}</p>
					<h3>{destination.tagline}</h3>
					<p>{destination.description}</p>
					<p class="destination-season">Best Season: {destination.bestSeason}</p>
					<a href="#home-enquiry" class="destination-cta">{destination.cta}</a>
				</div>
			</article>
		{/each}
	</section>
</section>

<style>
	.home-destinations {
		position: relative;
		background: #fff;
		color: #12163b;
	}

	.destinations-corner-logo {
		position: absolute;
		top: clamp(3rem, 6vh, 4.6rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2.45rem, 3.4vw, 3.25rem);
		height: clamp(2.45rem, 3.4vw, 3.25rem);
	}

	.destinations-corner-logo img {
		width: 100%;
		height: auto;
	}

	.destinations-intro {
		max-width: min(var(--section-max), 72rem);
		margin: 0 auto;
		padding: clamp(2.4rem, 6vh, 5rem) var(--page-gutter) clamp(1.8rem, 4vh, 3rem);
		text-align: center;
	}

	.destinations-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.9vw, 0.88rem);
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.7);
	}

	.destinations-intro h2 {
		margin: 0.55rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2.1rem, 5.4vw, 5.1rem);
		line-height: 0.95;
		letter-spacing: 0.002em;
	}

	.destinations-intro > p:last-child {
		margin: 1.1rem auto 0;
		max-width: min(var(--section-copy-max), 56rem);
		font-family: var(--font-primary);
		font-size: clamp(0.95rem, 1.15vw, 1.08rem);
		line-height: 1.72;
		letter-spacing: 0.008em;
		color: rgba(18, 22, 59, 0.84);
	}

	.destinations-editorial {
		padding: clamp(0.65rem, 1.7vh, 1.2rem) var(--page-gutter) clamp(1.7rem, 4.5vh, 3.3rem);
		display: grid;
		gap: clamp(0.6rem, 1.1vh, 0.9rem);
	}

	.destination-block {
		display: grid;
		grid-template-columns: minmax(20rem, 1.05fr) minmax(20rem, 0.95fr);
		align-items: stretch;
		min-height: min(54vh, 34rem);
	}

	.destination-block.is-reversed {
		grid-template-columns: minmax(20rem, 0.95fr) minmax(20rem, 1.05fr);
	}

	.destination-block.is-reversed .destination-media {
		order: 2;
	}

	.destination-block.is-reversed .destination-copy {
		order: 1;
	}

	.destination-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.destination-copy {
		background: #f8f6f1;
		padding: clamp(0.9rem, 2vw, 1.6rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.destination-region {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.86vw, 0.84rem);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.64);
	}

	.destination-copy h3 {
		margin: 0.52rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.32rem, 2.1vw, 2.2rem);
		line-height: 0.98;
	}

	.destination-copy > p {
		margin: 0.72rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.9rem, 0.92vw, 0.97rem);
		line-height: 1.56;
		letter-spacing: 0.007em;
		color: rgba(18, 22, 59, 0.87);
	}

	.destination-season {
		margin-top: 0.65rem;
		font-weight: 500;
	}

	.destination-cta {
		margin-top: 0.82rem;
		align-self: flex-start;
		border-bottom: 1px solid rgba(18, 22, 59, 0.52);
		padding-bottom: 0.18rem;
		font-family: var(--font-primary);
		font-size: 0.83rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #12163b;
		transition: color 220ms ease, border-color 220ms ease;
	}

	.destination-cta:hover {
		color: rgba(186, 154, 102, 0.95);
		border-color: rgba(186, 154, 102, 0.78);
	}

	@media (max-width: 1439px) and (min-width: 1024px) {
		.destinations-corner-logo {
			top: 2.45rem;
		}

		.destinations-intro {
			padding-top: 2.1rem;
			padding-bottom: 2rem;
		}

		.destinations-intro h2 {
			font-size: clamp(1.95rem, 4.6vw, 4rem);
		}

		.destinations-editorial {
			padding-top: 0.55rem;
			padding-bottom: 2.3rem;
		}

		.destination-block {
			min-height: min(46vh, 28rem);
		}

		.destination-copy {
			padding: 1.05rem 1rem;
		}

		.destination-copy h3 {
			font-size: clamp(1.2rem, 1.75vw, 1.85rem);
		}

		.destination-copy > p {
			font-size: 0.9rem;
			line-height: 1.5;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.destination-block,
		.destination-block.is-reversed {
			grid-template-columns: 1fr;
			min-height: 0;
		}

		.destination-block.is-reversed .destination-media,
		.destination-block.is-reversed .destination-copy {
			order: initial;
		}

		.destinations-corner-logo {
			top: 2rem;
		}

		.destinations-intro {
			padding-top: 1.9rem;
			padding-bottom: 1.55rem;
		}

		.destinations-intro h2 {
			font-size: clamp(1.85rem, 4.8vw, 3.1rem);
		}

		.destinations-intro > p:last-child {
			font-size: 0.98rem;
			line-height: 1.66;
		}

		.destination-media {
			height: 28vh;
		}

		.destination-copy {
			padding: 1.05rem 1rem 1.15rem;
		}

		.destination-copy h3 {
			margin-top: 0.5rem;
			font-size: clamp(1.35rem, 4.5vw, 1.95rem);
		}

		.destination-copy > p {
			margin-top: 0.72rem;
			font-size: 0.94rem;
			line-height: 1.58;
		}

		.destination-season {
			margin-top: 0.6rem;
		}

		.destination-cta {
			margin-top: 0.78rem;
		}
	}

	@media (max-width: 640px) {
		.destination-block,
		.destination-block.is-reversed {
			grid-template-columns: 1fr;
			min-height: 0;
		}

		.destination-block.is-reversed .destination-media,
		.destination-block.is-reversed .destination-copy {
			order: initial;
		}

		.destinations-intro {
			padding-bottom: 1.4rem;
		}

		.destinations-editorial {
			padding-top: 0.6rem;
			padding-bottom: 2.1rem;
			gap: 0.8rem;
		}

		.destination-media {
			height: 26vh;
		}

		.destination-copy {
			padding: 1rem 0.95rem 1.1rem;
		}

		.destination-copy h3 {
			margin-top: 0.5rem;
			font-size: clamp(1.28rem, 7vw, 1.85rem);
		}

		.destination-copy > p {
			margin-top: 0.72rem;
			font-size: 0.94rem;
			line-height: 1.58;
		}

		.destination-season {
			margin-top: 0.6rem;
		}

		.destination-cta {
			margin-top: 0.78rem;
		}
	}
</style>
