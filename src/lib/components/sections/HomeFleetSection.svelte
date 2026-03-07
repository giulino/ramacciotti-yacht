<script lang="ts">
	import { onMount } from 'svelte';

	type FleetVessel = {
		name: string;
		images: string[];
		length: string;
		guests: string;
		style: string;
		cruising: string;
	};

	const fleetVessels: FleetVessel[] = [
		{
			name: 'Riva Folgore 88',
			length: '88 ft',
			guests: '8 guests',
			style: 'Sport flybridge',
			cruising: 'Mediterranean day and multi-day charters',
			images: [
				'/images/fleet/folgore-88/folgore-88-01.jpg',
				'/images/fleet/folgore-88/folgore-88-02.jpg',
				'/images/fleet/folgore-88/folgore-88-03.jpg',
				'/images/fleet/folgore-88/folgore-88-04.jpg',
				'/images/fleet/folgore-88/folgore-88-05.jpg',
				'/images/fleet/folgore-88/folgore-88-06.jpg'
			]
		},
		{
			name: 'Casagnola Heritage',
			length: '85 ft',
			guests: '8 guests',
			style: 'Classic gentleman yacht',
			cruising: 'Founder-led coastal itineraries',
			images: [
				'/images/fleet/casagnola-heritage/casagnola-heritage-01.jpeg',
				'/images/fleet/casagnola-heritage/casagnola-heritage-02.jpeg',
				'/images/fleet/casagnola-heritage/casagnola-heritage-03.jpeg',
				'/images/fleet/casagnola-heritage/casagnola-heritage-04.jpeg',
				'/images/fleet/casagnola-heritage/casagnola-heritage-05.jpeg',
				'/images/fleet/casagnola-heritage/casagnola-heritage-06.jpeg'
			]
		},
		{
			name: 'Van Dutch 40',
			length: '40 ft',
			guests: '6 guests',
			style: 'Open day cruiser',
			cruising: 'Riviera day charters and transfers',
			images: ['/images/fleet/van-dutch-40/van-dutch-40-01.jpg', '/images/fleet/van-dutch-40/van-dutch-40-02.jpg']
		},
		{
			name: 'Ferretti 860',
			length: '86 ft',
			guests: '8 guests',
			style: 'Flybridge motor yacht',
			cruising: 'Long-weekend and hosted escapes',
			images: [
				'/images/fleet/ferretti-860/ferretti-860-16.jpg',
				'/images/fleet/ferretti-860/ferretti-860-17.jpg',
				'/images/fleet/ferretti-860/ferretti-860-29.jpg'
			]
		},
		{
			name: 'Mangusta 92',
			length: '92 ft',
			guests: '9 guests',
			style: 'Open performance yacht',
			cruising: 'High-energy coastal cruising',
			images: [
				'/images/fleet/mangusta-92/Mangusta92-2.jpg',
				'/images/fleet/mangusta-92/Mangusta92-0.jpg',
				'/images/fleet/mangusta-92/Mangusta92-4.jpg',
				'/images/fleet/mangusta-92/Mangusta92-7.jpg',
				'/images/fleet/mangusta-92/Mangusta92-6.jpg'
			]
		},
		{
			name: 'Pershing 70',
			length: '70 ft',
			guests: '6 guests',
			style: 'Performance coupé',
			cruising: 'Fast island hopping and day charters',
			images: ['/images/fleet/pershing-70/Pershing_35.jpg', '/images/fleet/pershing-70/Pershing_36.jpg']
		}
	];

	let activeIndexes = fleetVessels.map(() => 0);
	const slideDelayMs = 5200;
	let fleetSection: HTMLElement;

	onMount(() => {
		const timer = window.setInterval(() => {
			activeIndexes = activeIndexes.map(
				(currentIndex, vesselIndex) => (currentIndex + 1) % fleetVessels[vesselIndex].images.length
			);
		}, slideDelayMs);

		const htmlEl = document.documentElement;
		const bodyEl = document.body;

		const setSnapActive = (active: boolean) => {
			htmlEl.classList.toggle('fleet-snap-active', active);
			bodyEl.classList.toggle('fleet-snap-active', active);
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				setSnapActive(entry.isIntersecting);
			},
			{
				threshold: 0.08
			}
		);

		if (fleetSection) observer.observe(fleetSection);

		return () => {
			window.clearInterval(timer);
			observer.disconnect();
			setSnapActive(false);
		};
	});
</script>

<section id="fleet" bind:this={fleetSection} class="home-fleet">
	<header id="fleet-overview" class="fleet-heading-wrap">
		<h2 class="fleet-heading">
			<span class="fleet-heading-main">OUR</span>
			<span class="fleet-heading-italic">Fleet</span>
		</h2>
	</header>

	{#each fleetVessels as vessel, vesselIndex}
		<div class="fleet-stage" aria-label={`${vessel.name} image gallery`}>
			<a href="/" class="fleet-corner-logo" aria-label="Ramacciotti Yachts home">
				<img
					src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png"
					alt="Ramacciotti Yachts monogram"
					loading="lazy"
					decoding="async"
				/>
			</a>

			{#each vessel.images as src, imageIndex}
				<img
					src={src}
					alt={`${vessel.name} yacht`}
					class="fleet-image {imageIndex === activeIndexes[vesselIndex] ? 'is-active' : ''}"
					loading={vesselIndex === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
					decoding="async"
				/>
			{/each}

			<div class="fleet-overlay">
				<p class="fleet-name">{vessel.name}</p>
			</div>

			<div class="fleet-info">
				<button type="button" class="fleet-info-trigger" aria-label={`View quick details for ${vessel.name}`}>
					<span class="fleet-info-icon" aria-hidden="true">
						<span class="fleet-info-icon-dot"></span>
						<span class="fleet-info-icon-stem"></span>
					</span>
				</button>
				<div class="fleet-info-panel" aria-label={`${vessel.name} quick details`}>
					<p class="fleet-info-title">{vessel.name}</p>
					<dl class="fleet-info-grid">
						<div>
							<dt>Length</dt>
							<dd>{vessel.length}</dd>
						</div>
						<div>
							<dt>Guests</dt>
							<dd>{vessel.guests}</dd>
						</div>
						<div>
							<dt>Style</dt>
							<dd>{vessel.style}</dd>
						</div>
						<div>
							<dt>Cruising</dt>
							<dd>{vessel.cruising}</dd>
						</div>
					</dl>
				</div>
			</div>

			<a href="/fleet" class="fleet-inquire-cta" aria-label={`Inquire about ${vessel.name}`}>
				Inquire
			</a>
		</div>
	{/each}
</section>

<style>
	:global(html.fleet-snap-active),
	:global(body.fleet-snap-active) {
		scroll-snap-type: y proximity;
	}

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
		scroll-snap-align: start;
		scroll-snap-stop: normal;
	}

	.fleet-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transform: scale(1.02);
		transition: opacity 1.2s ease, transform 6.2s ease;
		will-change: opacity, transform;
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

	.fleet-info {
		position: absolute;
		top: clamp(0.92rem, 2vh, 1.35rem);
		right: clamp(1rem, 2.2vw, 2.4rem);
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 0.52rem;
		outline: none;
	}

	.fleet-info-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.6rem;
		min-height: 2.6rem;
		padding: 0.2rem;
		border: 1px solid rgba(247, 248, 252, 0.58);
		border-radius: 999px;
		background: rgba(8, 12, 24, 0.18);
		backdrop-filter: blur(5px);
		cursor: default;
		transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
		outline: none;
	}

	.fleet-info-icon {
		display: inline-flex;
		position: relative;
		align-items: center;
		justify-content: center;
		width: 1.22rem;
		height: 1.22rem;
		border-radius: 999px;
		border: 1px solid rgba(247, 248, 252, 0.9);
		transition: border-color 220ms ease;
	}

	.fleet-info-icon-dot,
	.fleet-info-icon-stem {
		position: absolute;
		left: 50%;
		background: rgba(247, 248, 252, 0.96);
		transform: translateX(-50%);
		transition: background-color 220ms ease;
	}

	.fleet-info-icon-dot {
		top: 0.24rem;
		width: 0.16rem;
		height: 0.16rem;
		border-radius: 999px;
	}

	.fleet-info-icon-stem {
		top: 0.47rem;
		width: 0.16rem;
		height: 0.34rem;
		border-radius: 999px;
	}

	.fleet-info-panel {
		width: min(18rem, calc(100vw - 2rem));
		padding: 1rem 1rem 0.95rem;
		border: 1px solid rgba(247, 248, 252, 0.18);
		background:
			linear-gradient(180deg, rgba(9, 13, 27, 0.88), rgba(9, 13, 27, 0.76)),
			rgba(9, 13, 27, 0.8);
		backdrop-filter: blur(12px);
		color: rgba(248, 249, 252, 0.96);
		opacity: 0;
		transform: translateY(-0.35rem);
		pointer-events: none;
		transition:
			opacity 220ms ease,
			transform 220ms ease,
			border-color 220ms ease;
	}

	.fleet-info:hover .fleet-info-panel,
	.fleet-info:focus-within .fleet-info-panel {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
		border-color: rgba(186, 154, 102, 0.34);
	}

	.fleet-info:hover .fleet-info-trigger,
	.fleet-info:focus-within .fleet-info-trigger {
		background: rgba(248, 249, 252, 0.96);
		border-color: rgba(248, 249, 252, 0.96);
		color: #12163b;
	}

	.fleet-info:hover .fleet-info-icon,
	.fleet-info:focus-within .fleet-info-icon {
		border-color: #12163b;
	}

	.fleet-info:hover .fleet-info-icon-dot,
	.fleet-info:hover .fleet-info-icon-stem,
	.fleet-info:focus-within .fleet-info-icon-dot,
	.fleet-info:focus-within .fleet-info-icon-stem {
		background: #12163b;
	}

	.fleet-info-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.05rem, 1.4vw, 1.35rem);
		line-height: 1;
		color: rgba(248, 249, 252, 0.98);
	}

	.fleet-info-grid {
		margin: 0.8rem 0 0;
		display: grid;
		gap: 0.72rem;
	}

	.fleet-info-grid div {
		display: grid;
		gap: 0.2rem;
	}

	.fleet-info-grid dt {
		margin: 0;
		font-family: var(--font-primary);
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(247, 248, 252, 0.52);
	}

	.fleet-info-grid dd {
		margin: 0;
		font-family: var(--font-primary);
		font-size: 0.88rem;
		line-height: 1.45;
		letter-spacing: 0.01em;
		color: rgba(247, 248, 252, 0.92);
	}

	.fleet-image.is-active {
		opacity: 1;
		transform: scale(1);
	}

	.fleet-overlay {
		position: absolute;
		left: clamp(1rem, 2.2vw, 2.4rem);
		bottom: clamp(1rem, 3vh, 2.4rem);
		z-index: 1;
		color: rgba(247, 248, 252, 0.95);
		text-shadow: 0 2px 18px rgba(8, 12, 25, 0.42);
	}

	.fleet-name {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5.4vw, 5.2rem);
		line-height: 0.94;
		letter-spacing: 0.005em;
	}

	.fleet-inquire-cta {
		position: absolute;
		right: clamp(1rem, 2.2vw, 2.4rem);
		bottom: clamp(1rem, 3vh, 2.4rem);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: clamp(6.2rem, 8.2vw, 7.8rem);
		min-height: clamp(2rem, 2.6vw, 2.4rem);
		padding: 0.42rem 0.9rem;
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

	.fleet-inquire-cta:hover,
	.fleet-inquire-cta:focus-visible {
		background: rgba(248, 249, 252, 0.96);
		border-color: rgba(248, 249, 252, 0.96);
		color: #12163b;
	}

	@media (max-width: 900px) {
		.fleet-stage {
			height: 100vh;
			height: 100svh;
		}

		.fleet-info {
			top: 0.9rem;
			right: 0.9rem;
		}

		.fleet-info-panel {
			width: min(15.5rem, calc(100vw - 1.8rem));
			padding: 0.9rem;
		}

		.fleet-overlay {
			left: 0.9rem;
			bottom: 1rem;
		}

		.fleet-inquire-cta {
			right: 0.9rem;
			bottom: 1rem;
		}
	}
</style>
