import { sanityClient } from '@lib/sanity'
import groq from 'groq'
import { allPostsQuery } from './all-post'
import type { PreviewPost } from './all-post'
import type { InputValue } from '@portabletext/svelte/ptTypes'

interface FrontpageData {
	introduction: {
		role: string
		about_me: InputValue
	}
	latest_posts: PreviewPost[]
}

const frontpageQuery = groq`{
	"introduction" : *[_type == "whoami" ] {
		role,
		about_me
	}[0],
	"latest_posts": ${allPostsQuery}[0...3] | order(_createdAt asc)
}`

export const fetchIntroAndPosts = () => sanityClient.fetch<FrontpageData>(frontpageQuery)
