<script lang="ts">
	import { calcRequiredExp, calcRequiredCandy, type ExpTable } from '$lib/index';
	import LevelInput from './LevelInput.svelte';
	const minLevel = 1;
	const maxLevel = 30;
	let currentLevel = 1;
	let targetLevel = 25;
	let expTable: ExpTable = '600';
	let candyExp = 25;
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel, expTable);
	$: requiredCandy = calcRequiredCandy(requiredExp, candyExp);
</script>

<div class="flex max-w-md mx-auto justify-between">
	<LevelInput title="現在のレベル" bind:value={currentLevel} />
	<LevelInput title="目標のレベル" bind:value={targetLevel} />
</div>

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
			aria-label="▲"
			on:change={() => (candyExp = 30)}
		/>
		<input
			class="join-item btn btn-sm"
			type="radio"
			name="options"
			aria-label="-"
			checked
			on:change={() => (candyExp = 25)}
		/>
		<input
			class="join-item btn btn-sm"
			type="radio"
			name="options"
			aria-label="▼"
			on:change={() => (candyExp = 21)}
		/>
	</div>
</div>

<div class="text-center">
	<div class="text-4xl mt-10">
		<img
			src="https://github.com/Kerusu-1984/pokemon-sleep-calc-required-candy/blob/main/static/favicon.png?raw=true"
			alt="アメ"
			class="w-8 h-8 inline-block"
		/>
		{requiredCandy} 個
	</div>
	<div>
		<span class="text-sm mr-4 text-gray-500">目標のレベルまであと</span>
		<span class="text-xs text-green-500">EXP</span>
		{requiredExp.toLocaleString()}
	</div>
</div>
<div class="divider" />

<div class="text-gray-400 px-4">
	<ul class="list-disc">
		<li>このシミュレータは非公式のものです。</li>
	</ul>
</div>
