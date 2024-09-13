<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Cat, UserRoundPlus, Settings2, EllipsisVertical } from 'lucide-svelte';
</script>

<section class="flex h-[65%] w-[90%] flex-col items-center justify-center gap-2">
	<nav class="flex w-full flex-row items-center justify-between bg-base-100">
		<div class="flex items-center space-x-4 lg:space-x-6">
			<div class="flex items-center space-x-2">
				<Button variant="outline" size="icon">
					<Cat />
				</Button>
				<h3 class="tracking-wide">Svelte-Forge</h3>
			</div>
			<a href="#id" class="text-sm font-medium text-muted-foreground hover:text-primary"
				>Analytics</a
			>
			<a href="#id" class="text-sm font-medium text-muted-foreground hover:text-primary"
				>Dahsboard</a
			>
			<a href="#id" class="text-sm font-medium text-muted-foreground hover:text-primary">Sales</a>
		</div>
		<div class="flex items-center space-x-2">
			<Button variant="outline" class="flex items-center gap-x-2">
				<UserRoundPlus />
				Invite a friend
			</Button>
			<Button size="icon">
				<Settings2 />
			</Button>
		</div>
	</nav>
	<script lang="ts">
		import * as Card from '$lib/components/ui/card';
	</script>

	<section class="mt-10 flex w-full items-center justify-between">
		<Card.Root class="w-[22%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Total Customers</Card.Title>
						<Card.Description>year to date</Card.Description>
					</div>
					<EllipsisVertical />
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">2,420</p>
					<Badge variant="secondary">+20%</Badge>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-[22%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Total Customers</Card.Title>
						<Card.Description>year to date</Card.Description>
					</div>
					<EllipsisVertical />
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">2,420</p>
					<Badge variant="secondary">+20%</Badge>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-[22%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Total Customers</Card.Title>
						<Card.Description>year to date</Card.Description>
					</div>
					<EllipsisVertical />
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">2,420</p>
					<Badge variant="secondary">+20%</Badge>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
</section>
