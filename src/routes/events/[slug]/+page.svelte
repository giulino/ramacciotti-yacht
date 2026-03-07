<script lang="ts">
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.event.title} | Ramacciotti Events</title>
	<meta name="description" content={data.event.intro} />
</svelte:head>

<section class="relative bg-white pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
	<EditorialTopNav />

	<div class="mx-auto max-w-[96rem] px-6 md:px-12">
		<div class="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
			<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate">{data.event.fullDate}</p>
			<span class="rounded-full bg-cream px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-charcoal">
				{data.event.category}
			</span>
		</div>

		<h1 class="mt-8 max-w-[16ch] font-display text-[clamp(4rem,10vw,8.8rem)] leading-[0.88] tracking-[-0.03em] text-charcoal">
			{data.event.title}
		</h1>

		<div class="mt-14 grid gap-12 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-16">
			<div class="text-charcoal">
				<p class="font-display text-[clamp(2rem,4vw,3.1rem)] leading-[0.92]">
					{data.event.month} {data.event.days}
				</p>
				<p class="mt-2 font-primary text-base uppercase tracking-[0.12em] text-slate">{data.event.year}</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(15rem,0.82fr)] lg:gap-16">
				<div>
					<p class="max-w-3xl text-base leading-relaxed text-slate md:text-lg">
						{data.event.intro}
					</p>
					<p class="mt-6 max-w-3xl text-base leading-relaxed text-slate md:text-lg">
						{data.event.note}
					</p>

					<div class="mt-10 border border-charcoal/12 bg-cream p-6 md:max-w-2xl md:p-8">
						<p class="text-sm uppercase tracking-[0.12em] text-charcoal">Private attendance</p>
						<p class="mt-3 text-sm leading-relaxed text-slate md:text-base">
							Arrange a private meeting with Ramacciotti Yachts during the show and we will prepare the
							right discussion around your timing, guest profile, and itinerary ambitions.
						</p>
						<a
							href="/#home-enquiry"
							class="mt-5 inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold"
						>
							Request an appointment
						</a>
					</div>
				</div>

				<div class="space-y-7">
					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">Location</p>
						<p class="mt-2 text-sm leading-relaxed text-charcoal md:text-base">{data.event.address}</p>
					</div>

					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">Stand</p>
						<p class="mt-2 text-sm leading-relaxed text-charcoal md:text-base">{data.event.stand}</p>
					</div>

					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">Opening times</p>
						<ul class="mt-2 space-y-2 text-sm leading-relaxed text-charcoal md:text-base">
							{#each data.event.openingHours as slot}
								<li>{slot}</li>
							{/each}
						</ul>
					</div>

					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">Contacts</p>
						<a
							href={`mailto:${data.event.contactEmail}`}
							class="mt-2 inline-block text-sm leading-relaxed text-charcoal transition-colors duration-300 hover:text-gold md:text-base"
						>
							{data.event.contactEmail}
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16">
			<img
				src={data.event.image}
				alt={data.event.title}
				class="h-[22rem] w-full rounded-[0.15rem] object-cover md:h-[34rem] lg:h-[44rem]"
				loading="eager"
				decoding="async"
			/>
		</div>
	</div>
</section>

{#if data.related.length}
	<section class="bg-[#f9f7f2] py-16 md:py-20">
		<div class="mx-auto max-w-[96rem] px-6 md:px-12">
			<div class="flex flex-col gap-4 border-b border-charcoal/12 pb-6 md:flex-row md:items-end md:justify-between">
				<div>
					<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">Further calendar</p>
					<h2 class="mt-2 font-display text-3xl leading-none text-charcoal md:text-5xl">More Events</h2>
				</div>
				<a
					href="/#events-home"
					class="text-sm uppercase tracking-[0.1em] text-charcoal transition-colors duration-300 hover:text-gold"
				>
					Back to Events
				</a>
			</div>

			<div class="mt-8 grid gap-6 lg:grid-cols-2">
				{#each data.related as event}
					<a
						href={`/events/${event.slug}`}
						class="group border border-charcoal/12 bg-white p-6 transition-colors duration-300 hover:border-gold/60"
					>
						<p class="text-[0.72rem] uppercase tracking-[0.14em] text-slate/70">
							{event.month} {event.days} {event.year}
						</p>
						<h3 class="mt-4 font-display text-3xl leading-[0.95] text-charcoal transition-colors duration-300 group-hover:text-gold md:text-5xl">
							{event.title}
						</h3>
						<p class="mt-4 text-sm uppercase tracking-[0.1em] text-slate">{event.location}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
