<script lang="ts">
	type LaunchArticle = {
		title: string;
		type: 'Voyages' | "Founder's Notes" | 'Partners' | 'News';
		date: string;
		excerpt: string;
		image: string;
		href: string;
	};

	const launchArticles: LaunchArticle[] = [
		{
			title: 'The Calm Between Coves',
			type: 'Voyages',
			date: 'March 2, 2026',
			excerpt: 'Discover Sardinia through light, silence, and the effortless pace of summer.',
			image: '/images/destinations/SARDINIA2.jpg',
			href: '/journal'
		},
		{
			title: "Founders' Notes: The Art of Belonging",
			type: "Founder's Notes",
			date: 'February 24, 2026',
			excerpt: "A reflection on why every charter is more than a voyage - it's a return.",
			image: '/images/fleet/casagnola-heritage/casagnola-heritage-06.jpeg',
			href: '/journal'
		}
	];
</script>

<section id="journal-home" class="home-journal">
	<a href="/" class="journal-corner-logo" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png"
			alt="Ramacciotti Yachts monogram"
			loading="lazy"
			decoding="async"
		/>
	</a>

	<section class="journal-intro">
		<p class="journal-kicker">Journal</p>
		<h2>The Journal</h2>
		<p>
			The Journal is our ongoing collection of stories, reflections, and seasonal notes from the world of
			Ramacciotti Yachts. From destination insight to founder perspective and selected partnerships, each entry
			is shaped with the same discretion, calm, and editorial clarity that define our voyages.
		</p>

		<div class="journal-categories" aria-label="Journal categories">
			<span>Voyages</span>
			<span>Founder's Notes</span>
			<span>Partners</span>
			<span>News</span>
		</div>
	</section>

	<section class="journal-grid">
		{#each launchArticles as article}
			<a href={article.href} class="journal-card">
				<div class="journal-card-image-wrap">
					<img src={article.image} alt={article.title} loading="lazy" decoding="async" />
				</div>
				<div class="journal-card-copy">
					<p class="journal-card-meta">
						<span>{article.type}</span>
						<span>{article.date}</span>
					</p>
					<h3>{article.title}</h3>
					<p>{article.excerpt}</p>
				</div>
			</a>
		{/each}
	</section>

	<div class="journal-cta-wrap">
		<a href="/journal" class="journal-pill">Read more</a>
	</div>
</section>

<style>
	.home-journal {
		position: relative;
		background: #f9f7f2;
		color: #12163b;
	}

	.journal-corner-logo {
		position: absolute;
		top: clamp(2.2rem, 4.8vh, 3.5rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2.45rem, 3.4vw, 3.25rem);
		height: clamp(2.45rem, 3.4vw, 3.25rem);
	}

	.journal-corner-logo img {
		width: 100%;
		height: auto;
	}

	.journal-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.92vw, 0.88rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(17, 26, 56, 0.68);
	}

	.journal-intro h2 {
		margin: 0.62rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.96;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.journal-intro {
		max-width: 68rem;
		margin: 0 auto;
		padding: clamp(1rem, 2.8vh, 2rem) clamp(1rem, 3.2vw, 2.8rem) clamp(2.1rem, 5.5vh, 4rem);
		text-align: center;
	}

	.journal-intro p {
		margin: 1.4rem auto 0;
		max-width: 56rem;
		font-family: var(--font-primary);
		font-size: clamp(1rem, 1.25vw, 1.2rem);
		line-height: 1.74;
		letter-spacing: 0.008em;
		color: rgba(16, 24, 51, 0.9);
	}

	.journal-categories {
		margin-top: 1.2rem;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.52rem;
		justify-content: center;
	}

	.journal-categories span {
		border: 1px solid rgba(18, 22, 59, 0.18);
		padding: 0.3rem 0.52rem;
		font-family: var(--font-primary);
		font-size: 0.73rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.72);
	}

	.journal-grid {
		max-width: 84rem;
		margin: 0 auto;
		padding: 0 clamp(1rem, 3vw, 2.6rem);
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(0.9rem, 1.8vw, 1.2rem);
	}

	.journal-cta-wrap {
		padding: 1.5rem clamp(1rem, 3vw, 2.6rem) clamp(2.8rem, 8vh, 5.6rem);
		display: flex;
		justify-content: center;
	}

	.journal-pill {
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

	.journal-pill:hover {
		border-color: rgba(186, 154, 102, 0.78);
		color: rgba(186, 154, 102, 0.95);
	}

	.journal-card {
		display: block;
		background: #fff;
		border: 1px solid rgba(18, 22, 59, 0.1);
	}

	.journal-card-image-wrap {
		aspect-ratio: 16 / 10;
		overflow: hidden;
	}

	.journal-card-image-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.journal-card-copy {
		padding: clamp(0.9rem, 1.4vw, 1.2rem);
	}

	.journal-card-meta {
		margin: 0;
		display: flex;
		justify-content: space-between;
		gap: 0.6rem;
		font-family: var(--font-primary);
		font-size: 0.72rem;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.66);
	}

	.journal-card h3 {
		margin: 0.6rem 0 0;
		display: inline;
		font-family: var(--font-display);
		font-size: clamp(1.3rem, 2vw, 2rem);
		line-height: 1;
		color: rgba(18, 22, 59, 0.95);
		background-image: linear-gradient(
			to right,
			rgba(186, 154, 102, 0.9),
			rgba(186, 154, 102, 0.9)
		);
		background-position: 0 100%;
		background-repeat: no-repeat;
		background-size: 0% 1px;
		transition: background-size 260ms ease;
	}

	.journal-card:hover h3 {
		background-size: 100% 1px;
	}

	.journal-card-copy > p:last-child {
		margin: 0.75rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.92rem, 0.98vw, 0.98rem);
		line-height: 1.62;
		color: rgba(18, 22, 59, 0.84);
	}

	@media (max-width: 980px) {
		.journal-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
