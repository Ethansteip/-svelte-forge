<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import ColourSwatch from './components/ColourSwatch.svelte';

	let currentTheme = 'light';

	function switchTheme(theme: string) {
		console.log('Changing theme to: ', theme);
		currentTheme = theme;
		window.document?.querySelector('#preview-container')?.setAttribute('data-theme', theme);
	}

	const themes = [
		{
			label: 'Light',
			value: 'light',
			colourValues: ['#5E81AC', '#81A1C1', '#88C0D0', '#4C566A', '#BF616A']
		},
		{
			label: 'Dark',
			value: 'dark',
			colourValues: ['#5E81AC', '#81A1C1', '#88C0D0', '#4C566A', '#BF616A']
		},
		{
			label: 'Dracula',
			value: 'dracula',
			colourValues: ['#ff79c6', '#bd93f9', '#ffb86c', '#414558', '#282a36']
		},
		{
			label: 'Cupcake',
			value: 'cupcake',
			colourValues: ['#65c3c8', '#ef9fbc', '#eeaf3a', '#291334', '#faf7f5']
		},
		{
			label: 'Emerald',
			value: 'emerald',
			colourValues: ['#66cc8a', '#223D30', '#377cfb', '#f68067', '#333c4d']
		},
		{
			label: 'Night',
			value: 'night',
			colourValues: ['#38bdf8', '#818CF8', '#F471B5', '#1E293B', '#0F172A']
		},
		{
			label: 'Nord',
			value: 'nord',
			colourValues: ['#5E81AC', '#81A1C1', '#88C0D0', '#4C566A', '#BF616A']
		}
	];
</script>

<div>
	<Label for="theme-selector">Theme</Label>
	<Select.Root>
		<Select.Trigger bind:value={currentTheme} id="theme-selector">
			<Select.Value placeholder="Choose Theme" />
		</Select.Trigger>
		<Select.Content>
			{#each themes as theme}
				<Select.Item
					on:click={() => switchTheme(theme.value)}
					value={theme.value}
					label={theme.label}
				>
					<div class="flex w-full flex-row items-center justify-between">
						{theme.label}
						<ColourSwatch colours={theme.colourValues} />
					</div>
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
