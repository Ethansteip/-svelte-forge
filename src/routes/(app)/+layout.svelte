<script>
	import '../../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/app/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Navbar />
<ModeWatcher />
<Toaster />
<slot></slot>
