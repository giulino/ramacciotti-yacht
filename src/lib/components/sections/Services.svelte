<script lang="ts">
	const pillars = [
		{
			title: 'Charter Advisory',
			text: 'We present selected yachts aligned with your lifestyle, timing, and priorities.'
		},
		{
			title: 'Bespoke Itineraries',
			text: 'Routes are shaped around light, pace, and the way you prefer to spend your days.'
		},
		{
			title: 'Corporate Voyages',
			text: 'Private experiences for leadership teams and clients with complete discretion.'
		},
		{
			title: 'The Club',
			text: 'A private circle for returning guests where each voyage deepens the relationship.'
		}
	];
</script>

<section id="club" class="bg-cream py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">How we work</p>
		<h2 class="mt-5 max-w-3xl text-4xl leading-[1.12] text-charcoal md:text-6xl">
			Founder-led guidance from the first conversation to your return to shore.
		</h2>
		<div class="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
			{#each pillars as pillar}
				<article class="border border-charcoal/12 bg-white/50 p-7">
					<h3 class="text-2xl text-charcoal">{pillar.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate md:text-base">{pillar.text}</p>
				</article>
			{/each}
		</div>
		<a
			href="#contact"
			class="mt-12 inline-block border-b border-gold/55 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold"
		>
			Discover the Club
		</a>
	</div>
</section>
