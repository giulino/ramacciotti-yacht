<script lang="ts">
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	let { data } = $props();

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>{data.article.title} | Ramacciotti Journal</title>
	<meta name="description" content={data.article.excerpt} />
</svelte:head>

<div class="article-page">
	<EditorialTopNav />

	<!-- Article hero -->
	<header class="article-hero">
		<div class="article-hero-meta">
			<span>{data.article.category}</span>
			<span class="article-meta-sep"></span>
			<span>{formatDate(data.article.date)}</span>
		</div>
		<h1>{data.article.title}</h1>
	</header>

	<!-- Hero image -->
	<div class="article-hero-image">
		<img
			src={data.article.image}
			alt={data.article.title}
			loading="eager"
			decoding="async"
		/>
	</div>

	<!-- Article body -->
	<article class="article-body">
		<p class="article-lead">{data.article.excerpt}</p>
		<p>
			Every voyage is curated around context: season, guest profile, and the atmosphere you want to create.
			Our role is to align these details with precision so the experience feels both effortless and deeply personal.
		</p>
		<p>
			If this chapter resonates with your next itinerary, we will prepare a private consultation and advise the
			right route forward.
		</p>

		<a href="/journal" class="article-back-link">Back to Journal</a>
	</article>

	<!-- Related articles -->
	{#if data.related.length}
		<section class="article-related">
			<div class="article-related-inner">
				<p class="article-related-kicker">Continue Reading</p>
				<div class="article-related-grid">
					{#each data.related as related}
						<a href="/journal/{related.slug}" class="article-related-card">
							<div class="article-related-image">
								<img
									src={related.image}
									alt={related.title}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div class="article-related-body">
								<p class="article-related-meta">
									<span>{related.category}</span>
									<span class="article-meta-sep"></span>
									<span>{formatDate(related.date)}</span>
								</p>
								<h3>{related.title}</h3>
								<p>{related.excerpt}</p>
								<span class="article-related-read">Read article</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	/* ---- Page shell ---- */
	.article-page {
		background: #fff;
		color: #12163b;
	}

	/* ---- Hero header ---- */
	.article-hero {
		max-width: min(var(--section-max-narrow), 52rem);
		margin: 0 auto;
		padding: clamp(7rem, 14vh, 10rem) var(--page-gutter) clamp(1.5rem, 3vh, 2.5rem);
		text-align: center;
	}

	.article-hero-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		font-family: var(--font-primary);
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
	}

	.article-meta-sep {
		display: inline-block;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: rgba(18, 22, 59, 0.3);
	}

	.article-hero h1 {
		margin: 0.9rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2.2rem, 5.5vw, 4.4rem);
		line-height: 1.02;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	/* ---- Hero image ---- */
	.article-hero-image {
		max-width: min(var(--section-max), 72rem);
		margin: 0 auto;
		padding: 0 var(--page-gutter);
	}

	.article-hero-image img {
		width: 100%;
		height: clamp(18rem, 45vh, 32rem);
		object-fit: cover;
	}

	/* ---- Article body ---- */
	.article-body {
		max-width: min(var(--section-copy-max), 40rem);
		margin: 0 auto;
		padding: clamp(2.2rem, 5vh, 3.5rem) var(--page-gutter) clamp(3rem, 7vh, 5rem);
	}

	.article-lead {
		font-family: var(--font-primary);
		font-size: clamp(1.05rem, 1.2vw, 1.15rem);
		line-height: 1.78;
		color: rgba(18, 22, 59, 0.88);
		font-weight: 500;
	}

	.article-body p {
		margin: 0 0 1.4rem;
		font-family: var(--font-primary);
		font-size: clamp(0.96rem, 1.08vw, 1.04rem);
		line-height: 1.78;
		letter-spacing: 0.006em;
		color: rgba(18, 22, 59, 0.78);
	}

	.article-back-link {
		display: inline-block;
		margin-top: 1rem;
		border-bottom: 1px solid rgba(18, 22, 59, 0.3);
		padding-bottom: 0.15rem;
		font-family: var(--font-primary);
		font-size: 0.78rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.65);
		transition: color 220ms ease, border-color 220ms ease;
	}

	.article-back-link:hover {
		color: rgba(186, 154, 102, 0.95);
		border-color: rgba(186, 154, 102, 0.7);
	}

	/* ---- Related articles ---- */
	.article-related {
		background: #f8f6f1;
		border-top: 1px solid rgba(18, 22, 59, 0.06);
	}

	.article-related-inner {
		max-width: min(var(--section-max), 72rem);
		margin: 0 auto;
		padding: clamp(2.8rem, 6vh, 4.5rem) var(--page-gutter) clamp(3rem, 7vh, 5rem);
	}

	.article-related-kicker {
		margin: 0 0 1.5rem;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
		text-align: center;
	}

	.article-related-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(1rem, 1.8vw, 1.5rem);
	}

	.article-related-card {
		display: flex;
		flex-direction: column;
		background: #fff;
		border: 1px solid rgba(18, 22, 59, 0.08);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: border-color 220ms ease;
	}

	.article-related-card:hover {
		border-color: rgba(186, 154, 102, 0.4);
	}

	.article-related-image {
		aspect-ratio: 16 / 9;
		overflow: hidden;
	}

	.article-related-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 700ms ease;
	}

	.article-related-card:hover .article-related-image img {
		transform: scale(1.03);
	}

	.article-related-body {
		padding: clamp(1rem, 1.6vw, 1.4rem);
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.article-related-meta {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-primary);
		font-size: 0.68rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
	}

	.article-related-body h3 {
		margin: 0.6rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.2rem, 1.8vw, 1.65rem);
		line-height: 1.08;
		color: #12163b;
	}

	.article-related-body p {
		margin: 0.6rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.88rem, 0.94vw, 0.95rem);
		line-height: 1.6;
		color: rgba(18, 22, 59, 0.72);
		flex: 1;
	}

	.article-related-read {
		margin-top: 0.8rem;
		display: inline-block;
		border-bottom: 1px solid rgba(18, 22, 59, 0.3);
		padding-bottom: 0.15rem;
		font-family: var(--font-primary);
		font-size: 0.74rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.65);
		transition: color 220ms ease, border-color 220ms ease;
	}

	.article-related-card:hover .article-related-read {
		color: rgba(186, 154, 102, 0.95);
		border-color: rgba(186, 154, 102, 0.7);
	}

	/* ---- Responsive: 1024–1439 ---- */
	@media (max-width: 1439px) and (min-width: 1024px) {
		.article-hero {
			padding-top: clamp(6rem, 11vh, 8rem);
		}

		.article-hero h1 {
			font-size: clamp(2rem, 4.5vw, 3.5rem);
		}
	}

	/* ---- Responsive: 768–1023 ---- */
	@media (max-width: 1023px) and (min-width: 768px) {
		.article-hero {
			padding-top: clamp(5.5rem, 10vh, 7rem);
		}

		.article-hero h1 {
			font-size: clamp(1.9rem, 5vw, 3rem);
		}

		.article-related-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	/* ---- Responsive: mobile ---- */
	@media (max-width: 767px) {
		.article-hero {
			padding-top: clamp(5rem, 9vh, 6.5rem);
			padding-bottom: 1.2rem;
		}

		.article-hero h1 {
			font-size: clamp(1.7rem, 8vw, 2.4rem);
		}

		.article-hero-image img {
			height: clamp(14rem, 35vh, 22rem);
		}

		.article-related-grid {
			grid-template-columns: 1fr;
		}

		.article-related-body h3 {
			font-size: clamp(1.15rem, 5vw, 1.5rem);
		}
	}
</style>
