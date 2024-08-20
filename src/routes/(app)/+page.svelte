<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { toast } from 'svelte-sonner';
	import { env } from '$env/dynamic/public';

	const testFetch = async () => {
		const response = await fetch(`/${env.PUBLIC_SVELTE_BUILDER_API_URL}/hello`);
		const data = await response.json();
		console.log('Data: ', data);
	};
</script>

<main class=" flex h-screen w-full flex-col items-center justify-center">
	<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to SvelteForge</h1>
	<div class="mt-3 flex w-full flex-col items-center justify-center gap-y-2">
		<h2 class="text-xl">Web development starter kits, built your way.</h2>
		<Button href="/builder/whats-your-style">Get Started</Button>
		<Button on:click={testFetch}>Click Me</Button>
	</div>
</main>
