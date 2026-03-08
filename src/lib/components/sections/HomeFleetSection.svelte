<script lang="ts">
	const vessel = {
		name: 'Riva Folgore 88',
		image: '/images/fleet/folgore-88/folgore-88-01.jpg',
		length: '88 ft',
		guests: '8 guests',
		style: 'Sport flybridge',
		cruising: 'Mediterranean day and multi-day charters'
	};
</script>

<section id="fleet" class="home-fleet">
	<header id="fleet-overview" class="fleet-heading-wrap">
		<h2 class="fleet-heading">
			<span class="fleet-heading-main">OUR</span>
			<span class="fleet-heading-italic">Fleet</span>
		</h2>
	</header>

	<div class="fleet-stage" aria-label={`${vessel.name} feature image`}>
		<a href="/" class="fleet-corner-logo" aria-label="Ramacciotti Yachts home">
			<img
				src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png"
				alt="Ramacciotti Yachts monogram"
				loading="lazy"
				decoding="async"
			/>
		</a>

		<img
			src={vessel.image}
			alt={`${vessel.name} yacht`}
			class="fleet-image is-active"
			loading="eager"
			decoding="async"
		/>

		<a
			href="/fleet-showcase"
			data-sveltekit-reload
			class="fleet-discover-cta"
			aria-label={`Discover more about ${vessel.name}`}
		>
			Discover more
		</a>
	</div>
</section>

<style>
	.home-fleet {
		background: #fff;
	}

	.fleet-heading-wrap {
		padding: clamp(1.4rem, 2.4vh, 2.2rem) clamp(1rem, 2vw, 2rem) clamp(0.9rem, 1.6vh, 1.5rem);
		scroll-margin-top: clamp(4.5rem, 8vh, 6rem);
	}

	.fleet-heading {
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: clamp(0.5rem, 1vw, 1rem);
		color: rgba(20, 20, 20, 0.95);
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 7.2vw, 7rem);
		line-height: 0.92;
		letter-spacing: 0;
	}

	.fleet-heading-main {
		text-transform: uppercase;
	}

	.fleet-heading-italic {
		font-style: italic;
		font-weight: 400;
	}

	.fleet-stage {
		position: relative;
		height: 100vh;
		height: 100svh;
		width: 100%;
		overflow: hidden;
		background: #d9dbe0;
	}

	.fleet-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		transform: scale(1);
	}

	.fleet-corner-logo {
		position: absolute;
		top: clamp(0.78rem, 1.8vh, 1.2rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2.45rem, 3.4vw, 3.25rem);
		height: clamp(2.45rem, 3.4vw, 3.25rem);
	}

	.fleet-corner-logo img {
		width: 100%;
		height: auto;
	}

	.fleet-discover-cta {
		position: absolute;
		left: 50%;
		bottom: clamp(1rem, 3vh, 2.4rem);
		z-index: 2;
		transform: translateX(-50%);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: clamp(8rem, 11vw, 10rem);
		min-height: clamp(2.1rem, 2.8vw, 2.55rem);
		padding: 0.42rem 1.1rem;
		border: 1px solid rgba(247, 248, 252, 0.62);
		background: rgba(10, 14, 28, 0.14);
		backdrop-filter: blur(3px);
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.86vw, 0.86rem);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(248, 249, 252, 0.95);
		transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
	}

	.fleet-discover-cta:hover,
	.fleet-discover-cta:focus-visible {
		background: rgba(248, 249, 252, 0.96);
		border-color: rgba(248, 249, 252, 0.96);
		color: #12163b;
	}

	@media (max-width: 900px) {
		.fleet-discover-cta {
			bottom: 1rem;
		}
	}
</style>
