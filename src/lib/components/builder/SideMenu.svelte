<script>
	import { page } from '$app/stores';
	import { mediaQuery } from 'svelte-legos';
	import { Pencil } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Styles from './styles/Styles.svelte';
	import Pages from './pages/Pages.svelte';

	const isDesktop = mediaQuery('(min-width: 1060px)');
	let open = false;
</script>

{#if $isDesktop}
	<div class="flex h-full flex-col lg:min-w-[30rem] lg:border-r">
		{#if $page.url.pathname === '/builder/whats-your-style'}
			<Styles />
		{:else if $page.url.pathname === '/builder/pages'}
			<Pages />
		{:else if $page.url.pathname === '/builder/backend'}
			<p>Backend</p>
		{/if}
	</div>
{:else}
	<Drawer.Root open={true}>
		<Drawer.Trigger asChild let:builder>
			<Button
				variant="default"
				size="icon-large"
				class="absolute bottom-10 right-10 z-[500] rounded-full shadow-xl"
				builders={[builder]}><Pencil /></Button
			>
		</Drawer.Trigger>
		<Drawer.Content class="z-[1000]">
			<!-- <Drawer.Header class="text-left">
				<Drawer.Description>
					<Drawer.Title>Welcome to Svelte-Forge!</Drawer.Title>
					Make changes to your profile here. Click save when you're done.
				</Drawer.Description>
			</Drawer.Header> -->
			{#if $page.url.pathname === '/builder/whats-your-style'}
				<Styles />
			{:else if $page.url.pathname === '/builder/pages'}
				<Pages />
			{:else if $page.url.pathname === '/builder/backend'}
				<p>Backend</p>
			{/if}
			<Drawer.Footer class="pt-22 flex flex-row justify-between gap-x-3">
				{#if $page.url.pathname.includes('/whats-your-style')}
					<Button class="w-1/3" href="/" variant="outline">Cancel</Button>
				{:else}
					<Button class="w-1/3" href="/builder/whats-your-style" variant="outline">Back</Button>
				{/if}
				<Drawer.Close asChild let:builder>
					<Button class="w-1/3" variant="ghost" builders={[builder]}>Preview</Button>
				</Drawer.Close>
				<Button class="w-1/3" href="/builder/pages">Next</Button>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
