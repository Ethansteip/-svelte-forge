<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import {
		Cat,
		UserRoundPlus,
		Settings,
		EllipsisVertical,
		Search,
		Calendar as CalendarIcon
	} from 'lucide-svelte';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value: DateValue | undefined = undefined;
</script>

<!-- Navigation Bar -->
<section class="flex h-auto w-[80%] flex-col items-center justify-center gap-2">
	<nav class="flex w-full flex-row items-center justify-between bg-base-100">
		<div class="flex items-center space-x-4 lg:space-x-6">
			<div class="flex items-center space-x-3">
				<Button variant="outline" size="icon">
					<Cat />
				</Button>
				<h3 class="tracking-wide">Svelte-Forge</h3>
			</div>
			<div class="flex items-center space-x-1">
				<Button variant="link">Analytics</Button>
				<Button variant="link">Dashboard</Button>
				<Button variant="link">Sales</Button>
			</div>
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

	<!-- Customer Heading -->
	<section class="mb-2 mt-4 flex w-full flex-col">
		<h1 class="text-3xl font-bold tracking-wide">Customers</h1>
		<h2 class="italic text-base-300">This is a component preview using ShadCn Svelte</h2>
	</section>

	<!-- Metrics & Date-picker -->
	<section class="flex w-full items-center justify-between space-x-3">
		<Card.Root class="w-1/3">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>Customers</Card.Title>
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
		<Card.Root class="w-1/3">
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
		<Card.Root class="w-1/3">
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
	<section class="mt-3 flex w-full items-center justify-between space-x-3">
		<div class="flex w-1/3 items-center">
			<Popover.Root>
				<Popover.Trigger asChild let:builder>
					<Button
						variant="outline"
						class={cn(
							'w-[280px] justify-start text-left font-normal',
							!value && 'text-muted-foreground'
						)}
						builders={[builder]}
					>
						<CalendarIcon class="mr-2 h-4 w-4" />
						{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar bind:value initialFocus />
				</Popover.Content>
			</Popover.Root>
		</div>
		<div class="flex w-2/3 items-center justify-end gap-x-3 2xl:w-[30%]">
			<Input type="email" placeholder="email" class="max-w-xs" />
			<Button>
				<Search class="mr-2 h-4 w-4" />
				Search
			</Button>
		</div>
	</section>
</section>
