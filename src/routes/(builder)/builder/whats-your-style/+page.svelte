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
	<h1 class="text-4xl">Component Preview</h1>
	{#if $toggleUiLibrary === 'shad'}
		<ShadPreview />
	{:else if $toggleUiLibrary === 'daisy'}
		<DaisyPreview />
	{:else}
		<TailwindPreview />
	{/if}
	<!-- <div class="mt-4">
		<button
			class="rounded border border-[hsl(var(--button-border))] bg-[hsl(var(--button-bg))] px-4 py-2 text-[hsl(var(--button-text))]"
		>
			ShadCN Button
		</button>
		<button
			class="btn border-[hsl(var(--button-border))] bg-[hsl(var(--button-bg))] text-[hsl(var(--button-text))]"
		>
			Daisy UI Button
		</button>
		<button
			class="rounded-[var(--button-radius)] border-[hsl(var(--button-border))] bg-[hsl(var(--button-bg))] px-4 py-2 text-[hsl(var(--button-text))]"
		>
			Tailwind Button
		</button>
	</div> -->
</section>
