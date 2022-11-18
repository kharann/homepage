<!-- Hamburger.svelte -->
<script lang="ts">
	export let open: boolean = false
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
<button class:open class="z-20" on:click={() => (open = !open)} aria-label="Hamburger">
	<!-- svg with 3 lines -->
	<svg width="32" height="32" class="min-h-[24px] transition-transform duration-300 ease-out text-brown-11">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	line {
		stroke-width: 3;
		stroke: currentColor;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4,0,0.2,1);
		transition-duration: 300ms;
	}
	.open > svg {
		transform: scale(0.7);
	}
	.open > svg >  #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open > svg > #middle {
		opacity: 0;
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4,0,0.2,1);
		transition-duration: 300ms;
	}
	.open > svg > #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
		
</style>
