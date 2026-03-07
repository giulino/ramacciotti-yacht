<script lang="ts">
	const destinations = [
		{
			name: 'Caribbean',
			season: 'December to April',
			text: 'Winter serenity among turquoise horizons and long, quiet afternoons at sea.'
		},
		{
			name: 'Sardinia',
			season: 'June to September',
			text: 'Emerald coves, warm evenings, and the timeless rhythm of Mediterranean summer.'
		},
		{
			name: 'Ligurian Riviera',
			season: 'May to October',
			text: 'A coastline of color, elegance, and small harbors that reward unhurried sailing.'
		}
	];
</script>

<section id="journal" class="bg-cream py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">Destinations</p>
		<h2 class="mt-5 max-w-3xl text-4xl leading-[1.12] text-charcoal md:text-6xl">
			Where each season writes a different chapter.
		</h2>
		<div class="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
			{#each destinations as destination}
				<article class="border border-charcoal/12 bg-white/55 p-7">
					<h3 class="text-2xl text-charcoal">{destination.name}</h3>
					<p class="mt-2 text-sm tracking-[0.07em] text-gold">{destination.season}</p>
					<p class="mt-4 text-sm leading-relaxed text-slate md:text-base">{destination.text}</p>
				</article>
			{/each}
		</div>
		<p class="mt-12 text-sm tracking-[0.08em] text-slate">Discover where the season will take you.</p>
	</div>
</section>
