<script lang="ts">
	import { calcRequiredExp, calcRequiredCandy } from '$lib/index';
	const minLevel = 1;
	const maxLevel = 30;
	let currentLevel = 1;
	let targetLevel = 25;
	$: requiredExp = calcRequiredExp(currentLevel, targetLevel);
	$: requiredCandy = calcRequiredCandy(requiredExp);
</script>

<div class="input-level">
	<div>
		<h2>現在のレベル</h2>
		<div class="counter">
			<button
				on:click={() => {
					if (currentLevel > minLevel) currentLevel -= 1;
				}}
			>
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5" />
				</svg>
			</button>
			<p>{currentLevel}</p>
			<button
				on:click={() => {
					if (currentLevel < maxLevel) currentLevel += 1;
				}}
			>
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
				</svg>
			</button>
		</div>
	</div>
	<div>
		<h2>目標レベル</h2>
		<div class="counter">
			<button
				on:click={() => {
					if (targetLevel > minLevel) targetLevel -= 1;
				}}
			>
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5" />
				</svg>
			</button>
			<p>{targetLevel}</p>
			<button
				on:click={() => {
					if (targetLevel < maxLevel) targetLevel += 1;
				}}
			>
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
				</svg>
			</button>
		</div>
	</div>
</div>
<div class="calc-result">
	<div>必要経験値: {requiredExp.toLocaleString()}</div>
	<div>アメの数: {requiredCandy} 個</div>
</div>
<div>
	<h2>注意:</h2>
	<ul>
		<li>このシミュレータは非公式のものです。</li>
		<li>性格による獲得経験値補正には対応していません。</li>
		<li>一部の経験値テーブルが異なるポケモンには対応していません。</li>
	</ul>
</div>

<style>
	.input-level {
		display: flex;
		justify-content: space-evenly;
	}

	.input-level h2 {
		text-align: center;
	}

	.counter {
		display: flex;
		margin: 1rem 0;
	}

	.counter p {
		font-weight: bold;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 4rem;
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.calc-result {
		padding: 1rem 0;
	}
</style>
