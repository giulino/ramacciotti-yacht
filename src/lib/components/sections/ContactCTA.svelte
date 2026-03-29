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
				variant="light"
			/>
		</div>
	</div>
</section>

<style>
	.home-enquiry {
		position: relative;
		overflow: hidden;
		background: #f9f7f2;
		color: #12163b;
	}

	.home-enquiry::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(1100px 520px at 0% -6%, rgba(255, 255, 255, 0.55), transparent 58%),
			radial-gradient(840px 420px at 100% 105%, rgba(186, 154, 102, 0.08), transparent 62%);
		pointer-events: none;
	}

	.home-enquiry-shell {
		position: relative;
		z-index: 1;
		max-width: min(var(--section-max), 84rem);
		margin: 0 auto;
		padding: clamp(3.5rem, 8vh, 6.5rem) var(--page-gutter);
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
		font-size: clamp(2.2rem, 5vw, 4.6rem);
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

	@media (max-width: 1439px) and (min-width: 1024px) {
		.home-enquiry-shell {
			padding-top: 4.2rem;
			padding-bottom: 4.3rem;
			gap: 2.2rem;
			grid-template-columns: minmax(0, 0.92fr) minmax(21rem, 1.08fr);
		}

		.home-enquiry h2 {
			max-width: 30rem;
			font-size: clamp(2rem, 4vw, 3.6rem);
		}

		.home-enquiry-intro {
			max-width: 30rem;
			font-size: 1rem;
			line-height: 1.68;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.home-enquiry-shell {
			grid-template-columns: 1fr;
			padding-top: 3.6rem;
			padding-bottom: 3.6rem;
			gap: 1.8rem;
		}

		.home-enquiry-copy {
			padding-top: 0;
		}

		.home-enquiry h2,
		.home-enquiry-intro {
			max-width: 100%;
		}

		.home-enquiry h2 {
			font-size: clamp(1.95rem, 4.6vw, 3rem);
		}

		.home-enquiry-intro {
			font-size: 0.98rem;
			line-height: 1.64;
		}
	}

	@media (max-width: 767px) {
		.home-enquiry-shell {
			grid-template-columns: 1fr;
			padding-top: 2.8rem;
			padding-bottom: 3rem;
			gap: 1.6rem;
		}

		.home-enquiry-copy {
			padding-top: 0;
		}

		.home-enquiry h2,
		.home-enquiry-intro {
			max-width: 100%;
		}

		.home-enquiry h2 {
			font-size: clamp(1.85rem, 9vw, 2.9rem);
			line-height: 0.98;
		}

		.home-enquiry-intro {
			margin-top: 1rem;
			font-size: 0.96rem;
			line-height: 1.62;
		}

		.home-enquiry-details {
			margin-top: 1.3rem;
			gap: 0.58rem;
		}

		.home-enquiry-details p {
			font-size: 0.78rem;
			line-height: 1.5;
		}
	}
</style>
