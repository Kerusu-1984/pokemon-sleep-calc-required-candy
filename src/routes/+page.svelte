<script lang="ts">
	import { calcRequiredExp, calcRequiredCandy } from '$lib/index';
	import LevelInput from './LevelInput.svelte';
	const minLevel = 1;
	const maxLevel = 30;
	let currentLevel = 1;
	let targetLevel = 25;
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel);
	$: requiredCandy = calcRequiredCandy(requiredExp);
</script>

<div class="flex justify-evenly">
	<LevelInput title="現在のレベル" bind:value={currentLevel} />
	<LevelInput title="目標のレベル" bind:value={targetLevel} />
</div>
<div class="text-center">
	<div>
		<span class="text-sm mr-4 text-gray-500">目標のレベルまであと</span>
		<span class="text-xs text-green-500">EXP</span>
		{requiredExp.toLocaleString()}
	</div>
	<div class="text-4xl mt-4">
		<img src="/favicon.png" alt="アメ" class="w-8 h-8 inline-block" />
		{requiredCandy} 個
	</div>
</div>
<div class="divider" />
<div class="text-gray-400">
	<ul class="list-disc">
		<li>このシミュレータは非公式のものです。</li>
		<li>性格による獲得経験値補正には対応していません。</li>
		<li>一部の経験値テーブルが異なるポケモンには対応していません。</li>
	</ul>
</div>
