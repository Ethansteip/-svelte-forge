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
				size="icon"
				class="z-100 absolute bottom-10 right-10 shadow-xl"
				builders={[builder]}><Pencil /></Button
			>
		</Drawer.Trigger>
		<Drawer.Content>
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
			<Drawer.Footer class="pt-2">
				<Button>Next</Button>
				<Drawer.Close asChild let:builder>
					<Button variant="outline" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
