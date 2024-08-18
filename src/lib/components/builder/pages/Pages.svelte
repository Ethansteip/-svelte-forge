<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	const sendRequest = async (value: string): Promise<void> => {
		const response = await fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: value })
		});
		const data = await response.json();
	};
</script>

<Accordion.Root class="w-full" value="item-1">
	<Accordion.Item value="item-1">
		<Accordion.Trigger class="px-4">Landing Page</Accordion.Trigger>
		<Accordion.Content class="w-full px-4">
			<div class="w-full columns-2 space-y-4">
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('layout1')}>Layout 1</Button>
				</div>
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('layout2')}>Layout 3</Button>
				</div>
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('Blowfish')}>Layout 2</Button>
				</div>
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('Cheetah')}>Layout 5</Button>
				</div>
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('House')}>Layout 4</Button>
				</div>
				<div class="flex h-24 w-full items-center justify-center rounded border-2">
					<Button on:click={() => sendRequest('Computer')}>Layout 6</Button>
				</div>
			</div>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger class="px-4">Authorization</Accordion.Trigger>
		<Accordion.Content class="w-full px-4">
			<div class="w-full columns-2 space-y-4">
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
			</div>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.Trigger class="px-4">About</Accordion.Trigger>
		<Accordion.Content class="w-full px-4">
			<div class="w-full columns-2 space-y-4">
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
				<div class="h-24 w-full rounded border-2"></div>
			</div>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
