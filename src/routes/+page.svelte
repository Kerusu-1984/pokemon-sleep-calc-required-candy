<script lang="ts">
	import { calcRequiredExp, calcRequiredCandy, type ExpTable } from '$lib/index';
	import LevelInput from './LevelInput.svelte';
	let currentLevel = 10;
	let targetLevel = 25;
	let expTable: ExpTable = '600';
	let candyBaseExp = 25;
	let isBoosted = false;
	$: candyExp = isBoosted ? candyBaseExp * 2 : candyBaseExp;
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel, expTable);
	$: requiredCandy = calcRequiredCandy(requiredExp, candyExp);
</script>

<div class="flex max-w-lg mx-auto justify-around">
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
			aria-label="▼"
			on:change={() => (candyBaseExp = 21)}
		/>
		<input
			class="join-item btn btn-sm"
			type="radio"
			name="options"
			aria-label="-"
			checked
			on:change={() => (candyBaseExp = 25)}
		/>
		<input
		class="join-item btn btn-sm"
		type="radio"
		name="options"
		aria-label="▲"
		on:change={() => (candyBaseExp = 30)}
	/>
	</div>
</div>

<div class="max-w-sm my-4 flex mx-auto justify-between content-center">
	<div class="h-fit my-auto">アメブースト※</div>
	<div class="join">
		<input
			class="join-item btn btn-sm"
			type="radio"
			name="boost"
			aria-label="OFF"
			checked
			on:change={() => (isBoosted = false)}
		/>
		<input
			class="join-item btn btn-sm"
			type="radio"
			name="boost"
			aria-label="ON"
			on:change={() => (isBoosted = true)}
		/>
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
		{requiredCandy} 個
	</div>
	<div>
		<span class="text-sm mr-4 text-gray-500">目標のレベルまであと</span>
		<span class="text-xs text-green-500">EXP</span>
		{requiredExp.toLocaleString()}
	</div>
</div>

<div class="text-gray-400 px-4 mt-10">
	<ul class="list-disc">
		<li>このシミュレータは非公式のものです。</li>
		<li>
			アメブーストは2023年12月18日~12月25日に実装される予定の機能です。シミュレーションと実際の機能が異なる可能性があります。
		</li>
	</ul>
</div>
