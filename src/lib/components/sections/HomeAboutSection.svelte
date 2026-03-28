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
			<p>
				Ramacciotti Yachts is a boutique charter and advisory house dedicated to creating refined
				private and corporate experiences across the Caribbean and the Italian Riviera.
			</p>
			<p>
				Beyond charter services, we design journeys defined by precision and the timeless calm of the
				sea. Every element, from the yacht itself to the atmosphere onboard, is crafted to reflect
				your lifestyle and expectations.
			</p>
			<p>
				Our experienced team curates each voyage with care, delivering the same level of dedication
				whether for families, founders, or corporate leaders seeking privacy and excellence.
			</p>
		</div>
	</div>
</section>

<style>
	.home-about-text {
		--corner-left: clamp(1rem, 2.6vw, 2.2rem);
		--corner-size: clamp(2.45rem, 3.5vw, 3.3rem);
		position: relative;
		background: #fff;
		min-height: 100vh;
		padding: clamp(2.8rem, 5.8vh, 4.4rem) 0 clamp(0.6rem, 1.8vh, 1.2rem);
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
		width: min(100% - 2rem, 84rem);
		margin: 0 auto;
		padding-inline: clamp(1rem, 2vw, 2rem);
	}

	.about-copy {
		display: flex;
		min-height: calc(100vh - clamp(5.2rem, 7vh, 6.2rem));
		max-width: 62rem;
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

	.about-copy p {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.65rem, 2.85vw, 3.15rem);
		line-height: 1.04;
		letter-spacing: 0.004em;
		color: rgba(18, 22, 59, 0.96);
	}

	.about-copy p + p {
		margin-top: clamp(0.7rem, 1.5vh, 1.1rem);
	}

	@media (max-width: 1100px) {
		.about-text-corner-logo {
			top: 0.62rem;
			left: 0.8rem;
			width: 2.2rem;
			height: 2.2rem;
		}

		.about-copy {
			min-height: calc(100vh - 5rem);
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

		.about-copy p {
			font-size: clamp(1.35rem, 7.2vw, 2rem);
			line-height: 1.08;
		}
	}
</style>
