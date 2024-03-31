<script lang="ts">
	import {
		calcRequiredExp,
		calcRequiredCandy,
		calcCandyExp,
		calcRequiredDreamShards,
		type ExpTable
	} from '$lib/index';
	import LevelInput from './LevelInput.svelte';
	let currentLevel = 10;
	let targetLevel = 25;
	let expTable: ExpTable = '600';
	let natureMagnification = 1;
	let isBoosted = false;
	let isMiniBoosted = true;
	$: boostDreamShardsRatio = isBoosted ? (isMiniBoosted ? 4 : 6) : 1;
	$: candyExp = calcCandyExp(natureMagnification, isBoosted);
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel, expTable);
	$: requiredDreamShards = calcRequiredDreamShards(
		currentLevel,
		targetLevel,
		expTable,
		candyExp,
		boostDreamShardsRatio
	);
	$: requiredCandy = calcRequiredCandy(requiredExp, candyExp);
</script>

<div class="flex max-w-lg mx-auto justify-around">
	<LevelInput title="現在のレベル" bind:value={currentLevel} />
	<LevelInput title="目標のレベル" bind:value={targetLevel} />
</div>

<div class="mt-8">
	<div class="max-w-sm my-4 flex mx-auto justify-between content-center">
		<div class="h-fit my-auto">
			経験値タイプ <label class="btn btn-circle btn-xs" for="exp_table_modal">?</label>
		</div>

		<input type="checkbox" id="exp_table_modal" class="modal-toggle" />
		<div class="modal" role="dialog">
			<div class="modal-box">
				<div class="py-4">
					<div class="flex">
						<div>600:</div>
						<div class="ml-2">通常</div>
					</div>
					<div class="flex">
						<div>900:</div>
						<div class="ml-2">ヨーギラス系統、ミニリュウ系統</div>
					</div>
					<div class="flex">
						<div>1080:</div>
						<div class="ml-2">ライコウ</div>
					</div>
				</div>
			</div>
			<label class="modal-backdrop" for="exp_table_modal">Close</label>
		</div>

		<div class="join">
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="exp-table"
				aria-label="600"
				checked
				on:change={() => (expTable = '600')}
			/>
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="exp-table"
				aria-label="900"
				on:change={() => (expTable = '900')}
			/>
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="exp-table"
				aria-label="1080"
				on:change={() => (expTable = '1080')}
			/>
		</div>
	</div>

	<div class="max-w-sm my-4 flex mx-auto justify-between content-center">
		<div class="h-fit my-auto">性格による経験値補正</div>
		<div class="join">
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="options"
				aria-label="▼"
				on:change={() => (natureMagnification = 0.82)}
			/>
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="options"
				aria-label="-"
				checked
				on:change={() => (natureMagnification = 1)}
			/>
			<input
				class="join-item btn btn-sm"
				type="radio"
				name="options"
				aria-label="▲"
				on:change={() => (natureMagnification = 1.18)}
			/>
		</div>
	</div>

	<div class="max-w-sm my-4 flex mx-auto justify-between content-center">
		<div class="h-fit my-auto content-center">アメブースト</div>
		<div class="flex">
			{#if isBoosted}
				<div class="text-sm my-auto mr-1">ミニ</div>
			{:else}
				<div class="text-sm my-auto mr-1 text-gray-300">ミニ</div>
			{/if}
			<input
				type="checkbox"
				class="checkbox my-auto mr-3 checkbox-sm checkbox-secondary"
				disabled={!isBoosted}
				bind:checked={isMiniBoosted}
				on:click={() => {
					isMiniBoosted = !isMiniBoosted;
				}}
			/>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={isBoosted}
				on:click={() => {
					isBoosted = !isBoosted;
				}}
			/>
		</div>
	</div>
</div>

<div class="divider" />

<div class="text-center">
	<div class="text-4xl mt-2">
		<img
			src="https://github.com/Kerusu-1984/pokemon-sleep-calc-required-candy/blob/main/static/favicon.png?raw=true"
			alt="アメ"
			class="w-8 h-8 inline-block"
		/>
		{requiredCandy.toLocaleString()} 個
	</div>
	<div class="mt-2">
		<div>
			<span class="text-sm mr-4 text-gray-500">ゆめのかけら</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-3 h-3 text-warning fill-current inline-block"
				viewBox="0 0 512 512"
				><path
					d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
				/></svg
			>
			{requiredDreamShards.toLocaleString()}
		</div>
		<div>
			<span class="text-sm mr-4 text-gray-500">目標のレベルまであと</span>
			<span class="text-xs text-green-500">EXP</span>
			{requiredExp.toLocaleString()}
		</div>
	</div>
</div>

<div class="text-gray-400 px-4 mt-10">
	<ul class="list-disc">
		<li>このシミュレータは非公式のものです。</li>
	</ul>
</div>
