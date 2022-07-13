import { sanityClient } from '@lib/sanity'
import groq from 'groq'
import { allPostsQuery } from './all-post'
import type { PreviewPost } from './all-post'
import type { InputValue } from '@portabletext/svelte/ptTypes'
import { allExperienceQuery, type Experience } from './all-experience'

interface FrontpageData {
	introduction: {
		role: string
		about_me: InputValue
	}
	latest_posts: PreviewPost[]
	experiences: Experience[]
}

const frontpageQuery = groq`{
	"introduction" : *[_type == "whoami" ] {
		role,
		about_me
	}[0],
	"latest_posts": ${allPostsQuery}[0...3] | order(_createdAt asc),
	"experiences": ${allExperienceQuery} | order(end desc)
}`

export const fetchFrontpageData = () => sanityClient.fetch<FrontpageData>(frontpageQuery)
