<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const images = [
		'/images/hero/hero-01.jpg',
		'/images/hero/hero-02.jpg',
		'/images/hero/hero-03.jpg',
		'/images/hero/hero-04.jpg'
	];

	const SLIDE_DURATION = 6000;
	const FADE_DURATION = 1500;

	let activeIndex = $state(0);
	let heroSection: HTMLElement;
	let imageWrapper: HTMLElement;
	let headline: HTMLElement;
	let tagline: HTMLElement;
	let subtitle: HTMLElement;
	let scrollIndicator: HTMLElement;
	let slideInterval: ReturnType<typeof setInterval>;
	let ctx: gsap.Context;

	function nextSlide() {
		activeIndex = (activeIndex + 1) % images.length;
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			// Entrance timeline
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

			tl.fromTo(
				headline,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1 }
			)
				.fromTo(
					subtitle,
					{ opacity: 0, y: 25 },
					{ opacity: 1, y: 0, duration: 0.9 },
					'-=0.5'
				)
				.fromTo(
					tagline,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.8 },
					'-=0.4'
				)
				.fromTo(
					scrollIndicator,
					{ opacity: 0 },
					{ opacity: 1, duration: 0.6 },
					'-=0.2'
				);

			// Scroll-driven parallax exit
			gsap.to(imageWrapper, {
				scale: 1.05,
				scrollTrigger: {
					trigger: heroSection,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			});

			gsap.to(heroSection, {
				opacity: 0.3,
				scrollTrigger: {
					trigger: heroSection,
					start: '60% top',
					end: 'bottom top',
					scrub: true
				}
			});
		}, heroSection);

		// Start slideshow
		slideInterval = setInterval(nextSlide, SLIDE_DURATION);

		return () => {
			ctx?.revert();
			clearInterval(slideInterval);
		};
	});
</script>

<section
	bind:this={heroSection}
	class="relative h-screen w-full overflow-hidden bg-navy"
>
	<!-- Image slideshow -->
	<div bind:this={imageWrapper} class="absolute inset-0 will-change-transform">
		{#each images as src, i}
			<img
				{src}
				alt="Yacht at sea"
				class="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
				style="transition-duration: {FADE_DURATION}ms; opacity: {i === activeIndex ? 1 : 0};"
			/>
		{/each}
	</div>

	<!-- Gradient overlay -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"
	></div>

	<!-- Content -->
	<div class="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-12 md:pb-32 lg:pb-40">
		<div class="max-w-7xl mx-auto w-full">
			<!-- Headline -->
			<h1
				bind:this={headline}
				class="font-display text-5xl font-light uppercase leading-[0.9] tracking-[0.08em] text-white opacity-0 md:text-7xl lg:text-8xl"
			>
				Ramacciotti<br />Yachts
			</h1>

			<!-- Subtitle -->
			<p
				bind:this={subtitle}
				class="mt-5 text-xs font-light uppercase tracking-[0.3em] text-gold opacity-0 md:mt-6 md:text-sm"
			>
				Boutique Yacht Advisory &amp; Charter Brokerage
			</p>

			<!-- Tagline -->
			<p
				bind:this={tagline}
				class="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70 opacity-0 md:mt-5 md:max-w-lg md:text-base"
			>
				Journeys defined by elegance, intention, and thoughtful detail.
			</p>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		bind:this={scrollIndicator}
		class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0"
	>
		<div class="flex flex-col items-center gap-2">
			<span class="text-[10px] uppercase tracking-[0.25em] text-white/40">Scroll</span>
			<div class="h-10 w-px overflow-hidden bg-white/10">
				<div class="scroll-line h-full w-full bg-gold/60"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.font-display {
		font-family: var(--font-display);
	}

	.scroll-line {
		animation: scrollPulse 2s ease-in-out infinite;
	}

	@keyframes scrollPulse {
		0% {
			transform: translateY(-100%);
		}
		50% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(100%);
		}
	}
</style>
