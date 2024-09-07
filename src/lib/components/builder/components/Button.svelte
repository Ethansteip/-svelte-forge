<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import Button from '$lib/components/ui/button/button.svelte';

	$: console.log('UI LIBRARY: ', $toggleUiLibrary);
</script>

{#if $toggleUiLibrary === 'shad'}
	<Button>Press Me</Button>
{:else if $toggleUiLibrary === 'tailwind'}
	<button class="rounded-lg bg-slate-700 px-3 py-2 text-white">Press Me</button>
{:else}
	<button class="btn btn-neutral">Neutral</button>
{/if}
