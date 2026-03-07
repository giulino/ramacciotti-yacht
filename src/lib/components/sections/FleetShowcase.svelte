<script lang="ts">
	const yachts = [
		{
			name: 'Mangusta 92',
			detail: 'Mediterranean icon with understated performance',
			image: '/images/hero/hero-01.jpg'
		},
		{
			name: 'Ferretti 860',
			detail: 'Elegant spaces for private and corporate hosting',
			image: '/images/hero/hero-02.jpg'
		},
		{
			name: 'Folgore 88',
			detail: 'A cinematic profile for purposeful summer passages',
			image: '/images/hero/hero-03.jpg'
		}
	];
</script>

<section id="fleet" class="bg-navy py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-cream/70">The collection</p>
		<h2 class="mt-5 max-w-3xl text-4xl leading-[1.12] text-white md:text-6xl">
			A curated fleet for journeys defined by character, comfort, and discretion.
		</h2>
		<p class="mt-8 max-w-3xl text-base leading-relaxed text-cream/75 md:text-lg">
			Each yacht is selected for crew professionalism, onboard atmosphere, and the quality of life it
			offers at sea.
		</p>

		<div class="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
			{#each yachts as yacht}
				<article class="group overflow-hidden border border-white/12 bg-white/[0.03]">
					<div class="overflow-hidden">
						<img
							src={yacht.image}
							alt={yacht.name}
							class="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div class="p-6">
						<h3 class="text-2xl text-white">{yacht.name}</h3>
						<p class="mt-3 text-sm leading-relaxed text-cream/75">{yacht.detail}</p>
					</div>
				</article>
			{/each}
		</div>

		<a
			href="#contact"
			class="mt-12 inline-block border-b border-gold/55 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light"
		>
			Request a Proposal
		</a>
	</div>
</section>
