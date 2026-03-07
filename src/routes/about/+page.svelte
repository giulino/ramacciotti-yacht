<script lang="ts">
	const philosophy = [
		{
			title: 'Boutique',
			text: 'We intentionally limit the number of charters each season to preserve quality, focus, and care.'
		},
		{
			title: 'Tailored',
			text: 'Each journey is custom-built around your preferences, rhythm, and priorities.'
		},
		{
			title: 'Discreet',
			text: 'Confidentiality is treated as a standard, not an added option.'
		},
		{
			title: 'Italian Elegance',
			text: 'A calm balance of refinement, authenticity, and effortless style.'
		}
	];

	const fourC = [
		{
			title: 'Consult',
			text: 'We begin with a personal conversation to understand wishes, timing, and expectations.'
		},
		{
			title: 'Curate',
			text: 'We select yachts and shape an itinerary aligned with your style and purpose.'
		},
		{
			title: 'Confirm',
			text: 'Contracts, documentation, and financial steps are handled clearly and professionally.'
		},
		{
			title: 'Care',
			text: 'From embarkation to return, our attention remains continuous and discreet.'
		}
	];
</script>

<svelte:head>
	<title>Ramacciotti Yachts | About</title>
</svelte:head>

<section class="relative min-h-screen overflow-hidden bg-navy">
	<img
		src="/images/about/founder-hero.jpg"
		alt="Tommaso Ramacciotti near the sea"
		class="absolute inset-0 h-full w-full object-cover"
		loading="eager"
		decoding="async"
	/>
	<div class="absolute inset-0 bg-navy/42"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/18 to-navy/24"></div>

	<div class="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center md:px-12">
		<p class="text-xl text-white md:text-2xl">Ramacciotti Yachts</p>
		<p class="mt-4 text-sm tracking-[0.08em] text-cream/82 md:text-base">About</p>
		<p class="mt-10 max-w-3xl text-lg leading-relaxed text-white/92 md:text-2xl">
			A vision born from the sea and shaped by discretion, beauty, and belonging.
		</p>
	</div>
</section>

<section class="bg-cream py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-6xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">The Vision</p>
		<h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-charcoal md:text-6xl">Where elegance meets intention.</h1>
		<p class="mt-10 max-w-3xl text-base leading-relaxed text-slate md:text-lg">
			Ramacciotti Yachts is a founder-led advisory house dedicated to private and corporate voyages across
			the Mediterranean and the Caribbean. Our approach is quiet and deliberate: every itinerary is shaped
			with personal attention, measured judgment, and a long-term perspective that values continuity over
			volume.
		</p>
	</div>
</section>

<section class="bg-cream/95 pb-28 md:pb-36 lg:pb-44">
	<div class="mx-auto grid max-w-6xl gap-8 border border-charcoal/12 bg-white/60 p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-10">
		<div class="flex justify-center md:justify-start">
			<img src="/images/brand/mta-monogram.svg" alt="MTA logo" class="w-56 max-w-full" />
		</div>
		<div>
			<p class="text-sm tracking-[0.12em] text-slate">Credentials</p>
			<h2 class="mt-4 text-3xl text-charcoal md:text-4xl">Certified MTA Yacht Broker</h2>
			<p class="mt-4 text-sm leading-relaxed text-slate md:text-base">
				Operating exclusively with licensed and insured partners under CYBA and MYBA charter standards.
			</p>
		</div>
	</div>
</section>

<section class="bg-cream pb-28 md:pb-36 lg:pb-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">Philosophy</p>
		<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each philosophy as item}
				<article
					class="group border border-charcoal/12 bg-white/55 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/45 hover:bg-white"
				>
					<h3 class="text-2xl text-charcoal">{item.title}</h3>
					<p class="mt-4 text-sm leading-relaxed text-slate md:text-base">{item.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-navy py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-cream/70">How We Work — The 4C</p>
		<div class="mt-12 grid gap-7 md:grid-cols-4 md:gap-6">
			{#each fourC as item, i}
				<div class="relative border border-white/14 bg-white/[0.03] p-6">
					<div class="mb-4 flex items-center gap-3">
						<span class="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/55 text-xs text-gold">
							{i + 1}
						</span>
						<h3 class="text-2xl text-white">{item.title}</h3>
					</div>
					<p class="text-sm leading-relaxed text-cream/76">{item.text}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center md:text-left">
			<a
				href="/#home-enquiry"
				class="inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light"
			>
				Begin your journey
			</a>
		</div>
	</div>
</section>
