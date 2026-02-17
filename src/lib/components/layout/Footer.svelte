<script lang="ts">
	import type { NavLink, SocialLink } from '$lib/types';

	const navLinks: NavLink[] = [
		{ label: 'Fleet', href: '#fleet' },
		{ label: 'Charter', href: '#charter' },
		{ label: 'Management', href: '#management' },
		{ label: 'Contact', href: '#contact' }
	];

	const socialLinks: SocialLink[] = [
		{ label: 'Instagram', href: '#' },
		{ label: 'LinkedIn', href: '#' },
		{ label: 'Facebook', href: '#' }
	];
</script>

<footer class="border-t border-white/10 bg-navy py-16 md:py-20">
	<div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
		<!-- Wordmark -->
		<p class="text-white text-sm font-light tracking-[0.25em] uppercase md:text-base">
			Ramacciotti Yachts
		</p>

		<!-- Nav links -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-white/60 text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-gold"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Social links -->
		<div class="mt-8 flex items-center justify-center gap-8">
			{#each socialLinks as link}
				<a
					href={link.href}
					class="text-white/40 text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:text-gold"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Legal -->
		<p class="text-slate mt-12 text-xs tracking-wider">
			&copy; 2026 Ramacciotti Yachts. All rights reserved.
		</p>
	</div>
</footer>
