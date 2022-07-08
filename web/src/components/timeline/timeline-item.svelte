<script lang="ts">
	import { DateTime } from 'luxon'

	import { BriefcaseIcon } from 'svelte-feather-icons'
	import Briefcase from './icons/briefcase.svelte'
	import GraduationCap from './icons/graduation-cap.svelte'

	export let title: string
	export let duration: [string, string | null]
	export let description: string
	export let type: string

	const startDate = DateTime.fromISO(duration[0])
	const endDate = duration[1] && DateTime.fromISO(duration[1])
	// Show the start year if start and end has different years.
	const start = startDate.toFormat(endDate && startDate.year == endDate.year ? 'LLLL' : 'LLLL y')
	const end = endDate ? endDate.toFormat('LLLL y') : 'present'
</script>

<li class="mb-10 ml-6">
	<span
		class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-0 ring-8 ring-background dark:bg-blue-900 dark:ring-gray-900"
	>
		{#if type == 'academic'}
			<GraduationCap />
		{:else}
			<Briefcase />
		{/if}
	</span>
	<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
	<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
		>{start} - {end}</time
	>
	<p class="text-base font-normal text-gray-500 dark:text-gray-400">
		{description}
	</p>
</li>
