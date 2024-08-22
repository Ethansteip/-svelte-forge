<script lang="ts">
	import { togglePreviewSize } from '$lib/stores/togglePreviewSize';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import { Rocket } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import Button from '$lib/components/ui/button/button.svelte';

	let loading = true;

	onMount(() => {
		toast.promise(() => new Promise((resolve) => setTimeout(resolve, 1500)), {
			loading: 'Mounting your new Sveltekit starter kit!',
			description: 'This may take a few moments.',
			success: 'Success',
			error: 'Error'
		});

		setTimeout(() => {
			loading = false;
		}, 2500);
	});
</script>

<main class="flex h-screen w-full flex-col items-center justify-center bg-gray-200">
	{#if loading}
		<Button size="icon" variant="outline"><Rocket /></Button>
	{:else}
		<section
			id="device-preview"
			class="h-full bg-white"
			class:w-[28rem]={$togglePreviewSize === 'Mobile'}
			class:mt-10={$togglePreviewSize !== 'Desktop'}
			class:rounded-xl={$togglePreviewSize !== 'Desktop'}
			class:w-[45rem]={$togglePreviewSize === 'Tablet'}
			class:w-full={$togglePreviewSize === 'Desktop'}
		>
			<iframe
				src={`${env.PUBLIC_SVELTE_BUILDER_API_URL} + /test`}
				title="iframe"
				class="h-full w-full"
			></iframe>
		</section>
	{/if}
</main>
