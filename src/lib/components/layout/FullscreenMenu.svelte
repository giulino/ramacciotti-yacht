<script lang="ts">
	import type { NavLink } from '$lib/types';

	interface Props {
		open: boolean;
		navLinks: NavLink[];
		panelId: string;
		onclose: () => void;
	}

	let { open, navLinks, panelId, onclose }: Props = $props();
</script>

<div id={panelId} class="fullscreen-menu {open ? 'is-open' : ''}" aria-hidden={!open}>
	<div class="fullscreen-menu__sheet">
		<div class="fullscreen-menu__top">
			<a href="/" class="fullscreen-menu__logo-link" aria-label="Ramacciotti Yachts home" onclick={onclose}>
				<img
					src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png"
					alt="Ramacciotti Yachts"
					class="fullscreen-menu__logo"
					loading="eager"
					decoding="async"
				/>
			</a>

			<button type="button" class="fullscreen-menu__close" aria-label="Close menu" onclick={onclose}>
				<span class="fullscreen-menu__close-icon" aria-hidden="true"></span>
				<span>Close</span>
			</button>
		</div>

		<nav class="fullscreen-menu__nav" aria-label="Site sections">
			{#each navLinks as link}
				<a href={link.href} class="fullscreen-menu__link" onclick={onclose}>
					<span>{link.label}</span>
					<span class="fullscreen-menu__plus" aria-hidden="true">+</span>
				</a>
			{/each}
		</nav>
	</div>
</div>

<style>
	.fullscreen-menu {
		position: fixed;
		inset: 0;
		z-index: 80;
		pointer-events: none;
	}

	.fullscreen-menu.is-open {
		pointer-events: auto;
	}

	.fullscreen-menu__sheet {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		padding: clamp(0.9rem, 1.8vw, 2rem) var(--overlay-gutter) clamp(2rem, 4vh, 3rem);
		background: #ffffff;
		color: #12163b;
		transform: translateY(-102%);
		transition: transform 720ms cubic-bezier(0.2, 0.88, 0.28, 1);
	}

	.fullscreen-menu.is-open .fullscreen-menu__sheet {
		transform: translateY(0);
	}

	.fullscreen-menu__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fullscreen-menu__logo-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.fullscreen-menu__logo {
		width: clamp(2.8rem, 3.4vw, 3.6rem);
		height: auto;
		filter: brightness(0) saturate(100%) invert(9%) sepia(24%) saturate(1876%) hue-rotate(211deg)
			brightness(92%) contrast(101%);
	}

	.fullscreen-menu__close {
		display: inline-flex;
		align-items: center;
		gap: 0.62rem;
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(18, 22, 59, 0.9);
	}

	.fullscreen-menu__close-icon {
		display: block;
		width: 1.34rem;
		height: 1px;
		background: rgba(18, 22, 59, 0.85);
	}

	.fullscreen-menu__nav {
		width: min(100%, 72rem);
		margin-top: clamp(2.4rem, 5.8vh, 4.4rem);
		margin-inline: auto;
	}

	.fullscreen-menu__link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.2rem;
		font-family: var(--font-display);
		font-size: var(--fullscreen-menu-title);
		font-weight: 400;
		line-height: 0.93;
		letter-spacing: 0.004em;
		color: rgba(18, 22, 59, 0.96);
		transition: transform 260ms ease, opacity 260ms ease;
	}

	.fullscreen-menu__link + .fullscreen-menu__link {
		margin-top: clamp(0.2rem, 0.7vh, 0.5rem);
	}

	.fullscreen-menu__plus {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: clamp(2.05rem, 2.8vw, 2.85rem);
		height: clamp(2.05rem, 2.8vw, 2.85rem);
		border-radius: 999px;
		background: rgba(18, 22, 59, 0.11);
		font-family: var(--font-primary);
		font-size: clamp(1.2rem, 1.8vw, 1.7rem);
		line-height: 1;
	}

	.fullscreen-menu__link:hover,
	.fullscreen-menu__link:focus-visible {
		transform: translateX(0.28rem);
		opacity: 0.88;
	}

	@media (max-width: 1439px) and (min-width: 1024px) {
		.fullscreen-menu__nav {
			width: min(100%, 60rem);
			margin-top: clamp(2rem, 5vh, 3.2rem);
		}

		.fullscreen-menu__plus {
			width: 2.4rem;
			height: 2.4rem;
			font-size: 1.35rem;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.fullscreen-menu__sheet {
			padding-bottom: 2.4rem;
		}

		.fullscreen-menu__nav {
			width: min(100%, 46rem);
			margin-top: 2rem;
		}

		.fullscreen-menu__link {
			gap: 0.95rem;
			line-height: 0.96;
		}

		.fullscreen-menu__plus {
			width: 2.15rem;
			height: 2.15rem;
			font-size: 1.2rem;
		}
	}
</style>
