<!-- Hamburger.svelte -->
<script lang="ts">
	export let open: boolean = false;
</script>

<svelte:head>
	{#if open}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<!-- defines a CSS class `.open` when `open == true` -->
<button class:open on:click={() => (open = !open)}>
	<!-- svg with 3 lines -->
	<svg width="32" height="32">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style lang="scss" global>
	:local(svg) {
		min-height: 24px;
		@apply transition-transform duration-300 ease-in-out;

		line {
			stroke-width: 3;
			@apply stroke-current transition-transform duration-500 ease-in-out text-black dark:text-gray-2;
		}
	}

	/* adjust the Z-index, so that the icon is on top of the sidebar */
	:local(button) {
		@apply z-20;
	}

	:local(.open) {
		svg {
			transform: scale(0.7);
		}
		#top {
			transform: translate(6px, 0px) rotate(45deg);
		}
		#middle {
			@apply transition-opacity ease-in-out duration-300 opacity-0;
		}
		#bottom {
			transform: translate(-12px, 9px) rotate(-45deg);
		}
	}
	/* rotate the top line */
	/* hide the middle */

	/* rotate the bottom line */
</style>
