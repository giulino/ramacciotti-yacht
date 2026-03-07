<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';
	import EditorialTopNav from '$lib/components/layout/EditorialTopNav.svelte';
</script>

<svelte:head>
	<title>Ramacciotti Yachts | The Club</title>
</svelte:head>

<section class="relative bg-white pt-28 pb-28 md:pt-36 md:pb-36 lg:pt-44 lg:pb-44">
	<EditorialTopNav />
	<div class="mx-auto max-w-6xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">The Club</p>
		<h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-charcoal md:text-6xl">
			Belonging begins when the voyage ends.
		</h1>
		<p class="mt-10 max-w-3xl text-base leading-relaxed text-slate md:text-lg">
			The Ramacciotti Club is a private circle for returning guests. It offers continuity: priority access,
			selected gatherings, and a founder relationship that extends beyond a single itinerary.
		</p>

		<div class="mt-12 border border-charcoal/12 bg-cream p-6 md:p-8">
			<p class="text-sm tracking-[0.09em] text-charcoal">Corporate Circle connection</p>
			<p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate md:text-base">
				For executive teams and client hosting, members can continue into the Corporate Circle with tailored
				planning under the same discreet standards.
			</p>
			<a
				href="/corporate"
				class="mt-5 inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold"
			>
				Discover Corporate Circle
			</a>
		</div>

		<ConsultationForm
			context="Club"
			title="Discover the Club"
			subtitle="Share your preferred season and we will introduce the right path into the Club."
			variant="soft"
		/>
	</div>
</section>
