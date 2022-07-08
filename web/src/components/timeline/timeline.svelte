<script lang="ts">
	import type { Experience } from '@api/all-experience'

	import TimelineItem from './timeline-item.svelte'

	export let experiences: Experience[]
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700">
	{#each experiences as experience}
		<TimelineItem
			title={experience.title}
			duration={[experience.start, experience.end]}
			description={experience.description || ''}
			type={experience.type}
		/>
	{/each}
</ol>
