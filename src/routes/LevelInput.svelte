<script lang="ts">
	const MAX_LEVEL = 50;
	const MIN_LEVEL = 1;
	export let value: number;
	export let title: string;
</script>

<div class="max-w-sm">
	<div class="text-center">{title}</div>
	<div class="flex my-4 justify-center">
		<button
			class="btn btn-sm md:btn-md"
			on:click={() => {
				if (value > MIN_LEVEL) value -= 1;
			}}
		>
			<svg class="w-3 h-3" aria-hidden="true" viewBox="0 0 1 1" fill="none">
				<path d="M0,0.5 L1,0.5" />
			</svg>
		</button>
		{#if title === '目標のレベル'}
			<p class="mx-4 md:mx-8 md:text-lg my-auto w-6 md:w-8 text-center text-blue-500">{value}</p>
		{:else}
			<p class="mx-4 md:mx-8 md:text-lg my-auto w-6 md:w-8 text-center">{value}</p>
		{/if}
		<button
			class="btn btn-sm md:btn-md"
			on:click={() => {
				if (value < MAX_LEVEL) value += 1;
			}}
		>
			<svg class="w-3 h-3" aria-hidden="true" viewBox="0 0 1 1" fill="none">
				<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
			</svg>
		</button>
	</div>
	<input type="range" min={MIN_LEVEL} max={MAX_LEVEL} bind:value={value} class="range range-primary range-xs" />
</div>

<style>
	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: currentColor;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		touch-action: manipulation;
	}
</style>
