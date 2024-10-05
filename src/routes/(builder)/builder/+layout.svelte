<script>
	import '../../../app.css';
	import SideNavigation from '$lib/components/builder/SideNavigation.svelte';
	import SideMenu from '$lib/components/builder/SideMenu.svelte';
	import Navbar from '$lib/components/builder/Navbar.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<main class="flex h-screen">
	<SideNavigation />
	<section class="flex h-full w-full flex-col">
		<Navbar />
		<div class="flex h-[calc(100vh-60px)] w-full overflow-auto lg:flex-row">
			<Toaster />
			<SideMenu />
			<section class="h-full w-full overflow-auto">
				<slot></slot>
			</section>
		</div>
	</section>
</main>
