<section id="club" class="home-club">
	<a href="/" class="club-corner-logo" aria-label="Ramacciotti Yachts home">
		<img
			src="/LOGO/RAMACCIOTTI_BLU_CLUB.png"
			alt="Ramacciotti Club logo"
			loading="lazy"
			decoding="async"
		/>
	</a>

	<section class="club-intro">
		<p class="club-intro-kicker">Ramacciotti Club</p>
		<h3>Belonging begins when the voyage ends.</h3>
		<p>
			Ramacciotti Club is the natural continuation of our voyages — a private circle reserved for those who
			have experienced the care of sailing with us. It’s not a membership in the traditional sense, but a way of
			belonging. A connection that extends beyond the sea, defined by shared elegance, trust, and the quiet
			privileges of returning home to something familiar.
		</p>
	</section>

	<section class="club-feature">
		<div class="club-feature-media">
			<img
				src="/images/club/club-table-setting.jpg"
				alt="Ramacciotti Club table setting"
				class="club-feature-image"
				loading="lazy"
				decoding="async"
			/>
		</div>
		<div class="club-feature-content">
			<p class="club-feature-kicker">The Club</p>
			<p>
				For our returning guests, the Founders’ Circle represents continuity. It offers access to private
				gatherings, early voyage previews, and collaborations with select partners in hospitality and lifestyle.
				Each journey deepens the connection — every return feels like being welcomed back into something
				personal.
			</p>
			<a href="/club" class="club-feature-cta">Enquire about the Founders’ Circle</a>
		</div>
	</section>

	<p class="club-membership-note">
		Membership is by invitation or through chartering with Ramacciotti Yachts.
	</p>
</section>

<style>
	.home-club {
		position: relative;
		background: #f8f6f1;
		color: #101833;
		scroll-snap-align: start;
	}

	.club-corner-logo {
		position: absolute;
		top: clamp(1.15rem, 3vh, 2rem);
		left: clamp(1rem, 2.2vw, 2.3rem);
		z-index: 3;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: clamp(15rem, 12vw, 10rem);
	}

	.club-corner-logo img {
		width: 100%;
		height: auto;
	}

	.club-intro {
		max-width: 68rem;
		margin: 0 auto;
		padding: clamp(1rem, 2.8vh, 2rem) clamp(1rem, 3.2vw, 2.8rem) clamp(2.4rem, 6vh, 5.2rem);
		text-align: center;
	}

	.club-intro-kicker {
		margin: 0;
		font-family: var(--font-primary);
		font-size: clamp(0.74rem, 0.92vw, 0.88rem);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(16, 24, 51, 0.68);
	}

	.club-intro h3 {
		margin: 0.62rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.96;
		letter-spacing: 0.003em;
		color: #12163b;
	}

	.club-intro p {
		margin: 1.4rem auto 0;
		max-width: 56rem;
		font-family: var(--font-primary);
		font-size: clamp(1rem, 1.25vw, 1.2rem);
		line-height: 1.74;
		letter-spacing: 0.008em;
		color: rgba(16, 24, 51, 0.9);
	}

	.club-feature {
		display: grid;
		grid-template-columns: minmax(18rem, 1fr) minmax(20rem, 1fr);
		gap: clamp(1.2rem, 3vw, 2.8rem);
		align-items: stretch;
		padding: 0 clamp(1rem, 3vw, 2.8rem) clamp(2rem, 6vh, 4.6rem);
	}

	.club-feature-media {
		position: relative;
		min-height: clamp(27rem, 63vh, 43rem);
		overflow: hidden;
		border-radius: 0.25rem;
	}

	.club-feature-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.club-feature-content {
		background: #ffffff;
		border: 1px solid rgba(18, 22, 59, 0.1);
		padding: clamp(1.4rem, 2.8vw, 2.6rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.club-feature-kicker {
		margin: 0;
		font-family: var(--font-display);
		font-size: clamp(1.7rem, 3.3vw, 3rem);
		line-height: 0.98;
		color: #12163b;
	}

	.club-feature-content p:not(.club-feature-kicker) {
		margin: 1.05rem 0 0;
		font-family: var(--font-primary);
		font-size: clamp(0.96rem, 1.12vw, 1.06rem);
		line-height: 1.7;
		letter-spacing: 0.009em;
		color: rgba(16, 24, 51, 0.88);
	}

	.club-feature-cta {
		margin-top: 1.35rem;
		align-self: flex-start;
		border-bottom: 1px solid rgba(18, 22, 59, 0.52);
		padding-bottom: 0.2rem;
		font-family: var(--font-primary);
		font-size: 0.85rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: #12163b;
		transition: border-color 220ms ease, color 220ms ease;
	}

	.club-feature-cta:hover {
		border-color: rgba(186, 154, 102, 0.8);
		color: rgba(186, 154, 102, 0.92);
	}

	.club-membership-note {
		margin: 0;
		padding: 0 1rem clamp(1rem, 2.8vh, 1.8rem);
		transform: translateY(clamp(-1rem, -2vh, -0.6rem));
		text-align: center;
		font-family: var(--font-primary);
		font-size: clamp(0.86rem, 1vw, 0.96rem);
		letter-spacing: 0.01em;
		color: rgba(16, 24, 51, 0.72);
	}

	@media (max-width: 980px) {
		.club-feature {
			grid-template-columns: 1fr;
		}

		.club-feature-image {
			min-height: 0;
		}

		.club-feature-media {
			min-height: 64vh;
		}
	}
</style>
