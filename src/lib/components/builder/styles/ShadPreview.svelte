<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Cat, UserRoundPlus, Settings, EllipsisVertical, Search } from 'lucide-svelte';
</script>

<section class="flex h-[65%] w-[80%] flex-col items-center justify-center gap-2">
	<nav class="flex w-full flex-row items-center justify-between bg-base-100">
		<div class="flex items-center space-x-4 lg:space-x-6">
			<div class="flex items-center space-x-3">
				<Button variant="outline" size="icon">
					<Cat />
				</Button>
				<h3 class="tracking-wide">Svelte-Forge</h3>
			</div>
			<Button variant="link">Analytics</Button>
			<Button variant="link">Dashboard</Button>
			<Button variant="link">Sales</Button>
		</div>
		<div class="flex items-center space-x-2">
			<Button variant="outline" class="flex items-center gap-x-2">
				<UserRoundPlus />
				Invite a friend
			</Button>
			<Button size="icon">
				<Settings />
			</Button>
		</div>
	</nav>
	<section class="mt-10 flex w-full items-center justify-between">
		<Card.Root class="w-[30%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Total Customers</Card.Title>
						<Card.Description>year to date</Card.Description>
					</div>
					<Button variant="ghost" size="icon">
						<EllipsisVertical />
					</Button>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">2,420</p>
					<Badge variant="secondary">+20%</Badge>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-[30%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Churn Rate</Card.Title>
						<Card.Description>year to date</Card.Description>
					</div>
					<Button variant="ghost" size="icon">
						<EllipsisVertical />
					</Button>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">54</p>
					<Badge variant="secondary">-6%</Badge>
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-[30%]">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Active Now</Card.Title>
						<Card.Description>total</Card.Description>
					</div>
					<Button variant="ghost" size="icon">
						<EllipsisVertical />
					</Button>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex w-full items-center justify-between">
					<p class="text-3xl font-bold">452</p>
					<Avatar.Root class="-mr-4 border-2 border-base-200">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					</Avatar.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	<section class="mt-3 flex w-full items-center justify-between">
		<div class="flex w-[30%] items-center gap-x-3">
			<Input type="email" placeholder="email" class="max-w-xs" />
			<Button>
				<Search class="mr-2 h-4 w-4" />
				Search
			</Button>
		</div>
	</section>
</section>
