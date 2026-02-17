<script lang="ts">
	import type { NavLink } from '$lib/types';

	interface Props {
		open: boolean;
		navLinks: NavLink[];
		onclose: () => void;
	}

	let { open, navLinks, onclose }: Props = $props();

	// Lock body scroll when menu is open
	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<!-- Full-screen overlay -->
<div
	class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy transition-all duration-500 ease-in-out
		{open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}"
>
	<div class="flex flex-col items-center gap-8">
		{#each navLinks as link, i}
			<a
				href={link.href}
				class="text-white text-2xl font-light uppercase tracking-[0.3em] transition-all duration-500 ease-out hover:text-gold md:text-3xl
					{open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
				style="transition-delay: {open ? 150 + i * 80 : 0}ms"
				onclick={onclose}
			>
				{link.label}
			</a>
		{/each}
	</div>

	<!-- Decorative line -->
	<div
		class="mt-12 h-px w-16 bg-gold/40 transition-all duration-700 ease-out
			{open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}"
		style="transition-delay: {open ? 600 : 0}ms"
	></div>
</div>
