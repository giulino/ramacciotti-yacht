<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';

	const images = [
		'/images/hero/casagnola-01.jpeg',
		'/images/hero/casagnola-02.jpeg',
		'/images/hero/casagnola-03.jpeg',
		'/images/hero/casagnola-04.jpeg',
		'/images/hero/casagnola-05.jpeg',
		'/images/hero/casagnola-06.jpeg'
	];
	const menuLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '#about' },
		{ label: 'Fleet', href: '#fleet-overview' },
		{ label: 'The Club', href: '#club' },
		{ label: 'Corporate', href: '#corporate-circle' },
		{ label: 'Journal', href: '#journal-home' }
	];

	const IMAGE_ROTATION_MS = 5200;

	let heroSection: HTMLElement;
	let mediaPositioner: HTMLElement;
	let mediaFrame: HTMLElement;
	let heroHeader: HTMLElement;
	let heroCopy: HTMLElement;

	let activeImage = $state(0);
	let menuOpen = $state(false);
	let slideshowInterval: ReturnType<typeof setInterval>;
	let timeline: gsap.core.Timeline | null = null;
	let trigger: ScrollTrigger | null = null;

	function rotateImage() {
		activeImage = (activeImage + 1) % images.length;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function initScrollAnimation() {
		timeline?.kill();
		trigger?.kill();

		const mediaRect = mediaFrame.getBoundingClientRect();
		const viewportW = window.innerWidth;
		const viewportH = window.innerHeight;

		const scaleX = viewportW / mediaRect.width;
		const scaleY = viewportH / mediaRect.height;
		const mediaCenterY = mediaRect.top + mediaRect.height / 2;
		const viewportCenterY = viewportH / 2;
		const translateY = viewportCenterY - mediaCenterY;

		timeline = gsap.timeline({ paused: true });
		timeline
			.to(
				heroHeader,
				{
					y: -130,
					ease: 'none',
					duration: 0.12
				},
				0
			)
			.to(
				mediaFrame,
				{
					y: translateY,
					scaleX,
					scaleY,
					borderRadius: 0,
					ease: 'none',
					duration: 1
				},
				0
			)
			.to(
				mediaFrame,
				{
					boxShadow: '0 0 0 rgba(0,0,0,0)',
					ease: 'none',
					duration: 0.6
				},
				0
			);

		trigger = ScrollTrigger.create({
			trigger: heroSection,
			start: 'top top',
			end: '+=65%',
			scrub: 0.72,
			onUpdate: (self) => {
				timeline?.progress(self.progress);
			}
		});
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		slideshowInterval = setInterval(rotateImage, IMAGE_ROTATION_MS);

		const raf = requestAnimationFrame(() => {
			initScrollAnimation();
		});

		const onResize = () => {
			initScrollAnimation();
		};

		window.addEventListener('resize', onResize);

		return () => {
			clearInterval(slideshowInterval);
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			timeline?.kill();
			trigger?.kill();
		};
	});

	$effect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	$effect(() => {
		if (!menuOpen) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeMenu();
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	});
</script>

<section bind:this={heroSection} class="hero-shell">
	<div class="hero-sticky-stage">
		<header bind:this={heroHeader} class="hero-top-nav" aria-label="Primary">
			<button
				type="button"
				class="hero-menu-trigger"
				aria-label="Open menu"
				aria-expanded={menuOpen}
				aria-controls="hero-menu-panel"
				onclick={toggleMenu}
			>
				<span class="hero-menu-icon" aria-hidden="true">
					<span class="hero-menu-line hero-menu-line-top"></span>
					<span class="hero-menu-line hero-menu-line-bottom"></span>
				</span>
				<span>Menu</span>
			</button>

			<a href="/" class="hero-brand-mark" aria-label="Ramacciotti Yachts">
				<img
					src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png"
					alt="Ramacciotti Yachts"
					class="hero-brand-logo"
					loading="eager"
					decoding="async"
				/>
			</a>

			<nav class="hero-quick-links" aria-label="Quick links">
				<a href="#fleet-overview">Fleet</a>
				<a href="#home-enquiry">Contacts</a>
			</nav>
		</header>

		<div bind:this={heroCopy} class="hero-copy-block">
			<h1 class="hero-title">
				<span class="hero-title-italic">The Art</span>
				<span>of Yacht Chartering</span>
			</h1>
			<a href="#home-enquiry" class="hero-cta">Begin your journey</a>
		</div>

		<div bind:this={mediaPositioner} class="hero-media-positioner">
			<div bind:this={mediaFrame} class="hero-media-frame">
				{#each images as src, i}
					<img
						src={src}
						alt="Heritage yacht detail"
						class="hero-media-image {i === activeImage ? 'is-active' : ''}"
						loading={i === 0 ? 'eager' : 'lazy'}
						decoding="async"
					/>
				{/each}
			</div>
		</div>
	</div>
	<div class="hero-anchor" aria-hidden="true"></div>
</section>

<FullscreenMenu open={menuOpen} navLinks={menuLinks} panelId="hero-menu-panel" onclose={closeMenu} />

<style>
	.hero-shell {
		--brand-blue: #12163b;
		position: relative;
		height: 300vh;
		background: #efefef;
	}

	.hero-anchor {
		position: absolute;
		left: 0;
		bottom: 1px;
		width: 1px;
		height: 1px;
	}

	.hero-sticky-stage {
		position: sticky;
		top: 0;
		height: 100vh;
		overflow: hidden;
	}

	.hero-top-nav {
		position: absolute;
		top: 0.1rem;
		left: 0;
		z-index: 20;
		display: grid;
		width: 100%;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		padding-inline: clamp(1.2rem, 2.8vw, 3rem);
	}

	.hero-menu-trigger {
		justify-self: start;
		display: inline-flex;
		align-items: center;
		gap: 0.66rem;
		font-size: 0.76rem;
		font-weight: 400;
		letter-spacing: 0.14em;
		line-height: 1;
		text-transform: uppercase;
		color: rgba(24, 24, 24, 0.84);
	}

	.hero-menu-icon {
		display: inline-block;
		position: relative;
		width: 1.82rem;
		height: 0.48rem;
	}

	.hero-menu-line {
		position: absolute;
		left: 0;
		height: 1px;
		width: 1.34rem;
		background: rgba(25, 25, 25, 0.8);
		transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), background-color 220ms ease;
		transform-origin: left center;
	}

	.hero-menu-line-top {
		top: 0.05rem;
		transform: translateX(0.12rem);
	}

	.hero-menu-line-bottom {
		bottom: 0.05rem;
		transform: translateX(0);
	}

	.hero-menu-trigger:hover .hero-menu-line-top,
	.hero-menu-trigger:focus-visible .hero-menu-line-top {
		transform: translateX(0.26rem);
	}

	.hero-menu-trigger:hover .hero-menu-line-bottom,
	.hero-menu-trigger:focus-visible .hero-menu-line-bottom {
		transform: translateX(-0.12rem);
	}

	.hero-brand-mark {
		justify-self: center;
		display: inline-flex;
		align-items: center;
	}

	.hero-brand-logo {
		display: block;
		width: clamp(12.5rem, 16vw, 17.8rem);
		height: auto;
		filter: brightness(0) saturate(100%) invert(8%) sepia(23%) saturate(2222%) hue-rotate(214deg)
			brightness(89%) contrast(104%);
	}

	.hero-quick-links {
		justify-self: end;
		display: inline-flex;
		align-items: center;
		gap: 1.5rem;
	}

	.hero-quick-links a {
		font-size: 0.82rem;
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: rgba(20, 20, 20, 0.7);
	}

	.hero-copy-block {
		position: absolute;
		top: clamp(5.9rem, 10vh, 8.5rem);
		left: 50%;
		z-index: 6;
		display: flex;
		width: min(92vw, 74rem);
		transform: translateX(-50%);
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.hero-title {
		margin-top: clamp(0.6rem, 1.2vh, 1.1rem);
		font-family: var(--font-display);
		font-size: clamp(3.5rem, 9.7vw, 9.4rem);
		font-weight: 400;
		line-height: 0.95;
		letter-spacing: 0.005em;
		color: rgba(46, 46, 46, 0.88);
	}

	.hero-title span {
		display: block;
	}

	.hero-title-italic {
		font-style: italic;
		font-weight: 400;
	}

	.hero-cta {
		margin-top: clamp(1.9rem, 2.9vh, 2.5rem);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(44, 44, 44, 0.28);
		border-radius: 999px;
		padding: 0.4rem 1rem;
		font-size: 0.62rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(38, 38, 38, 0.8);
		transition: border-color 240ms ease, color 240ms ease;
	}

	.hero-cta:hover {
		border-color: rgba(44, 44, 44, 0.45);
		color: rgba(38, 38, 38, 0.95);
	}

	.hero-media-positioner {
		position: absolute;
		top: clamp(55vh, 58vh, 60vh);
		left: 50%;
		z-index: 10;
		transform: translateX(-50%);
		width: min(90vw, 2360px);
	}

	.hero-media-frame {
		position: relative;
		width: 100%;
		height: min(53vh, 760px);
		overflow: hidden;
		border-radius: 0.42rem;
		transform-origin: center center;
		box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12);
		will-change: transform, border-radius;
		background: #d8d8d8;
	}

	.hero-media-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transform: scale(1.02);
		transition: opacity 1650ms ease, transform 5800ms ease-out;
	}

	.hero-media-image.is-active {
		opacity: 1;
		transform: scale(1.08);
	}

	@media (max-width: 1100px) {
		.hero-top-nav {
			padding-inline: 1rem;
		}

		.hero-menu-trigger {
			font-size: 0.68rem;
			gap: 0.54rem;
		}

		.hero-menu-icon {
			width: 1.54rem;
			height: 0.42rem;
		}

		.hero-brand-logo {
			width: clamp(9.8rem, 21vw, 12.6rem);
		}

		.hero-title {
			font-size: clamp(2.6rem, 11vw, 5.5rem);
		}

		.hero-quick-links {
			gap: 1rem;
		}

		.hero-quick-links a {
			font-size: 0.72rem;
		}

		.hero-media-positioner {
			top: 61vh;
			width: min(94vw, 1200px);
		}

		.hero-media-frame {
			height: min(46vh, 540px);
		}
	}
</style>
