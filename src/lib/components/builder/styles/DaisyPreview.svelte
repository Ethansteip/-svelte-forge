<script>
	import Navbar1 from '$lib/components/builder/Daisy/Navbar1.svelte';
</script>

<section class="flex h-[65%] w-[90%] flex-col gap-2">
	<Navbar1 />
	<div class="mt-3">
		<h1 class="text-xl font-semibold lg:text-3xl">Dashboard</h1>
		<h2 class="italic">This is a component preview using Daisy Ui</h2>
	</div>

	<section class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
		<!-- metrics -->
		<div class="stats col-span-1 mt-3 w-full shadow lg:col-span-2 xl:col-span-3">
			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
				<div class="stat-title">Downloads</div>
				<div class="stat-value">31K</div>
				<div class="stat-desc">Jan 1st - Feb 1st</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						></path>
					</svg>
				</div>
				<div class="stat-title">New Users</div>
				<div class="stat-value">4,200</div>
				<div class="stat-desc">↗︎ 400 (22%)</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
						></path>
					</svg>
				</div>
				<div class="stat-title">New Registers</div>
				<div class="stat-value">1,200</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>
		</div>

		<!-- code snippet & inputs -->
		<div class="flex flex-col gap-4">
			<div class="mockup-code">
				<pre data-prefix="$"><code>npm i daisyui</code></pre>
				<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
				<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
			</div>
			<!-- Alert -->
			<div role="alert" class="alert alert-info">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span>New software update available.</span>
			</div>
			<!-- Alert -->
			<div role="alert" class="alert">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-info"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span>we use cookies for no reason.</span>
				<div>
					<button class="btn btn-sm">Deny</button>
					<button class="btn btn-primary btn-sm">Accept</button>
				</div>
			</div>
		</div>

		<div class="card w-full bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Lorem Ipsum</h2>
				<p>is simply dummy text of the printing and typesetting industry.</p>
				<div class="card-actions mt-1 justify-end">
					<button class="btn btn-primary">Buy Now</button>
					<button class="btn btn-secondary">Buy Now</button>
				</div>
			</div>
		</div>
	</section>
</section>
