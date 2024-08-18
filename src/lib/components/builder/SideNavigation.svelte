<script>
	import Button from '../ui/button/button.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { page } from '$app/stores';
	import { Paintbrush2, Layers2, Zap, Database } from 'lucide-svelte';
</script>

<div class="flex h-full w-16 flex-col items-center justify-between border-r py-3">
	<div class="flex h-1/3 flex-col gap-y-3">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					size="icon"
					variant={$page.url.pathname === '/builder/whats-your-style' ? 'default' : 'outline'}
					href="/builder/whats-your-style"><Paintbrush2 /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Styling</p>
			</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					size="icon"
					variant={$page.url.pathname === '/builder/pages' ? 'default' : 'outline'}
					href="/builder/pages"><Layers2 /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Pages</p>
			</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					size="icon"
					variant={$page.url.pathname === '/builder/backend' ? 'default' : 'outline'}
					href="/builder/backend"><Database /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Backend</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
	<div class="flex h-1/3 flex-col justify-end"></div>
</div>
