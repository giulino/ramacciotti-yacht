<script lang="ts">
	import MobileMenu from './MobileMenu.svelte';
	import type { NavLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'About', href: '#about' },
		{ label: 'Fleet', href: '#fleet' },
		{ label: 'The Club', href: '#club' },
		{ label: 'Corporate', href: '#corporate' },
		{ label: 'Journal', href: '#journal' }
	];

	let scrolled = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		function handleScroll() {
			scrolled = window.scrollY > 50;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full transition-all duration-[350ms] ease-in-out {scrolled
		? 'bg-navy shadow-lg shadow-navy/20'
		: 'bg-transparent'}"
>
	<div class="flex items-center justify-between px-6 py-5 md:px-12">
		<!-- Menu toggle — top left -->
		<button
			class="relative z-[60] flex items-center gap-3"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<div class="flex flex-col items-start gap-1.5">
				<span
					class="block h-px w-6 bg-white transition-all duration-300 {menuOpen
						? 'translate-y-[3.5px] rotate-45'
						: ''}"
				></span>
				<span
					class="block h-px bg-white transition-all duration-300 {menuOpen
						? '-translate-y-[2.5px] -rotate-45 w-6'
						: 'w-4'}"
				></span>
			</div>
			<span
				class="text-[10px] uppercase tracking-[0.25em] text-white/70 transition-opacity duration-300 {menuOpen
					? 'opacity-0'
					: 'opacity-100'}"
			>
				Menu
			</span>
		</button>

		<!-- Centered wordmark / logo -->
		<a
			href="/"
			class="absolute left-1/2 -translate-x-1/2 text-white text-sm font-light tracking-[0.25em] uppercase md:text-base"
		>
			Ramacciotti Yachts
		</a>

		<!-- Right side spacer for balance -->
		<div class="w-20"></div>
	</div>
</nav>

<MobileMenu open={menuOpen} {navLinks} onclose={closeMenu} />
