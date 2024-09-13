<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import ShadPreview from '$lib/components/builder/styles/ShadPreview.svelte';
	import DaisyPreview from '$lib/components/builder/styles/DaisyPreview.svelte';
	import TailwindPreview from '$lib/components/builder/styles/TailwindPreview.svelte';
</script>

<section
	id="preview-container"
	class="flex h-[100%] w-[100%] flex-col items-center justify-center gap-3"
>
	{#if $toggleUiLibrary === 'shad'}
		<ShadPreview />
	{:else if $toggleUiLibrary === 'daisy'}
		<DaisyPreview />
	{:else}
		<TailwindPreview />
	{/if}
</section>
