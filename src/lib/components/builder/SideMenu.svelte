<script>
	import { page } from '$app/stores';
	import { mediaQuery } from 'svelte-legos';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
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
			<Button variant="outline" class="absolute bottom-10 right-10 shadow-xl" builders={[builder]}
				>Customize</Button
			>
		</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header class="text-left">
				<Drawer.Title>Edit profile</Drawer.Title>
				<Drawer.Description>
					Make changes to your profile here. Click save when you're done.
				</Drawer.Description>
			</Drawer.Header>
			<form class="grid items-start gap-4 px-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input type="email" id="email" value="shadcn@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="username">Username</Label>
					<Input id="username" value="@shadcn" />
				</div>
				<Button type="submit">Save changes</Button>
			</form>
			<Drawer.Footer class="pt-2">
				<Drawer.Close asChild let:builder>
					<Button variant="outline" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
