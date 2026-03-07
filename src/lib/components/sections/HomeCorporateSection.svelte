<script lang="ts">
	import { onMount } from 'svelte';

	let corporateSection: HTMLElement;

	onMount(() => {
		const clubSection = document.getElementById('club');

		if (!clubSection || !corporateSection) {
			return;
		}

		const htmlEl = document.documentElement;
		const bodyEl = document.body;

		const setSnapActive = (active: boolean) => {
			htmlEl.classList.toggle('club-corporate-snap-active', active);
			bodyEl.classList.toggle('club-corporate-snap-active', active);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				const active = entries.some((entry) => entry.isIntersecting);
				setSnapActive(active);
			},
			{
				threshold: 0.12
			}
		);

		observer.observe(clubSection);
		observer.observe(corporateSection);

		return () => {
			observer.disconnect();
			setSnapActive(false);
		};
	});
</script>

<section id="corporate-circle" bind:this={corporateSection} class="home-corporate">
	<a href="/" class="corporate-corner-logo" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png"
			alt="Ramacciotti Yachts monogram"
			loading="lazy"
			decoding="async"
		/>
	</a>

	<section class="corporate-intro">
		<p class="corporate-kicker">Corporate Circle</p>
		<h2>Corporate Voyages</h2>
		<p>
			The Ramacciotti Yachts Corporate Voyages division is dedicated to creating private, high-end experiences
			for companies seeking an elegant alternative to conventional corporate hospitality. Each voyage is tailored
			to reflect your brand's identity, blending professionalism and pleasure with seamless execution and absolute
			discretion. Whether designed for leadership retreats, client entertainment, or executive incentives, every
			detail is curated with precision and intent.
		</p>
	</section>

	<section class="corporate-experiences">
		<h3>Signature Experiences</h3>
		<div class="corporate-cards">
			<article class="corporate-card">
				<div class="corporate-card-icon" aria-hidden="true"></div>
				<h4>Executive Retreats</h4>
				<p>
					For leadership teams who value focus, privacy, and rejuvenation — days of strategy balanced with
					calm horizons.
				</p>
			</article>

			<article class="corporate-card">
				<div class="corporate-card-icon" aria-hidden="true"></div>
				<h4>Client Entertainment</h4>
				<p>
					An elegant setting to nurture relationships — fine dining on deck, sunset aperitifs, and
					destinations that impress.
				</p>
			</article>

			<article class="corporate-card">
				<div class="corporate-card-icon" aria-hidden="true"></div>
				<h4>Incentive Voyages</h4>
				<p>
					Reward excellence with experiences that inspire — a curated journey blending leisure, exclusivity,
					and recognition.
				</p>
			</article>
		</div>

		<a href="/corporate" class="corporate-cta">Request Brochure</a>
	</section>

	<section class="corporate-why">
		<p class="corporate-why-kicker">Why Choose Ramacciotti Yachts</p>
		<h3>Corporate hospitality, redefined.</h3>

		<div class="corporate-pillars">
			<article class="corporate-pillar">
				<h4>Discretion</h4>
				<p>NDAs and private-crew briefings ensure confidentiality on every voyage.</p>
			</article>

			<article class="corporate-pillar">
				<h4>Professionalism</h4>
				<p>Seamless coordination with corporate planners, tailored invoices, and compliant documentation.</p>
			</article>

			<article class="corporate-pillar">
				<h4>Flexibility</h4>
				<p>Custom scheduling, weather contingency policies, and adaptable itineraries.</p>
			</article>

			<article class="corporate-pillar">
				<h4>Continuity</h4>
				<p>
					A dedicated liaison before, during, and after each charter — one point of contact for the entire
					journey.
				</p>
			</article>
		</div>

		<p class="corporate-note">
			All operations managed under CYBA and MYBA standards, ensuring full transparency and compliance.
		</p>

		<a href="/corporate" class="corporate-cta corporate-cta-secondary">Design a Corporate Voyage</a>
	</section>
</section>

<style>
	:global(html.club-corporate-snap-active),
	:global(body.club-corporate-snap-active) {
		scroll-snap-type: y proximity;
	}

	.home-corporate {
		position: relative;
		background: #ffffff;
		color: #111a38;
		scroll-snap-align: start;
	}

	.corporate-corner-logo {
		position: absolute;
		top: clamp(2.2rem, 4.8vh, 3.6rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(2.45rem, 3.4vw, 3.25rem);
		height: clamp(2.45rem, 3.4vw, 3.25rem);
	}

	.corporate-corner-logo img {
		width: 100%;
		height: auto;
	}

	.corporate-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.92vw, 0.88rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(17, 26, 56, 0.68);
	}

	.corporate-intro h2 {
		margin: 0.62rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.96;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.corporate-intro {
		max-width: 68rem;
		margin: 0 auto;
		padding: clamp(1rem, 2.8vh, 2rem) clamp(1rem, 3.2vw, 2.8rem) clamp(2.1rem, 5.5vh, 4rem);
		text-align: center;
	}

	.corporate-intro p {
		margin: 1.4rem auto 0;
		max-width: 56rem;
		font-family: var(--font-primary);
		font-size: clamp(1rem, 1.25vw, 1.2rem);
		line-height: 1.74;
		letter-spacing: 0.008em;
		color: rgba(16, 24, 51, 0.9);
	}

	.corporate-experiences {
		max-width: 84rem;
		margin: 0 auto;
		padding: clamp(1.4rem, 4.4vh, 3.2rem) clamp(1rem, 3vw, 2.6rem) clamp(2.6rem, 7vh, 5rem);
	}

	.corporate-experiences h3 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.9rem, 4.2vw, 3.8rem);
		line-height: 0.96;
		letter-spacing: 0.003em;
	}

	.corporate-cards {
		margin-top: 1.2rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(0.8rem, 1.8vw, 1.2rem);
	}

	.corporate-card {
		background: #fbf9f5;
		border: 1px solid rgba(17, 26, 56, 0.12);
		padding: clamp(1rem, 1.6vw, 1.4rem);
	}

	.corporate-card-icon {
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 999px;
		border: 1px solid rgba(186, 154, 102, 0.78);
		position: relative;
	}

	.corporate-card-icon::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 0.46rem;
		height: 0.46rem;
		transform: translate(-50%, -50%);
		background: rgba(186, 154, 102, 0.82);
		border-radius: 999px;
	}

	.corporate-card h4 {
		margin: 0.82rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.25rem, 1.8vw, 1.9rem);
		line-height: 1;
	}

	.corporate-card p {
		margin: 0.78rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.9rem, 1vw, 1rem);
		line-height: 1.66;
		letter-spacing: 0.006em;
		color: rgba(17, 26, 56, 0.88);
	}

	.corporate-cta {
		margin-top: 1.2rem;
		display: inline-flex;
		align-items: center;
		border-bottom: 1px solid rgba(17, 26, 56, 0.52);
		padding-bottom: 0.2rem;
		font-family: var(--font-primary);
		font-size: 0.84rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: #111a38;
		transition: color 220ms ease, border-color 220ms ease;
	}

	.corporate-cta:hover {
		color: rgba(186, 154, 102, 0.95);
		border-color: rgba(186, 154, 102, 0.78);
	}

	.corporate-why {
		max-width: 84rem;
		margin: 0 auto;
		padding: clamp(0.6rem, 2vh, 1.6rem) clamp(1rem, 3vw, 2.6rem) clamp(3rem, 8vh, 6rem);
	}

	.corporate-why-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.72rem, 0.9vw, 0.86rem);
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: rgba(17, 26, 56, 0.68);
	}

	.corporate-why h3 {
		margin: 0.48rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1.8rem, 3.9vw, 3.3rem);
		line-height: 0.96;
	}

	.corporate-pillars {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(0.8rem, 1.6vw, 1.1rem);
	}

	.corporate-pillar {
		background: #fbf9f5;
		border: 1px solid rgba(17, 26, 56, 0.1);
		padding: clamp(0.9rem, 1.4vw, 1.2rem);
	}

	.corporate-pillar h4 {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.12rem, 1.4vw, 1.5rem);
		line-height: 1;
	}

	.corporate-pillar p {
		margin: 0.62rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.86rem, 0.92vw, 0.96rem);
		line-height: 1.62;
		letter-spacing: 0.006em;
		color: rgba(17, 26, 56, 0.86);
	}

	.corporate-note {
		margin: 1rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.78rem, 0.9vw, 0.88rem);
		line-height: 1.5;
		letter-spacing: 0.01em;
		color: rgba(17, 26, 56, 0.68);
	}

	.corporate-cta-secondary {
		margin-top: 1.05rem;
	}

	@media (max-width: 980px) {
		.corporate-cards,
		.corporate-pillars {
			grid-template-columns: 1fr;
		}
	}
</style>
