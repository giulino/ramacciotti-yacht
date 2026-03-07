<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.article.title} | Ramacciotti Journal</title>
	<meta name="description" content={data.article.excerpt} />
</svelte:head>

<article class="bg-cream py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-4xl px-6 md:px-12">
		<p class="text-sm tracking-[0.1em] text-slate">{data.article.category}</p>
		<h1 class="mt-4 text-4xl leading-[1.12] text-charcoal md:text-6xl">{data.article.title}</h1>
		<p class="mt-6 text-sm tracking-[0.08em] text-slate">{data.article.date}</p>
		<img
			src={data.article.image}
			alt={data.article.title}
			class="mt-10 h-[28rem] w-full object-cover"
			loading="eager"
			decoding="async"
		/>
		<div class="mt-10 space-y-6 text-base leading-relaxed text-slate md:text-lg">
			<p>
				{data.article.excerpt}
			</p>
			<p>
				Every voyage is curated around context: season, guest profile, and the atmosphere you want to create.
				Our role is to align these details with precision so the experience feels both effortless and deeply personal.
			</p>
			<p>
				If this chapter resonates with your next itinerary, we will prepare a private consultation and advise the
				right route forward.
			</p>
		</div>
		<a
			href="/journal"
			class="mt-10 inline-block border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-charcoal transition-colors duration-300 hover:text-gold"
		>
			Back to Journal
		</a>
	</div>
</article>

{#if data.related.length}
	<section class="bg-navy py-20 md:py-24">
		<div class="mx-auto max-w-6xl px-6 md:px-12">
			<p class="text-sm tracking-[0.1em] text-cream/70">Related</p>
			<div class="mt-8 grid gap-6 md:grid-cols-2">
				{#each data.related as article}
					<a href={`/journal/${article.slug}`} class="group border border-white/12 bg-white/[0.03] p-6">
						<h2 class="text-3xl text-white">{article.title}</h2>
						<p class="mt-3 text-sm leading-relaxed text-cream/74">{article.excerpt}</p>
						<span class="mt-4 inline-block border-b border-transparent pb-1 text-sm text-cream/78 transition-colors duration-300 group-hover:border-gold/70 group-hover:text-gold">
							Read article
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
