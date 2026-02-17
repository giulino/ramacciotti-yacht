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
	let contentWrapper: HTMLElement;
	let brandLabel: HTMLElement;
	let headlineLine1: HTMLElement;
	let headlineLine2: HTMLElement;
	let cta: HTMLElement;
	let scrollIndicator: HTMLElement;
	let slideInterval: ReturnType<typeof setInterval>;
	let ctx: gsap.Context;

	function nextSlide() {
		activeIndex = (activeIndex + 1) % images.length;
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			// Entrance timeline — staggered reveal matching Benetti's editorial feel
			const tl = gsap.timeline({
				defaults: { ease: 'power3.out' },
				delay: 0.3
			});

			tl.fromTo(brandLabel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 })
				.fromTo(
					headlineLine1,
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 1 },
					'-=0.4'
				)
				.fromTo(
					headlineLine2,
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 1 },
					'-=0.6'
				)
				.fromTo(cta, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
				.fromTo(scrollIndicator, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

			// Scroll exit — image scales up, feels like moving INTO the image
			gsap.to(imageWrapper, {
				scale: 1.08,
				scrollTrigger: {
					trigger: heroSection,
					start: 'top top',
					end: 'bottom top',
					scrub: 1
				}
			});

			// Content fades out faster than the hero itself
			gsap.to(contentWrapper, {
				opacity: 0,
				y: -40,
				scrollTrigger: {
					trigger: heroSection,
					start: 'top top',
					end: '40% top',
					scrub: 1
				}
			});

			// Scroll indicator fades first
			gsap.to(scrollIndicator, {
				opacity: 0,
				scrollTrigger: {
					trigger: heroSection,
					start: 'top top',
					end: '15% top',
					scrub: 1
				}
			});

			// Overall hero fades out for seamless transition
			gsap.to(imageWrapper, {
				opacity: 0,
				scrollTrigger: {
					trigger: heroSection,
					start: '60% top',
					end: 'bottom top',
					scrub: 1
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

	<!-- Gradient overlay — centered text needs even coverage -->
	<div class="absolute inset-0 bg-navy/50"></div>
	<div
		class="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30"
	></div>

	<!-- Content — centered like Benetti -->
	<div
		bind:this={contentWrapper}
		class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
	>
		<!-- Brand label — equivalent to Benetti's "[ B. NEOS 40M ]" -->
		<p
			bind:this={brandLabel}
			class="mb-6 text-[10px] uppercase tracking-[0.4em] text-white/50 opacity-0 md:mb-8 md:text-xs"
		>
			Ramacciotti Yachts
		</p>

		<!-- Headline — mixed weight like Benetti's "The SOUL of SILENCE" -->
		<h1 class="font-display leading-[1.05]">
			<span
				bind:this={headlineLine1}
				class="block text-4xl font-light tracking-[0.04em] text-white opacity-0 md:text-6xl lg:text-7xl"
			>
				<span class="italic font-extralight">Where</span> Elegance
			</span>
			<span
				bind:this={headlineLine2}
				class="block text-4xl font-light tracking-[0.04em] text-white opacity-0 md:text-6xl lg:text-7xl"
			>
				<span class="italic font-extralight">Meets</span> Intention
			</span>
		</h1>

		<!-- CTA — equivalent to Benetti's "DISCOVER THE YACHT" -->
		<a
			bind:this={cta}
			href="#fleet"
			class="mt-8 border-b border-gold/40 pb-1 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-colors duration-300 hover:border-gold hover:text-gold-light md:mt-10 md:text-xs"
		>
			Discover the Fleet
		</a>
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
