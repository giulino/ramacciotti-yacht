<script lang="ts">
	import { journalArticles, type JournalCategory } from '$lib/data/journal';

	const categories: JournalCategory[] = ['Voyages', "Founder's Notes", 'Partners', 'News'];

	let newsletterState = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let newsletterError = $state('');

	async function subscribe(event: SubmitEvent) {
		event.preventDefault();
		newsletterState = 'loading';
		newsletterError = '';

		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		const response = await fetch('/api/newsletter', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				email: data.get('email'),
				consent: data.get('consent') === 'on',
				source: 'journal'
			})
		});

		if (!response.ok) {
			const body = (await response.json().catch(() => null)) as { error?: string } | null;
			newsletterState = 'error';
			newsletterError = body?.error ?? 'Unable to subscribe right now.';
			return;
		}

		form.reset();
		newsletterState = 'success';
	}
</script>

<svelte:head>
	<title>Ramacciotti Yachts | Journal</title>
	<meta
		name="description"
		content="Journal notes from Ramacciotti Yachts: voyages, founder reflections, partners, and seasonal updates."
	/>
</svelte:head>

<section class="bg-cream py-28 md:py-36 lg:py-44">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-slate">Journal</p>
		<h1 class="mt-5 max-w-4xl text-4xl leading-[1.12] text-charcoal md:text-6xl">
			Stories and reflections from the world of Ramacciotti Yachts.
		</h1>

		{#each categories as category}
			<div class="mt-16">
				<h2 class="text-2xl text-charcoal md:text-3xl">{category}</h2>
				<div class="mt-8 grid gap-8 md:grid-cols-2">
					{#each journalArticles.filter((article) => article.category === category) as article}
						<a
							href={`/journal/${article.slug}`}
							class="group overflow-hidden border border-charcoal/12 bg-white/55"
						>
							<div class="overflow-hidden">
								<img
									src={article.image}
									alt={article.title}
									class="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div class="p-7">
								<p class="text-sm tracking-[0.08em] text-slate">{article.date}</p>
								<h3 class="mt-3 text-3xl leading-tight text-charcoal">{article.title}</h3>
								<p class="mt-4 text-sm leading-relaxed text-slate md:text-base">{article.excerpt}</p>
								<span class="mt-5 inline-block border-b border-transparent pb-1 text-sm text-charcoal transition-colors duration-300 group-hover:border-gold/70 group-hover:text-gold">
									Continue reading
								</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="bg-navy py-24 md:py-28">
	<div class="mx-auto max-w-3xl px-6 md:px-12">
		<p class="text-sm tracking-[0.12em] text-cream/70">Newsletter</p>
		<h2 class="mt-4 text-4xl text-white md:text-5xl">Subscribe to The Founder’s Dispatch</h2>
		<p class="mt-5 text-sm leading-relaxed text-cream/75 md:text-base">
			Mailchimp integration-ready. Subscribe for new journal notes and seasonal voyage reflections.
		</p>
		<form class="mt-8 grid gap-4" onsubmit={subscribe}>
			<input
				type="email"
				name="email"
				placeholder="Email"
				required
				class="w-full border border-white/20 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-cream/45 focus:border-gold/60 focus:outline-none"
			/>
			<label class="flex items-start gap-3 text-sm text-cream/72">
				<input type="checkbox" name="consent" required class="mt-1 h-4 w-4 accent-gold" />
				<span>I consent to receiving Journal updates and can unsubscribe at any time.</span>
			</label>
			<button
				type="submit"
				disabled={newsletterState === 'loading'}
				class="inline-block w-fit border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light disabled:opacity-60"
			>
				{newsletterState === 'loading' ? 'Subscribing...' : 'Subscribe'}
			</button>
		</form>
		{#if newsletterState === 'success'}
			<p class="mt-4 text-sm text-cream/72">Subscription received.</p>
		{/if}
		{#if newsletterState === 'error'}
			<p class="mt-4 text-sm text-red-300">{newsletterError}</p>
		{/if}
	</div>
</section>
