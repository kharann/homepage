<script lang="ts">
	import type { Experience } from '@api/all-experience'
	import { DateTime } from 'luxon'

	export let experiences: Experience[]
</script>

<ul>
	{#each experiences as exp}
		<li class="grid grid-cols-2 grid-rows-1 text-gray-600">
			<div class="mr-4==">
				<time class="font-hack" datetime={exp.start}>{DateTime.fromISO(exp.start).year}</time>
				-
				<time class="font-hack" datetime={exp.end}
					>{exp.end ? DateTime.fromISO(exp.end).year : 'Now'}</time
				>
			</div>
			<span class="text-primary-8">{exp.title}</span>
		</li>
	{/each}
</ul>
