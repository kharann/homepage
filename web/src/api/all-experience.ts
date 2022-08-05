import type { InputValue } from '@portabletext/svelte/ptTypes'
import groq from 'groq'

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
	url: string
}
export const allExperienceQuery = groq`
		*[_type == "experience" && !(_id in path("drafts.**")) && !hidden] {
			company,
			company_full_name,
			positions,
			url
		}`
