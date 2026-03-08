<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	type Vessel = {
		name: string;
		length: string;
		guests: string;
		style: string;
		cruising: string;
		images: string[];
	};

	const vessels: Vessel[] = [
		{
			name: 'Riva Folgore 88',
			length: '88 ft',
			guests: '8 guests',
			style: 'Sport flybridge',
			cruising: 'Mediterranean day and multi-day charters',
			images: [
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
			name: 'Magnum 40',
			length: '40 ft',
			guests: '6 guests',
			style: 'Open performance cruiser',
			cruising: 'Fast day charters and island transfers',
			images: ['/images/fleet/magnum-40/magnum-40-01.jpg']
		},
		{
			name: 'Pershing 70',
			length: '70 ft',
			guests: '6 guests',
			style: 'Performance coupé',
			cruising: 'Fast island hopping and day charters',
			images: ['/images/fleet/pershing-70/Pershing_35.jpg', '/images/fleet/pershing-70/Pershing_36.jpg']
		},
		{
			name: 'Van Dutch 40',
			length: '40 ft',
			guests: '6 guests',
			style: 'Open day cruiser',
			cruising: 'Riviera day charters and transfers',
			images: ['/images/fleet/van-dutch-40/van-dutch-40-01.jpg', '/images/fleet/van-dutch-40/van-dutch-40-02.jpg']
		}
	];

	let galleryTracks: Array<HTMLDivElement | null> = [];

	function scrollGallery(vesselIndex: number, direction: -1 | 1) {
		const track = galleryTracks[vesselIndex];
		if (!track) return;

		track.scrollBy({
			left: direction * track.clientWidth,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>Ramacciotti Yachts | Fleet</title>
</svelte:head>

<section class="fleet-page-intro">
	<EditorialTopNav />
	<div class="fleet-page-intro__shell">
		<p class="fleet-page-intro__kicker">Fleet</p>
		<h1>A considered fleet selected for character, crew quality, and life onboard.</h1>
	</div>
</section>

{#each vessels as vessel, vesselIndex}
	<section class="fleet-gallery" aria-label={`${vessel.name} gallery`}>
		<a href="/" class="fleet-gallery__logo" aria-label="Ramacciotti Yachts home">
			<img
				src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png"
				alt="Ramacciotti Yachts monogram"
				loading="lazy"
				decoding="async"
			/>
		</a>

		<div bind:this={galleryTracks[vesselIndex]} class="fleet-gallery__track">
			{#each vessel.images as image, imageIndex}
				<article class="fleet-gallery__slide" aria-label={`${vessel.name} image ${imageIndex + 1}`}>
					<img
						src={image}
						alt={`${vessel.name} yacht`}
						class="fleet-gallery__image"
						loading={vesselIndex === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
						decoding="async"
					/>
				</article>
			{/each}
		</div>

		<div class="fleet-gallery__bottom">
			<p class="fleet-gallery__name">{vessel.name}</p>

			<div class="fleet-gallery__details">
				<p><span>Length</span>{vessel.length}</p>
				<p><span>Guests</span>{vessel.guests}</p>
				<p><span>Style</span>{vessel.style}</p>
				<p><span>Cruising</span>{vessel.cruising}</p>
			</div>
		</div>

		{#if vessel.images.length > 1}
			<div class="fleet-gallery__arrows" aria-label="Gallery navigation">
				<button
					type="button"
					class="fleet-gallery__arrow"
					aria-label={`Previous ${vessel.name} image`}
					onclick={() => scrollGallery(vesselIndex, -1)}
				>
					<span aria-hidden="true">←</span>
				</button>
				<button
					type="button"
					class="fleet-gallery__arrow"
					aria-label={`Next ${vessel.name} image`}
					onclick={() => scrollGallery(vesselIndex, 1)}
				>
					<span aria-hidden="true">→</span>
				</button>
			</div>
		{/if}
	</section>
{/each}

<section class="fleet-consultation">
	<div class="fleet-consultation__shell">
		<ConsultationForm
			context="Fleet"
			title="Request a private proposal"
			subtitle="Tell us your preferred season and priorities. We will curate options accordingly."
			variant="soft"
		/>
	</div>
</section>

<style>
	.fleet-page-intro {
		position: relative;
		background: #ffffff;
		color: #12163b;
		padding: clamp(6.5rem, 14vh, 9.5rem) 0 clamp(3.2rem, 8vh, 5.4rem);
	}

	.fleet-page-intro__shell {
		max-width: 68rem;
		margin: 0 auto;
		padding: 0 clamp(1rem, 3.2vw, 2.8rem);
		text-align: center;
	}

	.fleet-page-intro__kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.92vw, 0.88rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(17, 26, 56, 0.68);
	}

	.fleet-page-intro h1 {
		margin: 0.62rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.96;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.fleet-gallery {
		position: relative;
		background: #ffffff;
	}

	.fleet-gallery + .fleet-gallery {
		border-top: 1px solid rgba(18, 22, 59, 0.08);
	}

	.fleet-gallery__logo {
		position: absolute;
		top: clamp(0.78rem, 1.8vh, 1.2rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 3;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2.45rem, 3.4vw, 3.25rem);
		height: clamp(2.45rem, 3.4vw, 3.25rem);
	}

	.fleet-gallery__logo img {
		width: 100%;
		height: auto;
	}

	.fleet-gallery__track {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 100vw;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		scrollbar-width: none;
	}

	.fleet-gallery__track::-webkit-scrollbar {
		display: none;
	}

	.fleet-gallery__slide {
		position: relative;
		width: 100vw;
		height: 100vh;
		height: 100svh;
		scroll-snap-align: start;
		background: #d8dbe0;
	}

	.fleet-gallery__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.fleet-gallery__bottom {
		position: absolute;
		left: clamp(1rem, 2.2vw, 2.4rem);
		right: clamp(1rem, 2.2vw, 2.4rem);
		bottom: clamp(1rem, 3vh, 2.4rem);
		z-index: 2;
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1.5rem;
		color: rgba(247, 248, 252, 0.96);
		text-shadow: 0 2px 18px rgba(8, 12, 25, 0.42);
	}

	.fleet-gallery__name {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5.4vw, 5.2rem);
		line-height: 0.94;
		letter-spacing: 0.005em;
	}

	.fleet-gallery__details {
		display: grid;
		gap: 0.55rem;
		min-width: min(20rem, 42vw);
	}

	.fleet-gallery__details p {
		margin: 0;
		display: grid;
		gap: 0.15rem;
		font-family: var(--font-primary);
		font-size: 0.92rem;
		line-height: 1.45;
		text-align: right;
	}

	.fleet-gallery__details span {
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(247, 248, 252, 0.62);
	}

	.fleet-gallery__arrows {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		padding: 0 clamp(1rem, 2.2vw, 2.4rem);
		transform: translateY(-50%);
		pointer-events: none;
	}

	.fleet-gallery__arrow {
		pointer-events: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border: 1px solid rgba(247, 248, 252, 0.58);
		border-radius: 999px;
		background: rgba(10, 14, 28, 0.18);
		backdrop-filter: blur(5px);
		color: rgba(248, 249, 252, 0.96);
		font-size: 1rem;
		transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
	}

	.fleet-gallery__arrow:hover,
	.fleet-gallery__arrow:focus-visible {
		background: rgba(248, 249, 252, 0.96);
		border-color: rgba(248, 249, 252, 0.96);
		color: #12163b;
	}

	.fleet-consultation {
		background: #ffffff;
		padding: clamp(3rem, 7vh, 5.5rem) 0 clamp(4rem, 8vh, 6rem);
	}

	.fleet-consultation__shell {
		max-width: 84rem;
		margin: 0 auto;
		padding: 0 clamp(1rem, 3vw, 2.8rem);
	}

	.fleet-consultation__shell :global(.mx-auto) {
		margin-top: 0;
		max-width: 50rem;
	}

	@media (max-width: 900px) {
		.fleet-gallery__bottom {
			flex-direction: column;
			align-items: start;
		}

		.fleet-gallery__details {
			min-width: 0;
		}

		.fleet-gallery__details p {
			text-align: left;
		}

		.fleet-gallery__arrows {
			top: auto;
			bottom: 1rem;
			transform: none;
		}

		.fleet-gallery__arrow {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
</style>
