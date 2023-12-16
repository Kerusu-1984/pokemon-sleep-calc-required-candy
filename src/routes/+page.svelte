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
	$: candyExp = calcCandyExp(natureMagnification, isBoosted);
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel, expTable);
	$: requiredDreamShards = calcRequiredDreamShards(
		currentLevel,
		targetLevel,
		expTable,
		candyExp,
		isBoosted
	);
	$: requiredCandy = calcRequiredCandy(requiredExp, candyExp);
</script>

<div class="flex max-w-lg mx-auto justify-around">
	<LevelInput title="現在のレベル" bind:value={currentLevel} />
	<LevelInput title="目標のレベル" bind:value={targetLevel} />
</div>

<div class="mt-8">
	<div class="max-w-sm my-4 flex mx-auto justify-between content-center">
		<div class="h-fit my-auto">経験値タイプ</div>
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
		<div class="h-fit my-auto">
			アメブースト
			<label class="btn btn-circle btn-xs" for="candy_boost_modal">?</label>
		</div>
		<input
			type="checkbox"
			class="toggle toggle-primary"
			bind:checked={isBoosted}
			on:click={() => {
				isBoosted = !isBoosted;
			}}
		/>
	</div>

	<input type="checkbox" id="candy_boost_modal" class="modal-toggle" />
	<div class="modal" role="dialog">
		<div class="modal-box">
			<p class="py-4">
				アメブーストは2023年12月18日~12月25日に実装される予定の機能です。シミュレーションと実際の機能が異なる可能性があります。
			</p>
		</div>
		<label class="modal-backdrop" for="candy_boost_modal">Close</label>
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
