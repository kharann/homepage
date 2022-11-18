import { sanityClient } from '../lib/sanity'
import type { InputValue } from '@portabletext/svelte/ptTypes'
import groq from 'groq'

export interface BlogPost {
	title: string
	tags: string[]
	content: InputValue
	slug: string
	estimatedReadingTime: number
	_createdAt: string
	_updatedAt: string
}

const postBySlugQuery = groq`
		*[_type == "posts" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
			_createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
			tags,
			content,
			"estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )

		}
	`

export const fetchPostBySlug = async (slug: string) =>
	await sanityClient.fetch<BlogPost>(postBySlugQuery, { slug })
