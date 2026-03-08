<script lang="ts">
	import FullscreenMenu from '$lib/components/layout/FullscreenMenu.svelte';
	import type { NavLink } from '$lib/types';

	interface Props {
		quickLinks?: { label: string; href: string }[];
	}

	let {
		quickLinks = [
			{ label: 'Contacts', href: '/#home-enquiry' }
		]
	}: Props = $props();

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Fleet', href: '/fleet' },
		{ label: 'The Club', href: '/club' },
		{ label: 'Corporate', href: '/corporate' },
		{ label: 'Journal', href: '/journal' }
	];

	let menuOpen = $state(false);

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
</script>

<header class="editorial-top-nav" aria-label="Primary">
	<button
		type="button"
		class="editorial-menu-trigger"
		aria-label="Open menu"
		aria-expanded={menuOpen}
		aria-controls="editorial-menu-panel"
		onclick={toggleMenu}
	>
		<span class="editorial-menu-icon" aria-hidden="true">
			<span class="editorial-menu-line editorial-menu-line-top"></span>
			<span class="editorial-menu-line editorial-menu-line-bottom"></span>
		</span>
		<span>Menu</span>
	</button>

	<a href="/" class="editorial-brand-mark" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png"
			alt="Ramacciotti Yachts"
			class="editorial-brand-logo"
			loading="eager"
			decoding="async"
		/>
	</a>

	<nav class="editorial-quick-links" aria-label="Quick links">
		{#each quickLinks as link}
			<a href={link.href}>{link.label}</a>
		{/each}
	</nav>
</header>

<FullscreenMenu open={menuOpen} navLinks={navLinks} panelId="editorial-menu-panel" onclose={closeMenu} />

<style>
	.editorial-top-nav {
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

	.editorial-menu-trigger {
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

	.editorial-menu-icon {
		display: inline-block;
		position: relative;
		width: 1.82rem;
		height: 0.48rem;
	}

	.editorial-menu-line {
		position: absolute;
		left: 0;
		height: 1px;
		width: 1.34rem;
		background: rgba(25, 25, 25, 0.8);
		transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), background-color 220ms ease;
		transform-origin: left center;
	}

	.editorial-menu-line-top {
		top: 0.05rem;
		transform: translateX(0.12rem);
	}

	.editorial-menu-line-bottom {
		bottom: 0.05rem;
		transform: translateX(0);
	}

	.editorial-menu-trigger:hover .editorial-menu-line-top,
	.editorial-menu-trigger:focus-visible .editorial-menu-line-top {
		transform: translateX(0.26rem);
	}

	.editorial-menu-trigger:hover .editorial-menu-line-bottom,
	.editorial-menu-trigger:focus-visible .editorial-menu-line-bottom {
		transform: translateX(-0.12rem);
	}

	.editorial-brand-mark {
		justify-self: center;
		display: inline-flex;
		align-items: center;
	}

	.editorial-brand-logo {
		display: block;
		width: clamp(12.5rem, 16vw, 17.8rem);
		height: auto;
		filter: brightness(0) saturate(100%) invert(8%) sepia(23%) saturate(2222%) hue-rotate(214deg)
			brightness(89%) contrast(104%);
	}

	.editorial-quick-links {
		justify-self: end;
		display: inline-flex;
		align-items: center;
		gap: 1.5rem;
	}

	.editorial-quick-links a {
		font-size: 0.82rem;
		letter-spacing: 0.13em;
		text-transform: uppercase;
		color: rgba(20, 20, 20, 0.7);
	}

	@media (max-width: 1100px) {
		.editorial-top-nav {
			padding-inline: 1rem;
		}

		.editorial-menu-trigger {
			font-size: 0.68rem;
			gap: 0.54rem;
		}

		.editorial-menu-icon {
			width: 1.54rem;
			height: 0.42rem;
		}

		.editorial-brand-logo {
			width: clamp(9.8rem, 21vw, 12.6rem);
		}

		.editorial-quick-links {
			gap: 1rem;
		}

		.editorial-quick-links a {
			font-size: 0.72rem;
		}
	}

	@media (max-width: 720px) {
		.editorial-top-nav {
			grid-template-columns: auto 1fr auto;
			column-gap: 0.8rem;
		}

		.editorial-brand-mark {
			justify-self: start;
		}

		.editorial-brand-logo {
			width: clamp(8.6rem, 34vw, 10.2rem);
		}

		.editorial-quick-links {
			gap: 0.72rem;
		}
	}

	@media (max-width: 560px) {
		.editorial-quick-links {
			display: none;
		}

		.editorial-top-nav {
			grid-template-columns: auto 1fr;
		}
	}
</style>
