<script lang="ts">
	import type { Experience } from '@api/all-experience'
	import { DateTime } from 'luxon'
	import { cubicInOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import ExternalLink from './icons/external-link.svelte'
	import Link from './link.svelte'
	import { fly, fade } from 'svelte/transition'
	import CustomPortableText from '@components/portable-text/index.svelte'

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
</script>

<div class="mt-8 flex w-full flex-col sm:flex-row">
	<div class="relative hidden h-10 w-thin bg-accent sm:block" style={`top:${40 * $leftBar}px;`} />
	<ul class="flex flex-row overflow-scroll pb- sm:flex-col sm:overflow-auto">
		{#each experiences as exp, i (exp.company)}
			<li
				class={`py-2 flex justify-start transition-colors duration-500 font-medium ${
					i == active
						? 'bg-slate-100 text-foreground-accent border-b-2 border-accent sm:border-none'
						: 'bg-background border-none'
				}`}
			>
				<button class="w-32" on:click={() => handleClick(i)}>
					{exp.company}
				</button>
			</li>
		{/each}
	</ul>
	{#key selected}
		<div
			class="flex-1 pl-8"
			in:fly={{ delay: 200, duration: 400, x: 50 }}
			out:fade={{ duration: 100 }}
		>
			<Link url={selected.url} accent={false}>
				<h4 class="mb-4 flex items-center text-sm font-medium text-inherit">
					{(selected.company_full_name || selected.company).toLocaleUpperCase()}
					<i class="pl-1"><ExternalLink /></i>
				</h4>
			</Link>
			{#each selected.positions as pos}
				<div class="pb-2">
					<h3 class="text-lg font-medium text-primary-9">{pos.role}</h3>
					<time class="text-sm font-medium text-slate-700" datetime={pos.start}
						>{formatDate(pos.start, pos.end)}</time
					>
					{#if pos.description}
						<CustomPortableText blocks={pos.description} />
					{/if}
				</div>
			{/each}
		</div>
	{/key}
</div>
