<script lang="ts">
	let aboutTextSection: HTMLElement;
</script>

<section id="about" bind:this={aboutTextSection} class="home-about-text">
	<a href="/" class="about-text-corner-logo" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png"
			alt="Ramacciotti Yachts monogram"
			loading="eager"
			decoding="async"
		/>
	</a>
	<div class="about-container">
		<div class="about-layout">
			<div class="about-compass-wrap" aria-label="Ramacciotti philosophy pillars">
				<article class="about-pillar about-pillar-boutique">
					<h3 class="about-pillar-title">boutique</h3>
					<p class="about-pillar-text">
						We intentionally limit our seasonal charters to preserve quality, focus, and care.
					</p>
				</article>

				<article class="about-pillar about-pillar-elegance">
					<h3 class="about-pillar-title">italian elegance</h3>
					<p class="about-pillar-text">
						A calm balance of refinement, authenticity, and effortless style, felt in every detail.
					</p>
				</article>

				<article class="about-pillar about-pillar-tailored">
					<h3 class="about-pillar-title">tailored</h3>
					<p class="about-pillar-text">
						Each journey is custom-built around your rhythm, priorities, and personal expectations.
					</p>
				</article>

				<article class="about-pillar about-pillar-discreet">
					<h3 class="about-pillar-title">discreet</h3>
					<p class="about-pillar-text">
						Confidentiality is a standard: every step of your voyage remains private and protected.
					</p>
				</article>
			</div>
		</div>
	</div>
</section>

<style>
	.home-about-text {
		--corner-left: clamp(1rem, 2.6vw, 2.2rem);
		--corner-size: clamp(2.45rem, 3.5vw, 3.3rem);
		--corner-gap: clamp(0.75rem, 1.2vw, 1.2rem);
		position: relative;
		background: #fff;
		min-height: 100vh;
		padding: clamp(4.2rem, 8vh, 6.4rem) 0 clamp(4.8rem, 10vh, 8.8rem);
	}

	.about-text-corner-logo {
		position: absolute;
		top: 0.78rem;
		left: var(--corner-left);
		z-index: 2;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--corner-size);
		height: var(--corner-size);
	}

	.about-text-corner-logo img {
		width: 100%;
		height: auto;
	}

	.about-container {
		width: min(100% - 1.6rem, 95rem);
		margin-left: calc(var(--corner-left) + var(--corner-size) + var(--corner-gap) + clamp(0.8rem, 1.6vw, 1.4rem));
		margin-right: auto;
	}

	.about-layout {
		display: block;
		margin-left: clamp(1.4rem, 2.4vw, 2.8rem);
	}

	.about-compass-wrap {
		position: relative;
		width: min(100%, 72rem);
		min-height: clamp(22rem, 52vw, 34rem);
		margin-inline: 0 auto;
	}

	.about-pillar {
		position: absolute;
		width: min(41%, 25rem);
	}

	.about-pillar-boutique {
		left: 0;
		top: 4%;
	}

	.about-pillar-elegance {
		right: 0;
		top: 4%;
		text-align: right;
	}

	.about-pillar-tailored {
		left: 0;
		bottom: 4%;
	}

	.about-pillar-discreet {
		right: 0;
		bottom: 4%;
		text-align: right;
	}

	.about-pillar-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.55rem, 2vw, 2.2rem);
		line-height: 1;
		letter-spacing: 0.01em;
		color: rgba(18, 22, 59, 0.97);
	}

	.about-pillar-text {
		margin: 0.62rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.9rem, 1.06vw, 1.05rem);
		line-height: 1.42;
		letter-spacing: 0.01em;
		color: rgba(18, 22, 59, 0.88);
	}

	@media (max-width: 1100px) {
		.about-text-corner-logo {
			top: 0.62rem;
			left: 0.8rem;
			width: 2.2rem;
			height: 2.2rem;
		}

		.about-container {
			width: min(100% - 1rem, 95rem);
			margin-left: calc(0.8rem + 2.2rem + 0.7rem + 0.55rem);
		}

		.about-layout {
			margin-left: 0;
		}

		.about-compass-wrap {
			position: static;
			width: 100%;
			aspect-ratio: auto;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
			align-items: start;
		}

		.about-pillar {
			position: relative;
			width: 100%;
			top: auto;
			right: auto;
			bottom: auto;
			left: auto;
			text-align: left;
		}

		.about-pillar-title {
			font-size: clamp(1.25rem, 4.2vw, 1.65rem);
		}

		.about-pillar-text {
			font-size: 0.92rem;
		}
	}

	@media (max-width: 720px) {
		.about-compass-wrap {
			grid-template-columns: 1fr;
		}

		.about-pillar {
			padding: 1rem 0;
			border-top: 1px solid rgba(18, 22, 59, 0.1);
		}
	}
</style>
