<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let currentTheme = 'light';

	function switchTheme(theme: string) {
		console.log('Changing theme to: ', theme);
		currentTheme = theme;
		window.document?.querySelector('#preview-container')?.setAttribute('data-preview-theme', theme);
	}

	const themes = [
		{
			label: 'Light',
			value: 'light'
		},
		{
			label: 'Dark',
			value: 'dark'
		},
		{
			label: 'Red',
			value: 'red'
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
					{theme.label}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
