<script lang="ts">
	import { onMount } from 'svelte';

	let aboutTextSection: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		if (!aboutTextSection) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			},
			{
				threshold: 0.28,
				rootMargin: '0px 0px -10% 0px'
			}
		);

		observer.observe(aboutTextSection);

		return () => observer.disconnect();
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
		<div class:about-copy-visible={isVisible} class="about-copy">
			<p class="about-copy-text">
				Ramacciotti Yachts is a boutique charter and advisory house dedicated to creating refined
				private and corporate experiences across the Caribbean and the Italian Riviera. Beyond
				charter services, we design journeys defined by precision and the timeless calm of the sea.
				Every element, from the yacht itself to the atmosphere onboard, is crafted to reflect your
				lifestyle and expectations. Our experienced team curates each voyage with care, delivering
				the same level of dedication whether for families, founders, or corporate leaders seeking
				privacy and excellence.
			</p>
		</div>
	</div>
</section>

<style>
	.home-about-text {
		--corner-left: clamp(1rem, 2.6vw, 2.2rem);
		--corner-size: clamp(2.45rem, 3.5vw, 3.3rem);
		--about-stage-min-height: 100svh;
		position: relative;
		background: #fff;
		min-height: var(--about-stage-min-height);
		padding: clamp(1.2rem, 2.8vh, 2rem) 0 clamp(0.1rem, 0.4vh, 0.28rem);
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
		width: min(calc(100% - (var(--page-gutter) * 2)), var(--section-max));
		margin: 0 auto;
		padding-inline: 0;
	}

	.about-copy {
		display: flex;
		width: min(calc(100vw - (var(--page-gutter) * 2)), 68rem);
		min-height: calc(var(--about-stage-min-height) - clamp(1.8rem, 3.2vh, 2.6rem));
		margin: 0 auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.9s ease-out,
			transform 0.9s ease-out;
		text-align: center;
	}

	.about-copy-visible {
		opacity: 1;
		transform: translateY(0);
	}

	.about-copy-text {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(2.16rem, 3.51vw, 3.89rem);
		line-height: 1.02;
		letter-spacing: 0.004em;
		color: rgba(18, 22, 59, 0.96);
		text-wrap: pretty;
	}

	@media (max-width: 1100px) {
		.about-text-corner-logo {
			top: 0.62rem;
			left: 0.8rem;
			width: 2.2rem;
			height: 2.2rem;
		}
	}

	@media (max-width: 1439px) and (min-width: 1024px) {
		.home-about-text {
			--about-stage-min-height: 100svh;
			padding-top: 0.95rem;
			padding-bottom: 0.15rem;
		}

		.about-copy {
			width: min(calc(100vw - (var(--page-gutter) * 2)), 58rem);
			min-height: calc(var(--about-stage-min-height) - 1.5rem);
		}

		.about-copy-text {
			font-size: clamp(1.67rem, 2.27vw, 2.83rem);
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.home-about-text {
			--about-stage-min-height: 100svh;
			padding-top: 0.8rem;
			padding-bottom: 0.1rem;
		}

		.about-text-corner-logo {
			top: 0.55rem;
			left: 0.7rem;
			width: 2rem;
			height: 2rem;
		}

		.about-copy {
			width: min(calc(100vw - (var(--page-gutter) * 2)), 46rem);
			min-height: calc(var(--about-stage-min-height) - 1.25rem);
		}

		.about-copy-text {
			font-size: clamp(1.31rem, 2.16vw, 2.05rem);
			line-height: 1.04;
		}
	}

	@media (max-width: 720px) {
		.home-about-text {
			min-height: auto;
			padding: 3.4rem 0 4.8rem;
		}

		.about-copy {
			min-height: auto;
			padding-top: 2.2rem;
			justify-content: flex-start;
		}

		.about-copy-text {
			font-size: clamp(1.35rem, 7.2vw, 2rem);
			line-height: 1.08;
		}
	}
</style>
