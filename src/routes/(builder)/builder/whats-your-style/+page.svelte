<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import ShadPreview from '$lib/components/builder/styles/ShadPreview.svelte';
	import DaisyPreview from '$lib/components/builder/styles/DaisyPreview.svelte';
	import TailwindPreview from '$lib/components/builder/styles/TailwindPreview.svelte';
</script>

<section
	id="preview-container"
	class="flex h-auto w-[100%] flex-col items-center gap-3 py-12 xl:h-full"
>
	{#if $toggleUiLibrary === 'shad'}
		<ShadPreview />
	{:else if $toggleUiLibrary === 'daisy'}
		<DaisyPreview />
	{:else}
		<TailwindPreview />
	{/if}
</section>
