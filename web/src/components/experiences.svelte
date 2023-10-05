<script lang="ts">
	import type { Experience } from '../api/frontpage'
	import { cubicInOut } from 'svelte/easing'
	import { compareAsc, format, isAfter, isSameYear } from 'date-fns'
	import { tweened } from 'svelte/motion'
	import Link from './Link.svelte'
	import { fade } from 'svelte/transition'
	import PortableText from './PortableText/index.svelte'
	import 'iconify-icon'
	import clsx from 'clsx'

	export let experiences: Experience[]
	let active: number = 0
	let selected = experiences[active]

	const leftBar = tweened(0, {
		duration: 400,
		easing: cubicInOut
	})

	const handleClick = (tab: number) => {
		active = tab
		selected = experiences[active]
		leftBar.set(active)
	}
	const formatDate = (start: string, end: string | undefined) => {
		const monthYearFormat = 'MMMM y'
		const startDate = new Date(start)
		if (!end) {
			return `${format(startDate, monthYearFormat)} - present`
		} else {
			const endDate = new Date(end)
			const startText = format(startDate, isSameYear(startDate, endDate) ? 'MMMM' : monthYearFormat)
			const endText = format(endDate, monthYearFormat)
			return `${startText} - ${endText}`
		}
	}
	
</script>

<div class="mt-8 flex h-full min-h-[300px] w-full flex-col sm:flex-row">
	<div class="w-thin bg-brown-11 relative hidden h-10 sm:block" style={`top:${40 * $leftBar}px;`} />
	<ul class="flex flex-row overflow-scroll pb-2 sm:flex-col sm:overflow-auto">
		{#each experiences as exp, i (exp.company)}
			<li
				class={clsx(
					'py-2 flex justify-start transition-colors duration-500',
					i == active
						? 'font-bold bg-brown-4 text-brown-11 border-b-2 border-brown-11 sm:border-none'
						: 'font-medium bg-background dark:bg-background-dark border-none'
				)}
			>
				<button class="w-32" on:click={() => handleClick(i)}>
					{exp.company}
				</button>
			</li>
		{/each}
	</ul>
	{#key selected}
		<div class="flex-1 pl-8" in:fade={{ duration: 500 }}>
			<Link url={selected.url} accent={false}>
				<h3 class="mb-3 flex items-center text-sm font-medium text-inherit">
					{(selected.company_full_name || selected.company).toLocaleUpperCase()}
					<i class="pl-1">
						<iconify-icon icon="tabler:external-link" width="16" height="16" />
					</i>
				</h3>
			</Link>
			{#each selected.positions as pos}
				<div class="pb-2">
					<h3 class="text-brown-12 text-lg font-medium">{pos.role}</h3>
					<time class="text-gray-11 text-sm font-medium" datetime={pos.start}
						>{formatDate(pos.start, pos.end)}</time
					>
					{#if pos.description}
						<PortableText blocks={pos.description} />
					{/if}
				</div>
			{/each}
		</div>
	{/key}
</div>
