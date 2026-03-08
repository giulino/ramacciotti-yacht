<script lang="ts">
	import type { NavLink, SocialLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/#about' },
		{ label: 'Fleet', href: '/#fleet-overview' },
		{ label: 'The Club', href: '/#club' },
		{ label: 'Corporate', href: '/#corporate-circle' },
		{ label: 'Journal', href: '/#journal-home' }
	];

	const socialLinks: SocialLink[] = [
		{ label: 'Instagram', href: '#' },
		{ label: 'LinkedIn', href: '#' }
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

		<div class="mt-5 flex items-center justify-center gap-6 md:gap-8">
			{#each socialLinks as link}
				<a
					href={link.href}
					class="text-[0.74rem] uppercase tracking-[0.14em] text-white/52 transition-colors duration-200 hover:text-gold"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<p class="text-slate mt-8 text-xs tracking-wider">
			&copy; 2026 Ramacciotti Yachts. All rights reserved.
		</p>
	</div>
</footer>
