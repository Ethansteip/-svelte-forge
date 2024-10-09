<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Flower, SwatchBook, Wind } from 'lucide-svelte';
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';

	const frameworks = [
		{
			value: '4',
			label: 'Version 4 (latest)'
		},
		{
			value: '5',
			label: 'Version 5 (unstable)'
		}
	];
</script>

<section class="flex h-full w-full flex-col overflow-auto">
	<div class="flex h-full w-full flex-col p-3">
		<Card.Root class="flex h-full flex-col justify-between overflow-auto">
			<div>
				<Card.Header>
					<Card.Title>Create Your new Sveltekit app</Card.Title>
					<Card.Description>These are the base settings for your project</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="grid w-full items-center gap-4">
						<div class="flex flex-col space-y-1.5">
							<Label for="name">Project Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="framework">Sveltekit version</Label>
							<Select.Root>
								<Select.Trigger id="framework">
									<Select.Value placeholder="Select" />
								</Select.Trigger>
								<Select.Content>
									{#each frameworks as framework}
										<Select.Item value={framework.value} label={framework.label}
											>{framework.label}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="select-style">Style Library</Label>
							<RadioGroup.Root
								bind:value={$toggleUiLibrary}
								id="select-style"
								class="grid grid-cols-3 gap-4"
							>
								<Label
									for="shad"
									class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
								>
									<RadioGroup.Item
										value="shad"
										on:click={toggleUiLibrary.setShad}
										id="shad"
										class="sr-only"
										aria-label="toggle-shad-ui"
									/>
									<SwatchBook class="mb-2" />
									ShadCn
								</Label>
								<Label
									for="daisy"
									class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
								>
									<RadioGroup.Item
										value="daisy"
										on:click={toggleUiLibrary.setDaisy}
										id="daisy"
										class="sr-only"
										aria-label="toggle-daisy"
									/>
									<Flower class="mb-2" />
									Daisy <span class="hidden lg:flex">Ui</span>
								</Label>
								<Label
									for="tailwind"
									class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
								>
									<RadioGroup.Item
										on:click={toggleUiLibrary.setTailwind}
										value="tailwind"
										id="tailwind"
										class="sr-only"
										aria-label="toggle-tailwind-ui"
									/>
									<Wind class="mb-2 rotate-180" />
									Tailwind
								</Label>
							</RadioGroup.Root>
						</div>
						<div class="flex flex-col space-y-1.5">
							<ThemeSwitcher />
						</div>
					</div>
				</Card.Content>
			</div>
			<!-- <Card.Footer class="flex items-baseline justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Next</Button>
			</Card.Footer> -->
		</Card.Root>
	</div>
</section>
