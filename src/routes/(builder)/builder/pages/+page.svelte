<script lang="ts">
	import { togglePreviewSize } from '$lib/stores/togglePreviewSize';
	import { env } from '$env/dynamic/public';
</script>

<main class="flex h-screen w-full flex-col items-center justify-center bg-gray-200">
	<section
		id="device-preview"
		class="h-full bg-white"
		class:w-[28rem]={$togglePreviewSize === 'Mobile'}
		class:mt-10={$togglePreviewSize !== 'Desktop'}
		class:rounded-xl={$togglePreviewSize !== 'Desktop'}
		class:w-[45rem]={$togglePreviewSize === 'Tablet'}
		class:w-full={$togglePreviewSize === 'Desktop'}
	>
		<iframe src={`${env.PUBLIC_MAIN_SVELTE_APP} + /test`} title="iframe" class="h-full w-full"
		></iframe>
	</section>
</main>
