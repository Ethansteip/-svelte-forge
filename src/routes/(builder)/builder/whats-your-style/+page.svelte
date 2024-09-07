<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import ShadPreview from '$lib/components/builder/styles/ShadPreview.svelte';
	import DaisyPreview from '$lib/components/builder/styles/DaisyPreview.svelte';
	import TailwindPreview from '$lib/components/builder/styles/TailwindPreview.svelte';
</script>

<main class="flex h-[100%] w-[100%] flex-col items-center justify-center gap-3">
	<h1 class="text-3xl font-semibold">{$toggleUiLibrary}</h1>
	{#if $toggleUiLibrary === 'shad'}
		<ShadPreview />
	{:else if $toggleUiLibrary === 'daisy'}
		<DaisyPreview />
	{:else}
		<TailwindPreview />
	{/if}
</main>
