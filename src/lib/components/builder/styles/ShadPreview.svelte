<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label/index.js';
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
		Bone,
		Calendar as CalendarIcon
	} from 'lucide-svelte';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		}
	];

	const animals = [
		{
			value: 'bobcat',
			label: 'Bobcat'
		},
		{
			value: 'sea-horse',
			label: 'Sea-horse'
		},
		{
			value: 'elephant',
			label: 'Elephant'
		},
		{
			value: 'vulture',
			label: 'Vulture'
		}
	];

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
				<Button variant="link" class="hidden xl:flex">Analytics</Button>
				<Button variant="link" class="hidden xl:flex">Dashboard</Button>
				<Button variant="link" class="hidden xl:flex">Sales</Button>
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<Button variant="outline" class="hidden items-center gap-x-2 2xl:flex">
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
		<h1 class="text-xl font-bold tracking-wide xl:text-3xl">Customers</h1>
		<h2 class="text-sm italic xl:text-lg">This is a component preview using ShadCn Svelte</h2>
	</section>

	<!-- Metrics & Date-picker -->
	<section class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
		<Card.Root class="col-span-1 transition duration-500 hover:bg-secondary">
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
		<Card.Root class="hidden transition duration-500 hover:bg-secondary lg:inline-block">
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
		<Card.Root class="hidden transition duration-500 hover:bg-secondary xl:inline-block">
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
		<Popover.Root>
			<Popover.Trigger asChild let:builder>
				<Button
					variant="outline"
					class={cn('justify-start text-left font-normal', !value && 'text-muted-foreground')}
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
		<Input type="email" placeholder="email" />
		<div class="hidden justify-between space-x-2 lg:col-span-2 xl:col-span-1 xl:flex">
			<Button>
				<Search class="mr-2 h-4 w-4" />
				Search
			</Button>
			<Select.Root portal={null}>
				<Select.Trigger class="w-[180px]">
					<Select.Value placeholder="Select a fruit" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label>Fruits</Select.Label>
						{#each fruits as fruit}
							<Select.Item value={fruit.value} label={fruit.label}>{fruit.label}</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
				<Select.Input name="favoriteFruit" />
			</Select.Root>
		</div>
		<div class="lg:col-span-2">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="">Invoice</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head>Method</Table.Head>
						<Table.Head class="text-right">Amount</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body class="col-span-2">
					{#each invoices as invoice, i (i)}
						<Table.Row>
							<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
							<Table.Cell>{invoice.paymentStatus}</Table.Cell>
							<Table.Cell>{invoice.paymentMethod}</Table.Cell>
							<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<Card.Root class="w-full lg:col-span-2 xl:col-span-1">
			<Card.Header>
				<Card.Title>Create project</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form>
					<div class="grid w-full items-center gap-4">
						<div class="flex flex-col space-y-1.5">
							<Label for="framework">Animals</Label>
							<Select.Root>
								<Select.Trigger id="Amimals">
									<Select.Value placeholder="Choose your animal" />
								</Select.Trigger>
								<Select.Content>
									{#each animals as animal}
										<Select.Item value={animal.value} label={animal.label}
											>{animal.label}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					</div>
				</form>
			</Card.Content>
			<Card.Footer class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</Card.Footer>
		</Card.Root>
	</section>
</section>
