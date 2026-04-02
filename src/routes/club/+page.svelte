<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	const benefits = [
		'Continuity of service',
		'Priority access',
		'Complementary onboard perks',
		'Private events & experiences',
		'Selected partnerships & advantages',
		'Dedicated advisory relationship'
	];
</script>

<svelte:head>
	<title>Ramacciotti Yachts | The Club</title>
	<style>
		body { background-color: #ffffff !important; background-image: none !important; }
	</style>
</svelte:head>

<div class="club-page">
	<EditorialTopNav />

	<!-- Hero -->
	<section class="club-hero">
		<p class="club-kicker">The Club</p>
		<h1>Belonging begins when the voyage ends.</h1>
		<p class="club-intro">
			The Ramacciotti Club is a private circle for returning guests. It offers continuity: priority access,
			selected gatherings, and a founder relationship that extends beyond a single itinerary.
		</p>
	</section>

	<!-- Card + Benefits in destination-style layout -->
	<section class="club-block">
		<div class="club-block-media">
			<img
				src="https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/THE-CLUB/CARD.png"
				alt="Ramacciotti Club membership card"
				loading="lazy"
				decoding="async"
			/>
		</div>
		<div class="club-block-copy">
			<p class="club-benefits-kicker">Membership Benefits</p>
			<ul class="club-benefits-list">
				{#each benefits as benefit}
					<li>{benefit}</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Consultation form -->
	<section class="club-form-section">
		<div class="club-form-inner">
			<ConsultationForm
				context="Club"
				title="Discover the Club"
				subtitle="Share your preferred season and we will introduce the right path into the Club."
				variant="soft"
			/>
		</div>
	</section>
</div>

<style>
	.club-page {
		background: #ffffff;
		color: #12163b;
		min-height: 100vh;
	}

	/* ---- Hero ---- */
	.club-hero {
		max-width: min(var(--section-max-narrow), 58rem);
		margin: 0 auto;
		padding: clamp(7rem, 14vh, 10rem) var(--page-gutter) clamp(2.5rem, 6vh, 4rem);
	}

	.club-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
	}

	.club-hero h1 {
		margin: 0.7rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2.2rem, 5.5vw, 4.6rem);
		line-height: 1.04;
		letter-spacing: 0.003em;
		color: #12163b;
		max-width: 38rem;
	}

	.club-intro {
		margin: 1.5rem 0 0;
		max-width: 38rem;
		font-family: var(--font-primary);
		font-size: clamp(0.96rem, 1.12vw, 1.08rem);
		line-height: 1.72;
		letter-spacing: 0.008em;
		color: rgba(18, 22, 59, 0.78);
	}

	/* ---- Card + Benefits block (destination-style) ---- */
	.club-block {
		display: grid;
		grid-template-columns: minmax(20rem, 1.05fr) minmax(20rem, 0.95fr);
		align-items: stretch;
		min-height: min(54vh, 34rem);
		padding: 0 var(--page-gutter);
		max-width: min(var(--section-max), 84rem);
		margin: 0 auto;
	}

	.club-block-media {
		overflow: hidden;
	}

	.club-block-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.club-block-copy {
		background: #f8f6f1;
		padding: clamp(1.5rem, 3vw, 2.5rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.club-benefits-kicker {
		margin: 0 0 clamp(1rem, 2vh, 1.5rem);
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
	}

	.club-benefits-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.club-benefits-list li {
		padding: clamp(0.8rem, 1.3vh, 1.05rem) 0;
		border-bottom: 1px solid rgba(18, 22, 59, 0.1);
		font-family: var(--font-display);
		font-size: clamp(1.1rem, 1.45vw, 1.4rem);
		line-height: 1.2;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.club-benefits-list li:first-child {
		border-top: 1px solid rgba(18, 22, 59, 0.1);
	}

	/* ---- Form ---- */
	.club-form-section {
		border-top: 1px solid rgba(18, 22, 59, 0.06);
		margin-top: clamp(2rem, 5vh, 3.5rem);
	}

	.club-form-inner {
		max-width: min(var(--section-max-narrow), 58rem);
		margin: 0 auto;
		padding: clamp(2rem, 5vh, 3.5rem) var(--page-gutter) clamp(3rem, 7vh, 5rem);
	}

	/* ---- Responsive: 1024–1439 ---- */
	@media (max-width: 1439px) and (min-width: 1024px) {
		.club-hero {
			padding-top: clamp(6rem, 11vh, 8rem);
		}

		.club-hero h1 {
			font-size: clamp(2rem, 4.5vw, 3.6rem);
		}

		.club-block {
			min-height: min(46vh, 28rem);
		}
	}

	/* ---- Responsive: 768–1023 ---- */
	@media (max-width: 1023px) and (min-width: 768px) {
		.club-hero {
			padding-top: clamp(5.5rem, 10vh, 7rem);
		}

		.club-hero h1 {
			font-size: clamp(1.9rem, 5vw, 3rem);
		}

		.club-block {
			grid-template-columns: 1fr;
			min-height: 0;
		}

		.club-block-media {
			height: 28vh;
		}

		.club-block-copy {
			padding: 1.3rem 1.2rem 1.5rem;
		}
	}

	/* ---- Responsive: mobile ---- */
	@media (max-width: 767px) {
		.club-hero {
			padding-top: clamp(5rem, 9vh, 6.5rem);
		}

		.club-hero h1 {
			font-size: clamp(1.7rem, 8vw, 2.4rem);
		}

		.club-block {
			grid-template-columns: 1fr;
			min-height: 0;
			padding: 0 0.95rem;
		}

		.club-block-media {
			height: 26vh;
		}

		.club-block-copy {
			padding: 1.2rem 1rem 1.3rem;
		}

		.club-benefits-list li {
			font-size: clamp(1.05rem, 4.5vw, 1.25rem);
		}
	}
</style>
