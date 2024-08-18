<script>
	import { page } from '$app/stores';
	import Styles from './styles/Styles.svelte';
	import Pages from './pages/Pages.svelte';
</script>

<div class="flex max-h-screen min-w-[30rem] flex-col border-r">
	{#if $page.url.pathname === '/builder/whats-your-style'}
		<Styles />
	{:else if $page.url.pathname === '/builder/pages'}
		<Pages />
	{:else if $page.url.pathname === '/builder/backend'}
		<p>Backend</p>
	{/if}
</div>
