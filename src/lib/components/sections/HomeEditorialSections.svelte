<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';
	import { journalArticles } from '$lib/data/journal';

	interface DestinationCard {
		title: string;
		subtitle: string;
		description: string;
		journalHref: string;
		images: string[];
	}

	const destinations: DestinationCard[] = [
		{
			title: 'Caribbean Season',
			subtitle: 'Winter serenity among turquoise horizons.',
			description:
				'From Antigua to St. Barth, this season unfolds through warm trade winds, calm anchorages, and long afternoons where time feels unhurried. The route is curated for privacy, comfort, and a pace that lets each bay reveal itself with quiet elegance.',
			journalHref: '/journal/caribbean-winter-calm',
			images: ['/images/hero/hero-01.jpg', '/images/hero/casagnola-01.jpeg', '/images/hero/casagnola-02.jpeg']
		},
		{
			title: 'Sardinia Summer',
			subtitle: 'Emerald coves and timeless Italian glamour.',
			description:
				'Sardinia is shaped by clear water, granite coastlines, and evenings that linger naturally into the night. Every stop is chosen for atmosphere as much as geography, balancing refined beach clubs, discreet harbors, and tranquil moments away from the visible circuit.',
			journalHref: '/journal/sardinia-at-dusk',
			images: ['/images/hero/hero-02.jpg', '/images/hero/casagnola-03.jpeg', '/images/hero/casagnola-04.jpeg']
		},
		{
			title: 'Ligurian Riviera',
			subtitle: 'Cliffs, color, and the art of slow sailing.',
			description:
				'From Portofino to the Cinque Terre, the Ligurian chapter favors light mornings and polished afternoons ashore. It is an itinerary for guests who value discretion, beautiful details, and an Italian rhythm where each harbor feels personal rather than performative.',
			journalHref: '/journal/ligurian-riviera-light',
			images: ['/images/hero/hero-03.jpg', '/images/hero/casagnola-05.jpeg', '/images/hero/casagnola-06.jpeg']
		}
	];

	const journalPreview = [...journalArticles]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	let lightboxOpen = $state(false);
	let activeDestinationIndex = $state(0);
	let activeImageIndex = $state(0);
	let newsletterOptIn = $state(true);

	function openGallery(destinationIndex: number) {
		activeDestinationIndex = destinationIndex;
		activeImageIndex = 0;
		lightboxOpen = true;
	}

	function closeGallery() {
		lightboxOpen = false;
	}

	function nextImage() {
		const total = destinations[activeDestinationIndex].images.length;
		activeImageIndex = (activeImageIndex + 1) % total;
	}

	function previousImage() {
		const total = destinations[activeDestinationIndex].images.length;
		activeImageIndex = (activeImageIndex - 1 + total) % total;
	}

	function formatDate(value: string) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(new Date(value));
	}

	$effect(() => {
		if (!lightboxOpen) {
			return;
		}

		document.body.style.overflow = 'hidden';

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeGallery();
			}
			if (event.key === 'ArrowRight') {
				nextImage();
			}
			if (event.key === 'ArrowLeft') {
				previousImage();
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeyDown);
		};
	});
</script>

<div class="home-editorial">
	<section id="about" class="section founder-line">
		<div class="section-inner">
			<blockquote>
				“What we create is more than a charter. It’s a way of belonging where you feel seen, welcomed, and part of a
				circle that continues beyond the sea.”
			</blockquote>
			<p class="founder-signature">Tommaso Ramacciotti</p>
			<a href="#home-enquiry" class="text-link">Begin your journey</a>
		</div>
	</section>

	<section class="section destinations" aria-labelledby="destinations-heading">
		<div class="section-inner">
			<p class="eyebrow">Destination Chapters</p>
			<h2 id="destinations-heading">Seasonal journeys shaped by light, pace, and intention.</h2>

			<div class="destination-grid">
				{#each destinations as destination, destinationIndex}
					<article class="destination-card">
						<img src={destination.images[0]} alt={destination.title} loading="lazy" decoding="async" />
						<div class="destination-copy">
							<h3>{destination.title}</h3>
							<p class="destination-subtitle">{destination.subtitle}</p>
							<p>{destination.description}</p>
						</div>
						<div class="destination-actions">
							<button type="button" class="text-link" onclick={() => openGallery(destinationIndex)}>
								View gallery
							</button>
							<a href={destination.journalHref} class="text-link">Read Journal chapter</a>
						</div>
					</article>
				{/each}
			</div>

			<p class="section-note">Discover where the season will take you.</p>
		</div>
	</section>

	<section class="section split club-preview">
		<div class="section-inner split-grid">
			<div>
				<p class="eyebrow">The Club</p>
				<h2>The Ramacciotti Club is where each voyage becomes a lasting connection.</h2>
				<p>
					Designed for returning guests, the Club extends each charter into a longer relationship built on continuity,
					privileged access, and founder-led care.
				</p>
				<a href="/club" class="text-link">Discover the Club</a>
			</div>
			<div class="preview-image-wrap">
				<img src="/images/hero/casagnola-03.jpeg" alt="The Ramacciotti Club mood" loading="lazy" decoding="async" />
			</div>
		</div>
	</section>

	<section class="section split corporate-preview">
		<div class="section-inner split-grid">
			<div class="preview-image-wrap">
				<img src="/images/hero/hero-04.jpg" alt="Corporate voyage atmosphere" loading="lazy" decoding="async" />
			</div>
			<div>
				<p class="eyebrow">Corporate</p>
				<h2>For executive retreats and client entertainment, each detail remains deliberate.</h2>
				<p>
					Every corporate voyage is managed as a private advisory process with one point of contact, discreet execution,
					and standards aligned with your brand values.
				</p>
				<a href="/corporate" class="text-link">Explore Corporate Voyages</a>
			</div>
		</div>
	</section>

	<section class="section journal-preview">
		<div class="section-inner">
			<p class="eyebrow">Journal</p>
			<h2>Stories from the Founder’s Dispatch</h2>

			<div class="journal-grid">
				{#each journalPreview as article}
					<a href={`/journal/${article.slug}`} class="journal-card">
						<img src={article.image} alt={article.title} loading="lazy" decoding="async" />
						<div class="journal-copy">
							<p class="journal-date">{formatDate(article.date)}</p>
							<h3>{article.title}</h3>
							<p>{article.excerpt}</p>
						</div>
					</a>
				{/each}
			</div>

			<a href="/journal" class="text-link">Read the Journal</a>
		</div>
	</section>

	<section id="home-enquiry" class="section enquiry">
		<div class="section-inner">
			<p class="eyebrow">Private Consultation</p>
			<h2>Begin your journey — request a private consultation.</h2>
			<ConsultationForm
				context="Home"
				title="Begin your journey"
				subtitle="Share your timing, preferences, and intent. We reply personally within 24 hours."
				variant="light"
			/>

			<div class="enquiry-meta">
				<div class="social-links" aria-label="Social links">
					<a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
							<circle cx="12" cy="12" r="4.1"></circle>
							<circle cx="17.3" cy="6.7" r="0.9" fill="currentColor"></circle>
						</svg>
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="4" y="9" width="4" height="11"></rect>
							<circle cx="6" cy="6.2" r="1.6" fill="currentColor"></circle>
							<path d="M11 9h3.7v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.4 2.5 4.4 5.8V20h-4v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20H11z"></path>
						</svg>
					</a>
				</div>

				<label class="newsletter-toggle">
					<input type="checkbox" bind:checked={newsletterOptIn} />
					<span>Receive Journal newsletter updates</span>
				</label>
			</div>
		</div>
	</section>
</div>

{#if lightboxOpen}
	<div class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Destination gallery">
		<button type="button" class="lightbox-backdrop" aria-label="Close gallery" onclick={closeGallery}></button>
		<div class="lightbox-panel">
			<img
				src={destinations[activeDestinationIndex].images[activeImageIndex]}
				alt={destinations[activeDestinationIndex].title}
			/>
			<div class="lightbox-controls">
				<button type="button" onclick={previousImage} aria-label="Previous image">Prev</button>
				<span>
					{activeImageIndex + 1} / {destinations[activeDestinationIndex].images.length}
				</span>
				<button type="button" onclick={nextImage} aria-label="Next image">Next</button>
				<button type="button" onclick={closeGallery} aria-label="Close gallery">Close</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.home-editorial {
		--brand-blue: #12163b;
		--soft-ivory: #f7f4ef;
		--deep-ink: #22252d;
		--muted-slate: #626c78;
	}

	.section {
		padding: clamp(4.6rem, 9vh, 8.4rem) 0;
		background: var(--soft-ivory);
	}

	.section-inner {
		width: min(100% - 2.4rem, 78rem);
		margin-inline: auto;
	}

	.eyebrow {
		font-size: 0.72rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--brand-blue) 62%, white);
	}

	h2 {
		margin-top: 0.9rem;
		font-size: clamp(2.05rem, 4.6vw, 4.35rem);
		line-height: 1.04;
		letter-spacing: 0.006em;
		color: var(--deep-ink);
	}

	.text-link {
		display: inline-block;
		margin-top: 1.4rem;
		border-bottom: 1px solid color-mix(in srgb, var(--brand-blue) 42%, white);
		padding-bottom: 0.25rem;
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--brand-blue) 82%, black);
		transition: color 220ms ease, border-color 220ms ease;
	}

	.text-link:hover {
		color: var(--brand-blue);
		border-color: color-mix(in srgb, var(--brand-blue) 78%, white);
	}

	.founder-line {
		text-align: center;
	}

	blockquote {
		margin: 0 auto;
		max-width: 62rem;
		font-family: var(--font-display);
		font-size: clamp(1.95rem, 4.2vw, 3.65rem);
		line-height: 1.2;
		color: var(--deep-ink);
	}

	.founder-signature {
		margin-top: 1.5rem;
		font-size: 0.84rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted-slate);
	}

	.destination-grid {
		margin-top: 2.4rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.destination-card {
		background: #fbfaf7;
		border: 1px solid rgba(18, 22, 59, 0.12);
		overflow: hidden;
	}

	.destination-card img {
		width: 100%;
		height: 15.8rem;
		object-fit: cover;
	}

	.destination-copy {
		padding: 1.2rem 1.2rem 0;
	}

	.destination-card h3 {
		font-size: 1.55rem;
		color: var(--deep-ink);
	}

	.destination-subtitle {
		margin-top: 0.38rem;
		font-size: 0.95rem;
		color: color-mix(in srgb, var(--brand-blue) 74%, white);
	}

	.destination-card p {
		margin-top: 0.95rem;
		font-size: 0.95rem;
		line-height: 1.58;
		color: var(--muted-slate);
	}

	.destination-actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.8rem;
		padding: 0.9rem 1.2rem 1.2rem;
	}

	.destination-actions .text-link {
		margin-top: 0;
	}

	.section-note {
		margin-top: 1.8rem;
		font-size: 0.92rem;
		color: color-mix(in srgb, var(--brand-blue) 68%, white);
	}

	.split-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1.4rem, 4vw, 3.4rem);
		align-items: center;
	}

	.split p {
		margin-top: 1rem;
		max-width: 39rem;
		font-size: 1.02rem;
		line-height: 1.65;
		color: var(--muted-slate);
	}

	.preview-image-wrap {
		border-radius: 0.35rem;
		overflow: hidden;
		border: 1px solid rgba(18, 22, 59, 0.13);
	}

	.preview-image-wrap img {
		width: 100%;
		height: clamp(19rem, 40vh, 28rem);
		object-fit: cover;
	}

	.corporate-preview {
		background: linear-gradient(180deg, #f7f4ef 0%, #f2efe9 100%);
	}

	.journal-grid {
		margin-top: 2.2rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.2rem;
	}

	.journal-card {
		border: 1px solid rgba(18, 22, 59, 0.12);
		background: #fbfaf7;
		overflow: hidden;
	}

	.journal-card img {
		width: 100%;
		height: 14rem;
		object-fit: cover;
		transition: transform 620ms ease;
	}

	.journal-card:hover img {
		transform: scale(1.03);
	}

	.journal-copy {
		padding: 1.15rem 1.15rem 1.25rem;
	}

	.journal-date {
		font-size: 0.77rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--brand-blue) 58%, white);
	}

	.journal-card h3 {
		margin-top: 0.52rem;
		font-size: 1.55rem;
		line-height: 1.2;
		color: var(--deep-ink);
	}

	.journal-copy p {
		margin-top: 0.78rem;
		font-size: 0.94rem;
		line-height: 1.6;
		color: var(--muted-slate);
	}

	.enquiry {
		padding-bottom: clamp(5.3rem, 11vh, 9rem);
	}

	.enquiry-meta {
		margin-top: 1.35rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.social-links {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
	}

	.social-links a {
		display: inline-flex;
		width: 2.15rem;
		height: 2.15rem;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(18, 22, 59, 0.18);
		border-radius: 999px;
		color: color-mix(in srgb, var(--brand-blue) 80%, black);
		transition: border-color 220ms ease, color 220ms ease;
	}

	.social-links a:hover {
		border-color: rgba(18, 22, 59, 0.46);
		color: var(--brand-blue);
	}

	.social-links svg {
		width: 1.05rem;
		height: 1.05rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
	}

	.newsletter-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.84rem;
		color: var(--muted-slate);
	}

	.newsletter-toggle input {
		width: 1rem;
		height: 1rem;
		accent-color: var(--brand-blue);
	}

	.lightbox-overlay {
		position: fixed;
		inset: 0;
		z-index: 80;
		display: grid;
		place-items: center;
	}

	.lightbox-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(8, 11, 23, 0.72);
	}

	.lightbox-panel {
		position: relative;
		z-index: 1;
		width: min(92vw, 74rem);
		background: #111;
		border: 1px solid rgba(255, 255, 255, 0.17);
	}

	.lightbox-panel img {
		display: block;
		width: 100%;
		height: min(72vh, 52rem);
		object-fit: cover;
	}

	.lightbox-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0.95rem;
		background: #f4f4f2;
		color: #111;
	}

	.lightbox-controls button {
		border-bottom: 1px solid rgba(17, 17, 17, 0.35);
		padding-bottom: 0.2rem;
		font-size: 0.74rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.lightbox-controls span {
		font-size: 0.77rem;
		letter-spacing: 0.08em;
		color: #4c4c4c;
	}

	@media (max-width: 1100px) {
		.destination-grid,
		.journal-grid,
		.split-grid {
			grid-template-columns: 1fr;
		}

		.destination-actions {
			flex-wrap: wrap;
		}

		.section-inner {
			width: min(100% - 1.55rem, 78rem);
		}

		.enquiry-meta {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
