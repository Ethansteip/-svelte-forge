<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { LoaderCircle } from 'lucide-svelte';

	let loading: boolean = false;

	const testFetch = async () => {
		loading = true;
		const response = await fetch('/api/start-container');
		const data = await response.json();
		console.log('Data: ', data);
		loading = false;
	};
</script>

<main class="flex h-screen w-full flex-col items-center justify-center">
	<h1 class="w-full text-center text-2xl font-extrabold tracking-tight lg:text-4xl">
		Welcome to Svelte-Forge
	</h1>
	<div class="mt-1 flex w-full flex-col items-center justify-center gap-y-2 lg:mt-2">
		<h2 class="w-full text-center lg:text-xl">Web development starter kits, built your way.</h2>
		<Button href="/builder/whats-your-style">Get Started</Button>
	</div>
</main>
