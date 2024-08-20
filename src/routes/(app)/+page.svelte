<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { LoaderCircle } from 'lucide-svelte';

	let loading: boolean = false;

	const testFetch = async () => {
		loading = true;
		const response = await fetch('/api/hello');
		const data = await response.json();
		console.log('Data: ', data);
		loading = false;
	};
</script>

<main class=" flex h-screen w-full flex-col items-center justify-center">
	<h1 class="w-full text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome to SvelteForge
	</h1>
	<div class="mt-3 flex w-full flex-col items-center justify-center gap-y-2">
		<h2 class="w-full text-center text-xl">Web development starter kits, built your way.</h2>
		<Button href="/builder/whats-your-style">Get Started</Button>
		<Button on:click={testFetch}>Click Me</Button>
		{#if loading}
			<LoaderCircle class="animate-spin" />
		{/if}
	</div>
</main>
