<script lang="ts">
	export let colours: string[];
</script>

<div class="relative flex w-auto items-center gap-0 p-1">
	{#each colours as colour, index}
		<div
			class="h-6 w-6 rounded-full border-2 border-white"
			style="background-color: {colour}; margin-left: {-5}px; z-index: {100 - index};"
		></div>
	{/each}
</div>
