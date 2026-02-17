<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Ramacciotti Yachts</title>
	<meta name="description" content="Luxury yacht charter, management, and sales." />
</svelte:head>

<Navigation />

<main>
	{@render children()}
</main>

<Footer />
