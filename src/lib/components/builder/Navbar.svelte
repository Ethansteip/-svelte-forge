<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { ChevronLeft, Smartphone, Tablet, Monitor, Ellipsis, MonitorPlay } from 'lucide-svelte';
	import { togglePreviewSize } from '$lib/stores/togglePreviewSize';
</script>

<nav class="flex h-16 w-full items-center justify-between border-b px-4">
	<div class="flex w-1/3 items-center justify-start gap-x-4">
		<Button href="/" size="icon" variant="outline"><ChevronLeft class="text-primary" /></Button>
		<h3 class="font-lg font-semibold">Svelte-Forge</h3>
	</div>
	<div class="items center flex w-1/3 justify-center">
		<ToggleGroup.Root type="single" bind:value={$togglePreviewSize}>
			<ToggleGroup.Item
				value="Mobile"
				on:click={togglePreviewSize.setMobile}
				aria-label="Toggle Mobile"
			>
				<Smartphone class="h-4 w-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value="Tablet"
				on:click={togglePreviewSize.setTablet}
				aria-label="Toggle Tablet"
			>
				<Tablet class="h-4 w-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item
				value="Desktop"
				on:click={togglePreviewSize.setDesktop}
				aria-label="Toggle Desktop"
			>
				<Monitor class="h-4 w-4" />
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>
	<div class="flex w-1/3 items-center justify-end gap-x-2">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					href="http://localhost:5174/"
					target="_blank"
					builders={[builder]}
					size="icon"
					variant="outline"><MonitorPlay /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Live Preview</p>
			</Tooltip.Content>
		</Tooltip.Root>
		<Button size="icon" variant="outline"><Ellipsis /></Button>
	</div>
</nav>
