<script lang="ts">
	import { toggleUiLibrary } from '$lib/stores/uiLibrary';
	import Button from '$lib/components/builder/components/Button.svelte';
</script>

<main class="flex h-full w-full flex-col items-center justify-center">
	<section class="flex flex-col items-center justify-center gap-x-3">
		<h1>{$toggleUiLibrary}</h1>
		<Button />
	</section>
</main>
