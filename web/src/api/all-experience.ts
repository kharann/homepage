import { sanityClient } from '@lib/sanity'
import groq from 'groq'

export interface Experience {
	title: string
	type: string
	start: string
	end: string | null
	description: string | null
}
export const allExperienceQuery = groq`
		*[_type == "experience" && !(_id in path("drafts.**")) && !hidden] {
            title,
			type,
            start,
			end,
            description
		}`
