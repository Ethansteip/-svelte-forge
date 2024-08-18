<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Skull, Flower, SwatchBook } from 'lucide-svelte';
</script>

<section class="flex h-auto w-full flex-col">
	<div class="flex w-full flex-col p-5">
		<h3 class="text-xl">Choose your style</h3>
	</div>
	<div>
		<Label
			class=" m-5 flex items-center justify-between rounded-xl border-2 p-6 focus-within:border-blue-500"
			for="terms"
		>
			<div class="flex items-center gap-x-2">
				<Skull />
				<p>Skeleton-ui</p>
			</div>
			<Checkbox id="terms" />
		</Label>
	</div>
	<div>
		<Label
			class=" m-5 flex items-center justify-between rounded-xl border-2 p-6 focus-within:border-blue-500"
			for="terms"
		>
			<div class="flex items-center gap-x-2">
				<SwatchBook />
				<p>Shadcn-Svelte</p>
			</div>
			<Checkbox id="terms" />
		</Label>
	</div>
	<div>
		<Label
			class="m-5 flex items-center justify-between rounded-xl border-2 p-6 focus-within:border-blue-500"
			for="terms"
		>
			<div class="flex items-center gap-x-2">
				<Flower />
				<p>Daisy Ui</p>
			</div>
			<Checkbox id="terms" />
		</Label>
	</div>
</section>
