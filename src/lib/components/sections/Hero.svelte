<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';

	const menuLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Fleet', href: '/fleet-showcase' },
		{ label: 'The Club', href: '/club' },
		{ label: 'Journal', href: '#journal-home' }
	];

	let heroSection: HTMLElement;
	let mediaPositioner: HTMLElement;
	let mediaFrame: HTMLElement;
	let heroHeader: HTMLElement;
	let heroCopy: HTMLElement;
	let heroVideo: HTMLVideoElement;

	let menuOpen = $state(false);
	let timeline: gsap.core.Timeline | null = null;
	let trigger: ScrollTrigger | null = null;

	function clamp(value: number, min: number, max: number) {
		return Math.min(max, Math.max(min, value));
	}

	function lerp(start: number, end: number, amount: number) {
		return start + (end - start) * amount;
	}

	function segmentProgress(progress: number, start: number, end: number) {
		return clamp((progress - start) / (end - start), 0, 1);
	}

	function insetClip(top: number, right: number, bottom: number, left: number, radius: number) {
		return `inset(${top}px ${right}px ${bottom}px ${left}px round ${Math.max(radius, 0)}px)`;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function initScrollAnimation() {
		if (!heroSection || !mediaPositioner || !mediaFrame || !heroHeader || !heroCopy) {
			return;
		}

		timeline?.kill();
		trigger?.kill();

		const viewportW = window.innerWidth;
		const viewportH = window.innerHeight;
		const isTablet = viewportW < 1024;
		const isSmallDesktop = viewportW >= 1024 && viewportW < 1440;
		const initialWidth = Math.min(
			viewportW * (isTablet ? 0.95 : isSmallDesktop ? 0.92 : 0.9),
			isTablet ? 1080 : isSmallDesktop ? 1340 : 1680
		);
		const initialHeight = Math.min(
			viewportH * (isTablet ? 0.34 : isSmallDesktop ? 0.4 : 0.48),
			isTablet ? 430 : isSmallDesktop ? 560 : 760
		);
		const insetLeft = Math.max((viewportW - initialWidth) * 0.5, isTablet ? 10 : 18);
		const insetRight = insetLeft;
		const insetBottom = clamp(viewportH * (isTablet ? 0.006 : 0.008), 4, isTablet ? 8 : 10);
		const insetTop = Math.max(
			viewportH - initialHeight - insetBottom,
			isTablet ? 368 : isSmallDesktop ? 324 : 280
		);
		const initialClip = {
			top: insetTop,
			right: insetRight,
			bottom: insetBottom,
			left: insetLeft
		};
		const targetVideoScale = isTablet ? 1.022 : isSmallDesktop ? 1.028 : 1.035;
		const triggerDistance = '+=120%';

		gsap.set(mediaPositioner, {
			scale: 0.992,
			clipPath: insetClip(initialClip.top, initialClip.right, initialClip.bottom, initialClip.left, 30),
			boxShadow: '0 18px 42px rgba(0, 0, 0, 0.12)'
		});
		gsap.set(heroVideo, { scale: 1.01 });
		gsap.set(heroHeader, { y: 0, autoAlpha: 1 });
		gsap.set(heroCopy, { y: 0, autoAlpha: 1 });

		timeline = gsap.timeline({ paused: true });
		timeline
			.to(
				heroHeader,
				{
					y: -42,
					autoAlpha: 0,
					ease: 'none',
					duration: 0.36
				},
				0
			)
			.to(
				heroCopy,
				{
					y: -34,
					autoAlpha: 0,
					ease: 'none',
					duration: 0.44
				},
				0.05
			)
			.to(
				mediaPositioner,
				{
					ease: 'none',
					duration: 1,
					onUpdate() {
						const progress = this.progress();
						const stageOne = segmentProgress(progress, 0, 0.33);
						const stageTwo = segmentProgress(progress, 0.33, 0.66);
						const stageThree = segmentProgress(progress, 0.66, 1);
						const top =
							lerp(initialClip.top, initialClip.top * 0.8, stageOne) +
							lerp(0, -initialClip.top * 0.36, stageTwo) +
							lerp(0, -initialClip.top * 0.44, stageThree);
						const right =
							lerp(initialClip.right, initialClip.right * 0.78, stageOne) +
							lerp(0, -initialClip.right * 0.33, stageTwo) +
							lerp(0, -initialClip.right * 0.45, stageThree);
						const bottom =
							lerp(initialClip.bottom, initialClip.bottom * 0.76, stageOne) +
							lerp(0, -initialClip.bottom * 0.34, stageTwo) +
							lerp(0, -initialClip.bottom * 0.42, stageThree);
						const left =
							lerp(initialClip.left, initialClip.left * 0.78, stageOne) +
							lerp(0, -initialClip.left * 0.33, stageTwo) +
							lerp(0, -initialClip.left * 0.45, stageThree);
						const radius =
							lerp(30, 24, stageOne) + lerp(0, -12, stageTwo) + lerp(0, -12, stageThree);
						const shellScale =
							lerp(0.992, 0.996, stageOne) + lerp(0, 0.002, stageTwo) + lerp(0, 0.01, stageThree);

						gsap.set(mediaPositioner, {
							scale: shellScale,
							clipPath: insetClip(top, right, bottom, left, radius)
						});
					}
				},
				0
			)
			.to(
				mediaPositioner,
				{
					ease: 'none',
					boxShadow: '0 0 0 rgba(0,0,0,0)',
					duration: 1
				},
				0
			)
			.to(
				heroVideo,
				{
					scale: targetVideoScale,
					ease: 'none',
					duration: 1
				},
				0
			);

			trigger = ScrollTrigger.create({
			trigger: heroSection,
			start: 'top top',
			end: triggerDistance,
			scrub: 0.45,
			invalidateOnRefresh: true,
			onUpdate: (self) => {
				timeline?.progress(self.progress);
			}
		});
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const attemptPlayback = () => {
			if (!heroVideo) {
				return;
			}

			heroVideo.play().catch(() => {});
		};

		if (heroVideo) {
			heroVideo.muted = true;
			heroVideo.defaultMuted = true;
			heroVideo.playsInline = true;
			heroVideo.setAttribute('webkit-playsinline', 'true');
			heroVideo.load();
		}

		attemptPlayback();

		const raf = requestAnimationFrame(() => {
			initScrollAnimation();
		});

		const onResize = () => {
			initScrollAnimation();
		};

		heroVideo?.addEventListener('loadeddata', attemptPlayback);
		heroVideo?.addEventListener('canplay', attemptPlayback);

		window.addEventListener('resize', onResize);

		return () => {
			cancelAnimationFrame(raf);
			heroVideo?.removeEventListener('loadeddata', attemptPlayback);
			heroVideo?.removeEventListener('canplay', attemptPlayback);
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
				<a href="#home-enquiry">Contacts</a>
			</nav>
		</header>

		<div bind:this={heroCopy} class="hero-copy-block">
			<h1 class="hero-title">
				<span class="hero-title-italic">The Art</span>
				<span>of Yacht Chartering</span>
			</h1>
			<a href="/fleet-showcase" class="hero-cta">Discover the fleet</a>
		</div>

		<div bind:this={mediaPositioner} class="hero-media-positioner">
			<div bind:this={mediaFrame} class="hero-media-frame">
				<video
					bind:this={heroVideo}
					class="hero-media-video"
					autoplay
					muted
					loop
					playsinline
					preload="auto"
					aria-label="Ramacciotti Yachts hero film"
				>
					<source
						src="https://6enkohgyxx9vys7c.public.blob.vercel-storage.com/VIDEO/video%20%281%29.mp4"
						type="video/mp4"
					/>
				</video>
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
		height: 220vh;
		background: #ffffff;
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
		height: 100svh;
		height: 100dvh;
		overflow: hidden;
		isolation: isolate;
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
		padding-inline: var(--overlay-gutter);
	}

	.hero-menu-trigger {
		justify-self: start;
		display: inline-flex;
		align-items: center;
		gap: 0.66rem;
		font-size: var(--overlay-label-size);
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
		width: var(--overlay-brand-width);
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
		width: min(calc(100vw - (var(--page-gutter) * 2)), 74rem);
		transform: translateX(-50%);
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.hero-title {
		margin-top: clamp(0.6rem, 1.2vh, 1.1rem);
		font-family: var(--font-display);
		font-size: var(--display-xl);
		font-weight: 400;
		line-height: 0.95;
		letter-spacing: 0.005em;
		color: rgba(18, 22, 59, 0.96);
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
		inset: 0;
		z-index: 10;
		overflow: hidden;
		clip-path: inset(40vh 5vw 10vh 5vw round 30px);
		transform-origin: center center;
		box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12);
		pointer-events: none;
		will-change: transform, clip-path, box-shadow;
		backface-visibility: hidden;
	}

	.hero-media-frame {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background: #d8d8d8;
	}

	.hero-media-video {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.01);
		transform-origin: center center;
		will-change: transform;
		backface-visibility: hidden;
	}

	@media (max-width: 1100px) {
		.hero-top-nav {
			padding-inline: var(--overlay-gutter);
		}

		.hero-menu-trigger {
			font-size: 0.68rem;
			gap: 0.54rem;
		}

		.hero-menu-icon {
			width: 1.54rem;
			height: 0.42rem;
		}

		.hero-quick-links {
			gap: 1rem;
		}

		.hero-quick-links a {
			font-size: 0.72rem;
		}

		.hero-media-positioner {
			clip-path: inset(43vh 3vw 8vh 3vw round 24px);
		}
	}

	@media (max-width: 1439px) and (min-width: 1024px) {
		.hero-shell {
			height: 210vh;
		}

		.hero-top-nav {
			top: 0.25rem;
		}

		.hero-copy-block {
			top: clamp(5.3rem, 8.5vh, 6.9rem);
			width: min(calc(100vw - (var(--page-gutter) * 2)), 60rem);
		}

		.hero-title {
			max-width: 10.5ch;
		}

		.hero-cta {
			margin-top: 1.6rem;
		}

		.hero-media-positioner {
			clip-path: inset(46vh 3.75vw 7vh 3.75vw round 26px);
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.hero-shell {
			height: 200vh;
		}

		.hero-top-nav {
			top: 0.4rem;
		}

		.hero-menu-trigger {
			gap: 0.48rem;
		}

		.hero-copy-block {
			top: clamp(5.15rem, 7.8vh, 6rem);
			width: min(calc(100vw - (var(--page-gutter) * 2)), 48rem);
		}

		.hero-title {
			max-width: 9.5ch;
			line-height: 0.98;
		}

		.hero-quick-links a {
			font-size: 0.7rem;
			letter-spacing: 0.11em;
		}

		.hero-cta {
			margin-top: 1.35rem;
			padding-inline: 0.88rem;
		}

		.hero-media-positioner {
			clip-path: inset(50vh 2.4vw 6vh 2.4vw round 22px);
		}
	}
</style>
