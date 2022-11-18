import type { InputValue } from '@portabletext/svelte/ptTypes'
import groq from 'groq'
import { sanityClient } from '../lib/sanity'

export interface Experience {
	company: string
	company_full_name: string
	positions: {
		role: string
		start: string
		end: string
		type: string
		description: InputValue | undefined
	}[]
}

interface FrontpageData {
	introduction: {
		role: string
		about_me: InputValue
	}
	experiences: Experience[]
}

const frontpageQuery = groq`
{
	"introduction": *[_type == "whoami" ] {
		role,
		about_me
	}[0],
	"experiences": *[_type == "experience" && !(_id in path("drafts.**")) && !hidden] {
			company,
			company_full_name,
			positions,
			url
	} | order(end desc)
}`

export const fetchFrontpageData = async () =>
	await sanityClient.fetch<FrontpageData>(frontpageQuery)
