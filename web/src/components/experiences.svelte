<script lang="ts">
	import type { Experience } from '@api/all-experience'

	export let experiences: Experience[]
	let active: number = 0

	const handleClick = (tab: number) => {
		active = tab
	}
</script>

<div class="mt-8 flex">
	<div class="relative h-10 w-thin bg-accent" animate:hmm={{ duration: 2000 }} />
	<ul class="flex flex-col">
		{#each experiences as exp, i}
			<li
				class={`p-2 flex justify-center ${
					i == active ? 'bg-slate-100 text-foreground-accent font-medium' : 'bg-background'
				}`}
			>
				<button class="" on:click={() => handleClick(i)}>
					{exp.title}
				</button>
			</li>
			<!-- <div class="flex-start flex flex-col text-gray-600 sm:flex-row">
				<div class="w-24 sm:mr-20">
					<time datetime={exp.start}>{DateTime.fromISO(exp.start).year}</time>
					-
					<time datetime={exp.end}>{exp.end ? DateTime.fromISO(exp.end).year : ' Now'}</time>
				</div>
				<span class="text-foreground">{exp.role} at {exp.title}</span>
			</div> -->
			<!-- <i>{@html  chevronIcon}</i> -->
		{/each}
	</ul>
	<div class="">content</div>
</div>
