<script lang="ts">
	import type { Experience } from '@api/all-experience'
	import { DateTime } from 'luxon'
	import feather from 'feather-icons'
	// const chevronIcon = feather.icons["chevron-down"].toSvg()

	export let experiences: Experience[]
</script>

<ul class="mt-8">
	{#each experiences as exp}
		<li class="flex justify-between items-center sm:my-2 my-4">
			<div class="flex-start flex flex-col text-gray-600 sm:flex-row">
				<div class="w-24 sm:mr-20">
					<time datetime={exp.start}>{DateTime.fromISO(exp.start).year}</time>
					-
					<time datetime={exp.end}>{exp.end ? DateTime.fromISO(exp.end).year : ' Now'}</time>
				</div>
				<span class="text-foreground">{exp.role} at {exp.title}</span>
			</div>
			<!-- <i>{@html  chevronIcon}</i> -->
		</li>
	{/each}
</ul>
