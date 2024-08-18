<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import Button from '../ui/button/button.svelte';
</script>

<nav class="flex h-16 w-full items-center justify-between border-b border-secondary px-5">
	<div class="flex w-1/3 items-center justify-start">
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
	<a href="/" class="flex w-1/3 items-center justify-center text-secondary-foreground">
		Svelte builder
	</a>
	<div class="flex w-1/3 items-center justify-end gap-x-3">
		<a href="/">login</a>
		<a href="/">Register</a>
		<a href="/">About</a>
	</div>
</nav>
