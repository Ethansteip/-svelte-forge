<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import Button from '$lib/components/ui/button/button.svelte';

	let rawHtml = '';

	$: if ($toggleUiLibrary === 'shad') {
		rawHtml = `<Button>Press Me</Button>`;
	} else if ($toggleUiLibrary === 'tailwind') {
		rawHtml = '<button class="rounded-lg bg-slate-700 px-3 py-2 text-white">Press Me</button>';
	} else {
		rawHtml = '<button class="btn btn-neutral text-white">Neutral</button>';
	}
</script>

{@html rawHtml}
