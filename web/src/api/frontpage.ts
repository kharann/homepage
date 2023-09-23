import type { PortableText } from '@portabletext/svelte'
import groq from 'groq'
import { sanityClient } from '../lib/sanity'
import type { ComponentProps } from 'svelte'

type InputValue = ComponentProps<PortableText>["value"] 

export interface Experience {
	company: string
	company_full_name: string
	url: string
	positions: {
		role: string
		start: string
		end: string
		type: string
		description: InputValue | undefined
	}[]

}
export interface Project {
	title: string
	description: string
	github: string
	icons: string[]
}

export interface FrontpageData {
	introduction: {
		role: string
		about_me: InputValue
	}
	experiences: Experience[]
	projects: Project[]
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
	} | order(end desc),
	"projects": *[_type == "project" && !(_id in path("drafts.**"))] {
		title,
		description,
		github,
		icons
	}
}`

export const fetchFrontpageData = async () =>
	await sanityClient.fetch<FrontpageData>(frontpageQuery)
