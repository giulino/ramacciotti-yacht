<script lang="ts">
	import { journalArticles, type JournalCategory } from '$lib/data/journal';
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	const categories: JournalCategory[] = ['Voyages', "Founder's Notes", 'Partners', 'News'];
	let activeCategory = $state<JournalCategory | 'All'>('All');

	const filteredArticles = $derived(
		activeCategory === 'All'
			? journalArticles
			: journalArticles.filter((a) => a.category === activeCategory)
	);

	const featuredArticle = $derived(filteredArticles[0]);
	const remainingArticles = $derived(filteredArticles.slice(1));

	let newsletterState = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let newsletterError = $state('');

	async function subscribe(event: SubmitEvent) {
		event.preventDefault();
		newsletterState = 'loading';
		newsletterError = '';

		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		const response = await fetch('/api/newsletter', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				email: data.get('email'),
				consent: data.get('consent') === 'on',
				source: 'journal'
			})
		});

		if (!response.ok) {
			const body = (await response.json().catch(() => null)) as { error?: string } | null;
			newsletterState = 'error';
			newsletterError = body?.error ?? 'Unable to subscribe right now.';
			return;
		}

		form.reset();
		newsletterState = 'success';
	}

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>Ramacciotti Yachts | Journal</title>
	<meta
		name="description"
		content="Journal notes from Ramacciotti Yachts: voyages, founder reflections, partners, and seasonal updates."
	/>
</svelte:head>

<div class="journal-page">
	<EditorialTopNav />

	<!-- Hero header -->
	<header class="journal-hero">
		<p class="journal-hero-kicker">The Journal</p>
		<h1>Stories from the Sea</h1>
		<p class="journal-hero-subtitle">
			Voyages, reflections, and seasonal notes from the world of Ramacciotti Yachts —
			written with the same care and discretion that define every journey we create.
		</p>
	</header>

	<!-- Category filter -->
	<nav class="journal-filters" aria-label="Filter articles by category">
		<button
			class="journal-filter-btn {activeCategory === 'All' ? 'is-active' : ''}"
			onclick={() => (activeCategory = 'All')}
		>
			All
		</button>
		{#each categories as cat}
			<button
				class="journal-filter-btn {activeCategory === cat ? 'is-active' : ''}"
				onclick={() => (activeCategory = cat)}
			>
				{cat}
			</button>
		{/each}
	</nav>

	<!-- Featured article -->
	{#if featuredArticle}
		<section class="journal-featured">
			<a href="/journal/{featuredArticle.slug}" class="journal-featured-link">
				<div class="journal-featured-image">
					<img
						src={featuredArticle.image}
						alt={featuredArticle.title}
						loading="eager"
						decoding="async"
					/>
				</div>
				<div class="journal-featured-content">
					<p class="journal-featured-meta">
						<span>{featuredArticle.category}</span>
						<span class="journal-meta-sep"></span>
						<span>{formatDate(featuredArticle.date)}</span>
					</p>
					<h2>{featuredArticle.title}</h2>
					<p class="journal-featured-excerpt">{featuredArticle.excerpt}</p>
					<span class="journal-read-link">Continue reading</span>
				</div>
			</a>
		</section>
	{/if}

	<!-- Article grid -->
	{#if remainingArticles.length}
		<section class="journal-grid-section">
			<div class="journal-grid">
				{#each remainingArticles as article}
					<a href="/journal/{article.slug}" class="journal-card">
						<div class="journal-card-image">
							<img
								src={article.image}
								alt={article.title}
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div class="journal-card-body">
							<p class="journal-card-meta">
								<span>{article.category}</span>
								<span class="journal-meta-sep"></span>
								<span>{formatDate(article.date)}</span>
							</p>
							<h3>{article.title}</h3>
							<p class="journal-card-excerpt">{article.excerpt}</p>
							<span class="journal-read-link">Continue reading</span>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Newsletter section -->
	<section class="journal-newsletter">
		<div class="journal-newsletter-inner">
			<p class="journal-newsletter-kicker">Stay Connected</p>
			<h2>The Founder's Dispatch</h2>
			<p class="journal-newsletter-desc">
				Seasonal reflections, new voyage notes, and quiet updates — delivered personally from Tommaso and Francesca.
			</p>
			<form class="journal-newsletter-form" onsubmit={subscribe}>
				<div class="journal-newsletter-field">
					<input
						type="email"
						name="email"
						placeholder="Your email address"
						required
					/>
					<button
						type="submit"
						disabled={newsletterState === 'loading'}
					>
						{newsletterState === 'loading' ? 'Subscribing...' : 'Subscribe'}
					</button>
				</div>
				<label class="journal-newsletter-consent">
					<input type="checkbox" name="consent" required />
					<span>I consent to receiving Journal updates and can unsubscribe at any time.</span>
				</label>
			</form>
			{#if newsletterState === 'success'}
				<p class="journal-newsletter-msg">Thank you — you're now part of the circle.</p>
			{/if}
			{#if newsletterState === 'error'}
				<p class="journal-newsletter-msg is-error">{newsletterError}</p>
			{/if}
		</div>
	</section>
</div>

<style>
	/* ---- Page shell ---- */
	.journal-page {
		background: #fff;
		color: #12163b;
	}

	/* ---- Hero header ---- */
	.journal-hero {
		max-width: min(var(--section-max-narrow), 68rem);
		margin: 0 auto;
		padding: clamp(7rem, 14vh, 10rem) var(--page-gutter) clamp(2rem, 5vh, 3.5rem);
		text-align: center;
	}

	.journal-hero-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.86rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.6);
	}

	.journal-hero h1 {
		margin: 0.7rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2.6rem, 6.5vw, 5.8rem);
		line-height: 0.94;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.journal-hero-subtitle {
		margin: 1.3rem auto 0;
		max-width: 42rem;
		font-family: var(--font-primary);
		font-size: clamp(0.96rem, 1.12vw, 1.08rem);
		line-height: 1.72;
		letter-spacing: 0.008em;
		color: rgba(18, 22, 59, 0.78);
	}

	/* ---- Category filters ---- */
	.journal-filters {
		max-width: min(var(--section-max), 84rem);
		margin: 0 auto;
		padding: 0 var(--page-gutter) clamp(1.8rem, 4vh, 3rem);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.journal-filter-btn {
		border: 1px solid rgba(18, 22, 59, 0.16);
		border-radius: 999px;
		padding: 0.38rem 0.85rem;
		background: transparent;
		font-family: var(--font-primary);
		font-size: 0.73rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.65);
		cursor: pointer;
		transition: all 200ms ease;
	}

	.journal-filter-btn:hover {
		border-color: rgba(186, 154, 102, 0.6);
		color: rgba(186, 154, 102, 0.95);
	}

	.journal-filter-btn.is-active {
		background: #12163b;
		border-color: #12163b;
		color: #f8f6f1;
	}

	/* ---- Featured article ---- */
	.journal-featured {
		max-width: min(var(--section-max), 84rem);
		margin: 0 auto;
		padding: 0 var(--page-gutter) clamp(1.5rem, 3vh, 2.5rem);
	}

	.journal-featured-link {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		align-items: stretch;
		background: #f8f6f1;
		border: 1px solid rgba(18, 22, 59, 0.08);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
	}

	.journal-featured-image {
		aspect-ratio: 16 / 11;
		overflow: hidden;
	}

	.journal-featured-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 700ms ease;
	}

	.journal-featured-link:hover .journal-featured-image img {
		transform: scale(1.03);
	}

	.journal-featured-content {
		padding: clamp(1.6rem, 3vw, 2.8rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.journal-featured-meta {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-primary);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.58);
	}

	.journal-meta-sep {
		display: inline-block;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: rgba(18, 22, 59, 0.3);
	}

	.journal-featured-content h2 {
		margin: 0.8rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.6rem, 2.6vw, 2.6rem);
		line-height: 1.05;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.journal-featured-excerpt {
		margin: 0.9rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.94rem, 1vw, 1.02rem);
		line-height: 1.68;
		color: rgba(18, 22, 59, 0.78);
	}

	.journal-read-link {
		margin-top: 1rem;
		display: inline-block;
		border-bottom: 1px solid rgba(18, 22, 59, 0.35);
		padding-bottom: 0.15rem;
		font-family: var(--font-primary);
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.72);
		transition: color 220ms ease, border-color 220ms ease;
	}

	.journal-featured-link:hover .journal-read-link,
	.journal-card:hover .journal-read-link {
		color: rgba(186, 154, 102, 0.95);
		border-color: rgba(186, 154, 102, 0.7);
	}

	/* ---- Article grid ---- */
	.journal-grid-section {
		max-width: min(var(--section-max), 84rem);
		margin: 0 auto;
		padding: clamp(0.5rem, 1.5vh, 1rem) var(--page-gutter) clamp(3rem, 7vh, 5rem);
	}

	.journal-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1rem, 1.8vw, 1.5rem);
	}

	.journal-card {
		display: flex;
		flex-direction: column;
		background: #f8f6f1;
		border: 1px solid rgba(18, 22, 59, 0.08);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: border-color 220ms ease;
	}

	.journal-card:hover {
		border-color: rgba(186, 154, 102, 0.4);
	}

	.journal-card-image {
		aspect-ratio: 16 / 10;
		overflow: hidden;
	}

	.journal-card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 700ms ease;
	}

	.journal-card:hover .journal-card-image img {
		transform: scale(1.03);
	}

	.journal-card-body {
		padding: clamp(1rem, 1.6vw, 1.4rem);
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.journal-card-meta {
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

	.journal-card h3 {
		margin: 0.6rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.2rem, 1.7vw, 1.65rem);
		line-height: 1.08;
		color: #12163b;
	}

	.journal-card-excerpt {
		margin: 0.65rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.88rem, 0.94vw, 0.95rem);
		line-height: 1.6;
		color: rgba(18, 22, 59, 0.76);
		flex: 1;
	}

	/* ---- Newsletter ---- */
	.journal-newsletter {
		background: #f8f6f1;
		color: #12163b;
	}

	.journal-newsletter-inner {
		max-width: min(var(--section-max-narrow), 42rem);
		margin: 0 auto;
		padding: clamp(3.5rem, 8vh, 6rem) var(--page-gutter);
		text-align: center;
	}

	.journal-newsletter-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.84rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.55);
	}

	.journal-newsletter-inner h2 {
		margin: 0.7rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.9rem, 4.5vw, 3.4rem);
		line-height: 0.98;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.journal-newsletter-desc {
		margin: 1rem auto 0;
		max-width: 34rem;
		font-family: var(--font-primary);
		font-size: clamp(0.94rem, 1.05vw, 1.02rem);
		line-height: 1.7;
		color: rgba(18, 22, 59, 0.72);
	}

	.journal-newsletter-form {
		margin-top: 1.8rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.journal-newsletter-field {
		display: flex;
		width: 100%;
		max-width: 28rem;
		border: 1px solid rgba(18, 22, 59, 0.16);
		background: #fff;
	}

	.journal-newsletter-field input[type='email'] {
		flex: 1;
		min-width: 0;
		border: none;
		background: transparent;
		padding: 0.75rem 1rem;
		font-family: var(--font-primary);
		font-size: 0.88rem;
		color: #12163b;
		outline: none;
	}

	.journal-newsletter-field input[type='email']::placeholder {
		color: rgba(18, 22, 59, 0.35);
	}

	.journal-newsletter-field button {
		padding: 0.75rem 1.3rem;
		border: none;
		border-left: 1px solid rgba(18, 22, 59, 0.16);
		background: transparent;
		font-family: var(--font-primary);
		font-size: 0.74rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(186, 154, 102, 0.9);
		cursor: pointer;
		transition: color 200ms ease;
		white-space: nowrap;
	}

	.journal-newsletter-field button:hover {
		color: #12163b;
	}

	.journal-newsletter-field button:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.journal-newsletter-consent {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		max-width: 28rem;
		text-align: left;
	}

	.journal-newsletter-consent input[type='checkbox'] {
		margin-top: 0.15rem;
		width: 1rem;
		height: 1rem;
		accent-color: rgba(186, 154, 102, 0.85);
		flex-shrink: 0;
	}

	.journal-newsletter-consent span {
		font-family: var(--font-primary);
		font-size: 0.78rem;
		line-height: 1.5;
		color: rgba(18, 22, 59, 0.55);
	}

	.journal-newsletter-msg {
		margin-top: 1rem;
		font-family: var(--font-primary);
		font-size: 0.86rem;
		color: rgba(18, 22, 59, 0.7);
	}

	.journal-newsletter-msg.is-error {
		color: #c04040;
	}

	/* ---- Responsive: 1024–1439 ---- */
	@media (max-width: 1439px) and (min-width: 1024px) {
		.journal-hero {
			padding-top: clamp(6rem, 11vh, 8rem);
		}

		.journal-hero h1 {
			font-size: clamp(2.2rem, 5.2vw, 4.2rem);
		}

		.journal-featured-content h2 {
			font-size: clamp(1.5rem, 2.2vw, 2.2rem);
		}
	}

	/* ---- Responsive: 768–1023 ---- */
	@media (max-width: 1023px) and (min-width: 768px) {
		.journal-hero {
			padding-top: clamp(5.5rem, 10vh, 7rem);
		}

		.journal-hero h1 {
			font-size: clamp(2rem, 5.5vw, 3.4rem);
		}

		.journal-featured-link {
			grid-template-columns: 1fr;
		}

		.journal-featured-image {
			aspect-ratio: 16 / 8;
		}

		.journal-featured-content {
			padding: 1.4rem 1.3rem 1.6rem;
		}

		.journal-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* ---- Responsive: mobile ---- */
	@media (max-width: 767px) {
		.journal-hero {
			padding-top: clamp(5rem, 9vh, 6.5rem);
			padding-bottom: 1.5rem;
		}

		.journal-hero h1 {
			font-size: clamp(1.9rem, 9vw, 2.8rem);
		}

		.journal-hero-subtitle {
			font-size: 0.94rem;
			line-height: 1.6;
		}

		.journal-filters {
			gap: 0.4rem;
			padding-bottom: 1.5rem;
		}

		.journal-filter-btn {
			font-size: 0.68rem;
			padding: 0.32rem 0.7rem;
		}

		.journal-featured-link {
			grid-template-columns: 1fr;
		}

		.journal-featured-image {
			aspect-ratio: 16 / 9;
		}

		.journal-featured-content {
			padding: 1.2rem 1rem 1.4rem;
		}

		.journal-featured-content h2 {
			font-size: clamp(1.4rem, 6vw, 2rem);
		}

		.journal-grid {
			grid-template-columns: 1fr;
		}

		.journal-card h3 {
			font-size: clamp(1.2rem, 5.5vw, 1.6rem);
		}

		.journal-newsletter-field {
			flex-direction: column;
		}

		.journal-newsletter-field button {
			border-left: none;
			border-top: 1px solid rgba(18, 22, 59, 0.16);
			padding: 0.7rem 1rem;
		}
	}
</style>
