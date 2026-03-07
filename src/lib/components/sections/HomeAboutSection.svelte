<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let aboutTextSection: HTMLElement;
	let aboutStatement: HTMLElement;

	let aboutTextTween: gsap.core.Tween | null = null;

	function initAboutTextReveal() {
		aboutTextTween?.scrollTrigger?.kill();
		aboutTextTween?.kill();

		aboutTextTween = gsap.fromTo(
			aboutStatement,
			{ opacity: 0, y: 18 },
			{
				opacity: 1,
				y: 0,
				duration: 1.15,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: aboutTextSection,
					start: 'top 90%',
					toggleActions: 'play none none reverse'
				}
			}
		);
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const raf = requestAnimationFrame(() => {
			initAboutTextReveal();
		});

		const onResize = () => {
			initAboutTextReveal();
		};

		window.addEventListener('resize', onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			aboutTextTween?.scrollTrigger?.kill();
			aboutTextTween?.kill();
		};
	});
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
			<p bind:this={aboutStatement} class="about-statement">
				<span class="about-brand">Ramacciotti Yachts</span>
				is a
				<span class="about-emphasis">boutique advisory house</span>
				where the
				<span class="about-emphasis">precision of engineering</span>
				meets the
				<span class="about-emphasis">timeless calm of the sea.</span>
				From the Caribbean trade winds to the hidden coves of the Italian Riviera, we design journeys defined by exclusivity. Whether for families, founders, or leaders, our mission remains singular:
				<span class="about-emphasis"
					>Privacy, excellence,
					<span class="about-normal">and</span>
					the art of the voyage.</span
				>
			</p>

			<div class="about-compass-wrap" aria-label="Ramacciotti philosophy pillars">
				<img
					class="about-compass-art"
					src="/images/about/compass-rose.svg"
					alt="Compass rose"
					loading="lazy"
					decoding="async"
				/>

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
		display: grid;
		grid-template-columns: minmax(20rem, 1fr) minmax(22rem, 0.95fr);
		gap: clamp(2rem, 4vw, 5rem);
		align-items: start;
		margin-left: clamp(1.4rem, 2.4vw, 2.8rem);
	}

	.about-statement {
		max-width: clamp(24rem, 38vw, 42rem);
		min-height: calc(100vh - clamp(8.8rem, 15vh, 12rem));
		font-family: var(--font-display);
		font-size: clamp(1.85rem, 3.2vw, 3.4rem);
		line-height: 1.07;
		letter-spacing: 0.004em;
		color: rgba(18, 22, 59, 0.96);
		text-wrap: balance;
		opacity: 0;
		transform: translateY(18px);
		will-change: opacity, transform;
	}

	.about-brand {
		text-transform: uppercase;
	}

	.about-emphasis {
		font-family: 'Iowan Old Style', 'Baskerville', 'Palatino Linotype', Palatino, 'Times New Roman', serif;
		font-style: italic;
		font-weight: 700;
		font-size: 1.06em;
		letter-spacing: -0.015em;
		text-transform: none;
	}

	.about-normal {
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.004em;
	}

	.about-compass-wrap {
		position: relative;
		width: min(100%, 44rem);
		aspect-ratio: 1 / 1;
		margin-inline: auto;
	}

	.about-compass-art {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 61%;
		height: 61%;
		transform: translate(-50%, -50%);
		object-fit: contain;
		filter: drop-shadow(0 5px 14px rgba(17, 53, 111, 0.08));
	}

	.about-pillar {
		position: absolute;
		width: 40%;
	}

	.about-pillar-boutique {
		left: 0;
		top: 7%;
	}

	.about-pillar-elegance {
		right: 0;
		top: 7%;
		text-align: right;
	}

	.about-pillar-tailored {
		left: 0;
		bottom: 7%;
	}

	.about-pillar-discreet {
		right: 0;
		bottom: 7%;
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
			grid-template-columns: 1fr;
			gap: 2.1rem;
			margin-left: 0;
		}

		.about-statement {
			max-width: 100%;
			min-height: 0;
			font-size: clamp(1.18rem, 5.2vw, 1.85rem);
			line-height: 1.18;
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

		.about-compass-art {
			position: relative;
			left: auto;
			top: auto;
			transform: none;
			width: min(16rem, 66vw);
			height: auto;
			grid-column: 1 / -1;
			justify-self: center;
			margin-bottom: 0.35rem;
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
</style>
