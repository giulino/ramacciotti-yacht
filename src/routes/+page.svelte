<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import HomeStickyPanel from '$lib/components/layout/HomeStickyPanel.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import HomeAboutSection from '$lib/components/sections/HomeAboutSection.svelte';
	import HomeDestinationsSection from '$lib/components/sections/HomeDestinationsSection.svelte';
	import HomeFleetSection from '$lib/components/sections/HomeFleetSection.svelte';
	import HomeClubSection from '$lib/components/sections/HomeClubSection.svelte';
	import HomeCorporateSection from '$lib/components/sections/HomeCorporateSection.svelte';
	import HomeJournalSection from '$lib/components/sections/HomeJournalSection.svelte';
	import ContactCTA from '$lib/components/sections/ContactCTA.svelte';
	import HomeEventsSection from '$lib/components/sections/HomeEventsSection.svelte';
</script>

<svelte:head>
	<title>Ramacciotti Yachts | Home</title>
</svelte:head>

<HomeStickyPanel />
<Hero />
<HomeAboutSection />
<HomeFleetSection />
<HomeDestinationsSection />
<HomeClubSection />
<HomeCorporateSection />
<HomeJournalSection />
<HomeEventsSection />
<ContactCTA />
<Footer />
