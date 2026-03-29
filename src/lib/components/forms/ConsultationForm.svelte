<script lang="ts">
	interface Props {
		context: 'Home' | 'Fleet' | 'Club' | 'Corporate';
		title?: string;
		subtitle?: string;
		variant?: 'dark' | 'light' | 'soft';
	}

	let {
		context,
		title = 'Begin your journey',
		subtitle = 'All journeys begin with a private consultation.',
		variant = 'dark'
	}: Props = $props();

	const phonePrefixes = [
		'+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+39', '+41', '+43', '+44',
		'+45', '+46', '+47', '+48', '+49', '+52', '+55', '+60', '+61', '+62', '+64', '+65', '+66',
		'+81', '+82', '+86', '+90', '+91', '+94', '+95', '+212', '+213', '+216', '+218', '+230',
		'+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371',
		'+372', '+380', '+385', '+386', '+420', '+421', '+852', '+853', '+886', '+971'
	];

	let loading = $state(false);
	let submitted = $state(false);
	let error = $state('');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		error = '';
		loading = true;

		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		if ((data.get('website') as string)?.trim()) {
			loading = false;
			return;
		}

		const response = await fetch('/api/inquiries', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				context,
				name: data.get('name'),
				email: data.get('email'),
				phonePrefix: data.get('phonePrefix'),
				phone: data.get('phone'),
				message: data.get('message'),
				consent: data.get('consent') === 'on',
				consentVersion: '2026-02',
				website: data.get('website')
			})
		});

		loading = false;

		if (!response.ok) {
			const body = (await response.json().catch(() => null)) as { error?: string } | null;
			error = body?.error ?? 'Unable to submit at the moment.';
			return;
		}

		form.reset();
		submitted = true;
	}
</script>

<div
	class="mx-auto mt-10 w-full max-w-2xl p-5 sm:mt-12 sm:p-6 md:mt-14 md:p-8 {variant === 'dark'
		? 'border border-white/15 bg-white/5'
		: variant === 'soft'
			? 'border border-charcoal/12 bg-cream'
			: 'border border-charcoal/12 bg-white/55'}"
>
	<p class="text-sm tracking-[0.1em] {variant === 'dark' ? 'text-cream/70' : 'text-slate'}">
		{context} consultation
	</p>
	<h3 class="mt-3 text-2xl leading-tight sm:text-3xl md:text-4xl {variant === 'dark' ? 'text-white' : 'text-charcoal'}">{title}</h3>
	<p
		class="mt-3 text-sm leading-relaxed sm:mt-4 md:text-base {variant === 'dark'
			? 'text-cream/75'
			: 'text-slate'}"
	>
		{subtitle}
	</p>

	<form class="mt-6 grid gap-4 sm:mt-8" onsubmit={handleSubmit} novalidate>
		<input type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
			<input
				type="text"
				name="name"
				placeholder="Name"
				required
				class="w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none {variant === 'dark'
					? 'border border-white/20 bg-white/6 text-white placeholder:text-cream/45'
					: variant === 'soft'
						? 'border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60'
						: 'border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60'}"
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				required
				class="w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none {variant === 'dark'
					? 'border border-white/20 bg-white/6 text-white placeholder:text-cream/45'
					: variant === 'soft'
						? 'border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60'
						: 'border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60'}"
			/>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-[7rem_minmax(0,1fr)]">
				<select
					name="phonePrefix"
					required
					aria-label="Phone prefix"
					class="w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none {variant === 'dark'
						? 'border border-white/20 bg-white/6 text-white'
						: variant === 'soft'
							? 'border border-charcoal/16 bg-white text-charcoal'
							: 'border border-charcoal/20 bg-white text-charcoal'}"
				>
					<option value="" disabled selected>Prefix</option>
					{#each phonePrefixes as prefix}
						<option value={prefix}>{prefix}</option>
					{/each}
				</select>
				<input
					type="tel"
					name="phone"
					placeholder="Phone number"
					required
					inputmode="tel"
					autocomplete="tel-national"
					class="w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none {variant === 'dark'
						? 'border border-white/20 bg-white/6 text-white placeholder:text-cream/45'
						: variant === 'soft'
							? 'border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60'
							: 'border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60'}"
				/>
			</div>
			<textarea
				name="message"
				rows="4"
				placeholder="Message"
				required
				class="w-full px-4 py-3 text-sm focus:border-gold/60 focus:outline-none {variant === 'dark'
					? 'border border-white/20 bg-white/6 text-white placeholder:text-cream/45'
					: variant === 'soft'
						? 'border border-charcoal/16 bg-white text-charcoal placeholder:text-slate/60'
						: 'border border-charcoal/20 bg-white text-charcoal placeholder:text-slate/60'}"
			></textarea>

			<label class="flex items-start gap-3 text-sm {variant === 'dark' ? 'text-cream/72' : 'text-slate'}">
				<input type="checkbox" name="consent" class="mt-1 h-4 w-4 border-white/30 accent-gold" required />
				<span>
					I consent to be contacted by Ramacciotti Yachts for consultation purposes and understand my data is
				processed in accordance with GDPR.
			</span>
		</label>

			<button
				type="submit"
				disabled={loading}
				class="mt-2 inline-block w-fit border-b border-gold/60 pb-1 text-sm tracking-[0.08em] text-gold transition-colors duration-300 hover:text-gold-light disabled:opacity-50"
			>
				{loading ? 'Sending...' : 'Begin your journey'}
			</button>
	</form>

	{#if error}
		<p class="mt-4 text-sm text-red-300">{error}</p>
	{/if}
	{#if submitted}
		<p class="mt-4 text-sm {variant === 'dark' ? 'text-cream/72' : 'text-slate'}">
			Thank you. We reply personally within 24 hours.
		</p>
	{/if}
</div>
