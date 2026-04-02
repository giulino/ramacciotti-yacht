<script lang="ts">
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	const mission = [
		{
			numeral: 'I',
			title: 'Advisory First',
			text: 'Every engagement begins with listening, analysis, and informed guidance.'
		},
		{
			numeral: 'II',
			title: 'Tailored Execution',
			text: 'From planning through delivery, each charter reflects specific objectives, preferences & context.'
		},
		{
			numeral: 'III',
			title: 'Continuity Over Time',
			text: 'Relationships extend beyond individual voyages, building familiarity, trust, and consistency.'
		}
	];
</script>

<svelte:head>
	<title>Ramacciotti Yachts | About</title>
	<meta
		name="description"
		content="Ramacciotti Yachts was born from a lifelong connection with the sea. Discover our story, rooted in Capraia and shaped by intention."
	/>
	<style>
		body { background-color: #ffffff !important; background-image: none !important; }
	</style>
</svelte:head>

<div class="about-page">
	<EditorialTopNav />

	<!-- Hero -->
	<section class="about-hero">
		<img
			src="https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/ABOUT/fotoo.jpg"
			alt="The island of Capraia, where the story begins"
			class="about-hero-bg"
			loading="eager"
			decoding="async"
		/>
		<div class="about-hero-overlay"></div>
		<div class="about-hero-content">
			<p class="about-hero-kicker">Our Story</p>
			<h1>Ramacciotti Yachts was born from a lifelong connection with the sea.</h1>
		</div>
	</section>

	<!-- Story -->
	<section class="about-story">
		<div class="about-story-inner">
			<p>
				Growing up on the small island of Capraia, where life moves to the rhythm of wind and
				water, the sea was never simply a destination but a way of life. From this origin came the
				vision to create tailored and authentic journeys.
			</p>
		</div>
	</section>

	<!-- Mission -->
	<section class="about-mission">
		<div class="about-mission-inner">
			<p class="about-mission-kicker">Our Mission</p>
			<div class="about-mission-grid">
				{#each mission as pillar}
					<article class="about-mission-card">
						<div class="about-mission-card-header">
							<h3>{pillar.title}</h3>
							<span class="about-mission-numeral">{pillar.numeral}</span>
						</div>
						<p>{pillar.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	/* ---- Page shell ---- */
	.about-page {
		background: #ffffff;
		color: #12163b;
		min-height: 100vh;
		position: relative;
		z-index: 1;
	}

	/* ---- Hero ---- */
	.about-hero {
		position: relative;
		min-height: 85vh;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
	}

	.about-hero-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.about-hero-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to top, rgba(18, 22, 59, 0.72) 0%, rgba(18, 22, 59, 0.18) 45%, rgba(18, 22, 59, 0.08) 100%);
	}

	.about-hero-content {
		position: relative;
		z-index: 2;
		max-width: min(var(--section-max-narrow), 56rem);
		padding: 0 var(--page-gutter) clamp(3.5rem, 8vh, 6rem);
	}

	.about-hero-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(248, 246, 241, 0.6);
	}

	.about-hero h1 {
		margin: 0.8rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2.2rem, 5.5vw, 4.6rem);
		line-height: 1.06;
		letter-spacing: 0.003em;
		color: #fff;
		max-width: 42rem;
	}

	/* ---- Story ---- */
	.about-story {
		background: #ffffff;
	}

	.about-story-inner {
		max-width: min(var(--section-copy-max), 44rem);
		margin: 0 auto;
		padding: clamp(3rem, 7vh, 5.5rem) var(--page-gutter);
		text-align: center;
	}

	.about-story-inner p {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.15rem, 1.6vw, 1.45rem);
		line-height: 1.72;
		letter-spacing: 0.006em;
		color: rgba(18, 22, 59, 0.82);
		font-style: italic;
	}

	/* ---- Mission ---- */
	.about-mission {
		background: #fff;
		border-top: 1px solid rgba(18, 22, 59, 0.06);
	}

	.about-mission-inner {
		max-width: min(var(--section-max), 78rem);
		margin: 0 auto;
		padding: clamp(3rem, 7vh, 5.5rem) var(--page-gutter) clamp(3.5rem, 8vh, 6rem);
	}

	.about-mission-kicker {
		margin: 0 0 clamp(1.5rem, 3.5vh, 2.5rem);
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
		text-align: center;
	}

	.about-mission-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1rem, 1.8vw, 1.5rem);
	}

	.about-mission-card {
		background: #fff;
		border: 1px solid rgba(18, 22, 59, 0.08);
		padding: clamp(1.4rem, 2.2vw, 2rem);
		display: flex;
		flex-direction: column;
	}

	.about-mission-card-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.8rem;
		margin-bottom: clamp(0.8rem, 1.5vh, 1.2rem);
	}

	.about-mission-card h3 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.25rem, 1.8vw, 1.7rem);
		line-height: 1.08;
		color: #12163b;
		font-style: italic;
	}

	.about-mission-numeral {
		font-family: var(--font-display);
		font-size: clamp(0.9rem, 1.1vw, 1.05rem);
		color: rgba(18, 22, 59, 0.35);
		letter-spacing: 0.02em;
		flex-shrink: 0;
	}

	.about-mission-card p {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.88rem, 0.96vw, 0.95rem);
		line-height: 1.64;
		color: rgba(18, 22, 59, 0.72);
	}

	/* ---- Responsive: 1024–1439 ---- */
	@media (max-width: 1439px) and (min-width: 1024px) {
		.about-hero {
			min-height: 75vh;
		}

		.about-hero h1 {
			font-size: clamp(2rem, 4.5vw, 3.6rem);
		}
	}

	/* ---- Responsive: 768–1023 ---- */
	@media (max-width: 1023px) and (min-width: 768px) {
		.about-hero {
			min-height: 65vh;
		}

		.about-hero h1 {
			font-size: clamp(1.9rem, 4.8vw, 3rem);
		}

		.about-mission-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
		}

		.about-mission-card {
			padding: 1.2rem;
		}
	}

	/* ---- Responsive: mobile ---- */
	@media (max-width: 767px) {
		.about-hero {
			min-height: 60vh;
		}

		.about-hero h1 {
			font-size: clamp(1.7rem, 7.5vw, 2.4rem);
		}

		.about-story-inner p {
			font-size: clamp(1.05rem, 4.5vw, 1.2rem);
			line-height: 1.65;
		}

		.about-mission-grid {
			grid-template-columns: 1fr;
			gap: 0.8rem;
		}

		.about-mission-card {
			padding: 1.2rem 1.1rem;
		}
	}
</style>
