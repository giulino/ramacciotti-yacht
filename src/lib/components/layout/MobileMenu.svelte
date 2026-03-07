<script lang="ts">
	import type { NavLink } from '$lib/types';

	interface Props {
		open: boolean;
		navLinks: NavLink[];
		onclose: () => void;
	}

	let { open, navLinks, onclose }: Props = $props();

	function formatMenuLabel(label: string) {
		return label.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
	}

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
	class="fixed inset-0 z-40 {open ? 'pointer-events-auto' : 'pointer-events-none'}"
>
	<div
		class="absolute inset-0 flex flex-col items-center justify-center bg-navy will-change-transform
			transition-transform duration-700 ease-in-out
			{open ? 'translate-y-0' : '-translate-y-full'}"
	>
		<div class="flex flex-col items-center gap-8">
			{#each navLinks as link, i}
				<a
					href={link.href}
					class="text-white text-2xl font-bold normal-case [font-variant-caps:normal] tracking-[0.16em] transition-all duration-500 ease-out hover:text-gold md:text-3xl md:tracking-[0.2em]
						{open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
					style="transition-delay: {open ? 220 + i * 80 : 0}ms"
					onclick={onclose}
				>
					{formatMenuLabel(link.label)}
				</a>
			{/each}
		</div>

		<!-- Decorative line -->
		<div
			class="mt-12 h-px w-16 bg-gold/40 transition-all duration-700 ease-out
				{open ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}"
			style="transition-delay: {open ? 700 : 0}ms"
		></div>
	</div>
</div>
