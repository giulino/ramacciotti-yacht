<script lang="ts">
	import type { NavLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/#about' },
		{ label: 'Fleet', href: '/#fleet-overview' },
		{ label: 'The Club', href: '/#club' },
		{ label: 'Journal', href: '/#journal-home' }
	];

</script>

<footer class="border-t border-white/10 bg-[#12163b] py-12 md:py-14">
	<div class="mx-auto max-w-7xl px-6 text-center md:px-12">
		<img
			src="/LOGO/RAMACCIOTTI_BIANCO_COMPLETO.png"
			alt="Ramacciotti Yachts"
			class="mx-auto h-auto w-52 md:w-[17rem]"
			loading="lazy"
			decoding="async"
		/>
		<p class="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-white/56">
			George Town, Cayman Islands
		</p>

		<div class="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-[0.74rem] uppercase tracking-[0.14em] text-white/68 transition-colors duration-200 hover:text-gold"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="mt-5 flex items-center justify-center gap-6 md:gap-8" aria-label="Social links">
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram"
				class="text-white/52 transition-colors duration-200 hover:text-gold"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5" fill="none">
					<rect
						x="3.5"
						y="3.5"
						width="17"
						height="17"
						rx="5"
						stroke="currentColor"
						stroke-width="1.6"
					></rect>
					<circle cx="12" cy="12" r="4.1" stroke="currentColor" stroke-width="1.6"></circle>
					<circle cx="17.3" cy="6.7" r="0.9" fill="currentColor"></circle>
				</svg>
			</a>
			<a
				href="https://x.com"
				target="_blank"
				rel="noreferrer"
				aria-label="X"
				class="text-white/52 transition-colors duration-200 hover:text-gold"
			>
				<svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5" fill="currentColor">
					<path d="M18.9 3H21l-6.5 7.4L22 21h-5.9l-4.6-6-5.2 6H4.2l7-8-7.2-10H10l4.1 5.5zm-1 16h1.6L9.1 4.9H7.4z"></path>
				</svg>
			</a>
		</div>

		<p class="text-slate mt-8 text-xs tracking-wider">
			&copy; 2026 Ramacciotti Yachts. All rights reserved.
		</p>
	</div>
</footer>
