<script lang="ts">
	import { onMount } from 'svelte';
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';
	import type { NavLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '#about' },
		{ label: 'Fleet', href: '#fleet-overview' },
		{ label: 'The Club', href: '#club' },
		{ label: 'Journal', href: '#journal-home' }
	];

	let isVisible = $state(false);
	let hasFullscreenSectionView = $state(false);
	let isInDestinationsSection = $state(false);
	let isInDestinationsIntro = $state(false);
	let isScrollActive = $state(false);
	let menuOpen = $state(false);
	const revealOffset = 108;
	const scrollIdleDelayMs = 260;
	const fullscreenCoverageThreshold = 0.88;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

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

	onMount(() => {
		const revealTarget = document.getElementById('about');
		const destinationsSection = document.getElementById('destinations');
		const trackedSections = Array.from(
			document.querySelectorAll<HTMLElement>(
				'#about, .fleet-stage, #destinations, #club, #journal-home, #home-enquiry'
			)
		);
		let scrollIdleTimer: ReturnType<typeof setTimeout> | null = null;

		if (!revealTarget) {
			return;
		}

		const updateFullscreenView = () => {
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

			hasFullscreenSectionView = trackedSections.some((section) => {
				const rect = section.getBoundingClientRect();
				const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
				const clampedVisibleHeight = Math.max(0, visibleHeight);
				const viewportCoverage = clampedVisibleHeight / viewportHeight;
				return viewportCoverage >= fullscreenCoverageThreshold;
			});
		};

		const updateVisibility = () => {
			isVisible = revealTarget.getBoundingClientRect().top <= revealOffset;
			updateFullscreenView();

			if (destinationsSection) {
				const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
				const rect = destinationsSection.getBoundingClientRect();
				const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
				const clampedVisibleHeight = Math.max(0, visibleHeight);
				const viewportCoverage = clampedVisibleHeight / viewportHeight;
				const introWindow = Math.min(viewportHeight * 0.42, 360);
				isInDestinationsSection = viewportCoverage >= 0.24;
				isInDestinationsIntro = rect.top <= revealOffset && rect.top > -introWindow;
			} else {
				isInDestinationsSection = false;
				isInDestinationsIntro = false;
			}
		};

		updateVisibility();
		const markScrollActive = () => {
			isScrollActive = true;

			if (scrollIdleTimer) {
				clearTimeout(scrollIdleTimer);
			}

			scrollIdleTimer = window.setTimeout(() => {
				isScrollActive = false;
			}, scrollIdleDelayMs);
		};

		const onScroll = () => {
			updateVisibility();
			markScrollActive();
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', updateVisibility);

		return () => {
			if (scrollIdleTimer) {
				clearTimeout(scrollIdleTimer);
			}

			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', updateVisibility);
		};
	});
</script>

<div
	class="home-sticky-panel {isVisible && !isInDestinationsIntro && (isInDestinationsSection || !hasFullscreenSectionView || isScrollActive || menuOpen) ? 'is-visible' : ''}"
	aria-hidden={!(isVisible && !isInDestinationsIntro && (isInDestinationsSection || !hasFullscreenSectionView || isScrollActive || menuOpen))}
>
	<div class="home-sticky-panel__bar">
		<button
			type="button"
			class="home-sticky-panel__menu"
			aria-label="Open menu"
			aria-expanded={menuOpen}
			aria-controls="home-sticky-menu-panel"
			onclick={toggleMenu}
		>
			<span class="home-sticky-panel__menu-icon" aria-hidden="true">
				<span></span>
				<span></span>
			</span>
			<span class="home-sticky-panel__menu-label">Menu</span>
		</button>

		<a href="/" class="home-sticky-panel__brand" aria-label="Ramacciotti Yachts home">
			<img
				src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png"
				alt="Ramacciotti Yachts"
				loading="eager"
				decoding="async"
			/>
		</a>

		<nav class="home-sticky-panel__links" aria-label="Page shortcuts">
			<a href="#home-enquiry">Contacts</a>
		</nav>
	</div>
</div>

<FullscreenMenu
	open={menuOpen}
	navLinks={navLinks}
	panelId="home-sticky-menu-panel"
	onclose={closeMenu}
/>

<style>
	.home-sticky-panel {
		position: fixed;
		top: clamp(0.85rem, 2vh, 1.45rem);
		left: 0;
		right: 0;
		z-index: 72;
		padding: 0 clamp(1.1rem, 2.8vw, 2.35rem);
		opacity: 0;
		transform: translateY(-1.25rem);
		pointer-events: none;
		transition: opacity 280ms ease, transform 280ms ease;
	}

	.home-sticky-panel.is-visible {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	.home-sticky-panel__bar {
		position: relative;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		max-width: 100%;
		min-height: clamp(2.55rem, 3.15vw, 2.95rem);
		padding: 0.34rem clamp(0.95rem, 1.7vw, 1.45rem);
		background: rgba(255, 255, 255, 0.95);
		border: 1px solid rgba(18, 22, 59, 0.06);
		border-radius: 0.78rem;
		box-shadow: 0 8px 24px rgba(17, 26, 56, 0.065);
		backdrop-filter: blur(16px);
	}

	.home-sticky-panel__menu {
		justify-self: start;
		display: inline-flex;
		align-items: center;
		gap: 0.62rem;
		border: 0;
		background: transparent;
		padding: 0;
		color: rgba(18, 22, 59, 0.78);
		cursor: pointer;
	}

	.home-sticky-panel__menu-icon {
		display: inline-flex;
		flex-direction: column;
		gap: 0.26rem;
	}

	.home-sticky-panel__menu-icon span {
		display: block;
		width: 0.96rem;
		height: 1px;
		background: currentColor;
	}

	.home-sticky-panel__menu-label,
	.home-sticky-panel__links a {
		font-family: var(--font-primary);
		font-size: 0.68rem;
		letter-spacing: 0.17em;
		text-transform: uppercase;
	}

	.home-sticky-panel__brand {
		justify-self: center;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
	}

	.home-sticky-panel__brand img {
		width: clamp(7.6rem, 10.8vw, 9.4rem);
		height: auto;
		transform: scale(1.9);
		transform-origin: center center;
		filter: brightness(0) saturate(100%) invert(8%) sepia(23%) saturate(2222%) hue-rotate(214deg)
			brightness(89%) contrast(104%);
	}

	.home-sticky-panel__links {
		justify-self: end;
		display: inline-flex;
		align-items: center;
		gap: clamp(0.72rem, 1.2vw, 1.05rem);
	}

	.home-sticky-panel__links a {
		color: rgba(18, 22, 59, 0.62);
		transition: color 220ms ease;
	}

	.home-sticky-panel__menu:hover,
	.home-sticky-panel__links a:hover {
		color: rgba(18, 22, 59, 0.98);
	}

	@media (max-width: 720px) {
		.home-sticky-panel {
			top: 0.7rem;
			padding-inline: 0.65rem;
		}

		.home-sticky-panel__bar {
			grid-template-columns: auto 1fr auto;
			column-gap: 0.62rem;
			padding-inline: 0.74rem;
			border-radius: 0.72rem;
		}

		.home-sticky-panel__brand {
			justify-self: start;
		}

		.home-sticky-panel__brand img {
			width: clamp(6.8rem, 30vw, 7.8rem);
		}

		.home-sticky-panel__links {
			gap: 0.72rem;
		}
	}

	@media (max-width: 560px) {
		.home-sticky-panel__links {
			display: none;
		}

		.home-sticky-panel__bar {
			grid-template-columns: auto 1fr;
		}
	}
</style>
