<script lang="ts">
	import type { Experience } from '@api/all-experience'
	import { DateTime } from 'luxon'
	import { cubicInOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import ExternalLink from './icons/external-link.svelte'
	import Link from './link.svelte'
	import { flip } from 'svelte/animate'
	import { fly } from 'svelte/transition'

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
		if (!end) {
			return `${DateTime.fromISO(start).toFormat(monthYearFormat)} - present`
		} else {
			const startDate = DateTime.fromISO(start)
			const endDate = DateTime.fromISO(end)
			const startText =
				startDate.year === endDate.year
					? startDate.toFormat('MMMM')
					: startDate.toFormat(monthYearFormat)
			const endText = endDate.toFormat(monthYearFormat)
			return `${startText} - ${endText}`
		}
	}

	const computeID = (company: string, role: string) =>
		`${company.toLowerCase()}_${role.toLowerCase()}`
</script>

<div class="mt-8 flex w-full">
	<div class="relative h-10 w-thin bg-accent" style={`top:${40 * $leftBar}px;`} />
	<ul class="flex flex-col">
		{#each experiences as exp, i (exp.company)}
			<li
				class={`p-2 flex justify-start transition-colors duration-500 font-medium ${
					i == active ? 'bg-slate-100 text-foreground-accent' : 'bg-background'
				}`}
			>
				<button on:click={() => handleClick(i)}>
					{exp.company}
				</button>
			</li>
		{/each}
	</ul>
	<div class="flex-1 pl-8">
		<Link url={selected.url} accent={false}>
			<h4 class="mb-4 flex items-center text-sm font-medium text-inherit">
				{selected.company.toLocaleUpperCase()}
				<i class="pl-1"><ExternalLink /></i>
			</h4>
		</Link>
		{#each selected.positions as pos (computeID(selected.company, pos.role))}
			<div
				class="pb-2"
				in:fly={{ y: 150, duration: 400 }}
				out:fly={{ x: 150, duration: 300 }}
				animate:flip
			>
				<h3 class="text-lg font-medium text-primary-9">{pos.role}</h3>
				<time class="text-sm font-medium text-slate-700" datetime={pos.start}
					>{formatDate(pos.start, pos.end)}</time
				>
				<p>{pos.description || ''}</p>
			</div>
		{/each}
	</div>
</div>
