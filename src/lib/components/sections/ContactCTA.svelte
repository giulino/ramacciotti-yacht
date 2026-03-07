<script lang="ts">
	import ConsultationForm from '$lib/components/forms/ConsultationForm.svelte';
</script>

<section id="home-enquiry" class="home-enquiry">
	<div class="home-enquiry-shell">
		<div class="home-enquiry-copy">
			<p class="home-enquiry-kicker">Private Consultation</p>
			<h2>Begin your journey with a conversation shaped around you.</h2>
			<p class="home-enquiry-intro">
				Share your timing, preferred destinations, and the atmosphere you want to create onboard. We reply
				personally with discretion, clarity, and a considered next step.
			</p>

			<div class="home-enquiry-details" aria-label="Consultation details">
				<p>Founder-led advisory</p>
				<p>Mediterranean and Caribbean itineraries</p>
				<p>Response within 24 hours</p>
			</div>
		</div>

		<div class="home-enquiry-form-wrap">
			<ConsultationForm
				context="Home"
				title="Request a private proposal"
				subtitle="Tell us where you want to go and how you want it to feel. We will come back with a considered response."
				variant="soft"
			/>
		</div>
	</div>
</section>

<style>
	.home-enquiry {
		position: relative;
		overflow: hidden;
		background: #ffffff;
		color: #12163b;
	}

	.home-enquiry::before {
		content: '';
		position: absolute;
		inset: 0;
		background: none;
		pointer-events: none;
	}

	.home-enquiry-shell {
		position: relative;
		z-index: 1;
		max-width: 84rem;
		margin: 0 auto;
		padding: clamp(3.5rem, 8vh, 6.5rem) clamp(1rem, 3vw, 2.8rem);
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(20rem, 1.1fr);
		gap: clamp(1.5rem, 4vw, 4rem);
		align-items: start;
	}

	.home-enquiry-copy {
		padding-top: clamp(0.4rem, 1vh, 1rem);
	}

	.home-enquiry-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.9vw, 0.88rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.62);
	}

	.home-enquiry h2 {
		margin: 0.7rem 0 0;
		max-width: 34rem;
		font-family: var(--font-display);
		font-size: clamp(2.2rem, 5vw, 5rem);
		line-height: 0.95;
		letter-spacing: 0.01em;
		color: #12163b;
	}

	.home-enquiry-intro {
		margin: 1.2rem 0 0;
		max-width: 34rem;
		font-family: var(--font-primary);
		font-size: clamp(0.98rem, 1.18vw, 1.12rem);
		line-height: 1.78;
		letter-spacing: 0.008em;
		color: rgba(18, 22, 59, 0.82);
	}

	.home-enquiry-details {
		margin-top: 1.6rem;
		display: grid;
		gap: 0.72rem;
	}

	.home-enquiry-details p {
		margin: 0;
		padding-left: 1.2rem;
		position: relative;
		font-family: var(--font-primary);
		font-size: 0.84rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.68);
	}

	.home-enquiry-details p::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.45rem;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: rgba(186, 154, 102, 0.92);
		box-shadow: 0 0 0 0.3rem rgba(186, 154, 102, 0.12);
	}

	.home-enquiry-form-wrap :global(.mx-auto) {
		margin: 0;
		max-width: none;
	}

	.home-enquiry-form-wrap :global(div) {
		box-shadow: none;
	}

	.home-enquiry-form-wrap :global(form) {
		text-align: left;
	}

	@media (max-width: 980px) {
		.home-enquiry-shell {
			grid-template-columns: 1fr;
		}
	}
</style>
