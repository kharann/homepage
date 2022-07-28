import { sanityClient } from '@lib/sanity'
import groq from 'groq'

export interface Experience {
	company: string
	positions: {
		role: string
		start: string
		end: string
		type: string
		description: string
	}[]
	url: string
}
export const allExperienceQuery = groq`
		*[_type == "experience" && !(_id in path("drafts.**")) && !hidden] {
			company,
			positions,
			url
		}`
