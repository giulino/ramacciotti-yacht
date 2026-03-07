<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';

	const fleetDestinations = [
		{
			name: 'Caribbean Voyages',
			copy: 'A winter chapter of warm winds and quiet anchorages.',
			journalLink: '/journal/caribbean-winter-calm',
			image: '/images/hero/hero-01.jpg'
		},
		{
			name: 'Sardinia Voyages',
			copy: 'Summer passages between granite coastlines and emerald coves.',
			journalLink: '/journal/sardinia-at-dusk',
			image: '/images/hero/hero-02.jpg'
		},
		{
			name: 'Ligurian Voyages',
			copy: 'Pastel harbors, calm mornings, and effortless Italian rhythm.',
			journalLink: '/journal/ligurian-riviera-light',
			image: '/images/hero/hero-03.jpg'
		}
	];
</script>

<svelte:head>
	<title>Ramacciotti Yachts | Fleet</title>
</svelte:head>

<section class="bg-navy py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-cream/70">Fleet</p>
		<h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-white md:text-6xl">
			A considered fleet selected for character, crew quality, and life onboard.
		</h1>

		<div class="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
			{#each fleetDestinations as block}
				<a
					href={block.journalLink}
					class="group overflow-hidden border border-white/12 bg-white/[0.03] transition-colors duration-300 hover:border-gold/45"
				>
					<div class="overflow-hidden">
						<img
							src={block.image}
							alt={block.name}
							class="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div class="p-6">
						<h2 class="text-2xl text-white">{block.name}</h2>
						<p class="mt-3 text-sm leading-relaxed text-cream/75">{block.copy}</p>
						<span class="mt-4 inline-block border-b border-transparent pb-1 text-sm text-cream/80 transition-colors duration-300 group-hover:border-gold/70 group-hover:text-gold">
							Open Journal article
						</span>
					</div>
				</a>
			{/each}
		</div>

		<ConsultationForm
			context="Fleet"
			title="Request a private proposal"
			subtitle="Tell us your preferred season and priorities. We will curate options accordingly."
		/>
	</div>
</section>
