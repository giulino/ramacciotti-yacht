<script lang="ts">
	import MobileMenu from './MobileMenu.svelte';
	import type { NavLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'Fleet', href: '#fleet' },
		{ label: 'Charter', href: '#charter' },
		{ label: 'Management', href: '#management' },
		{ label: 'Destinations', href: '#destinations' },
		{ label: 'Contact', href: '#contact' }
	];

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

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

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full transition-all duration-[350ms] ease-in-out {scrolled
		? 'bg-navy shadow-lg shadow-navy/20'
		: 'bg-transparent'}"
>
	<div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:px-12">
		<!-- Wordmark -->
		<a href="/" class="text-white text-sm font-light tracking-[0.25em] uppercase md:text-base">
			Ramacciotti Yachts
		</a>

		<!-- Desktop nav links -->
		<div class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-white/80 text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-gold"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<button
			class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
		>
			<span
				class="block h-px w-6 bg-white transition-all duration-300 {mobileMenuOpen
					? 'translate-y-[3.5px] rotate-45'
					: ''}"
			></span>
			<span
				class="block h-px w-6 bg-white transition-all duration-300 {mobileMenuOpen
					? '-translate-y-[2.5px] -rotate-45'
					: ''}"
			></span>
		</button>
	</div>
</nav>

<MobileMenu open={mobileMenuOpen} {navLinks} onclose={closeMobileMenu} />
