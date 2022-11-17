
import type { InputValue } from '@portabletext/svelte/ptTypes'
import groq from 'groq'
import { sanityClient } from "../lib/sanity"

interface FrontpageData {
	introduction: {
		role: string
		about_me: InputValue
	}
}

const frontpageQuery = groq`
{
	"introduction" : *[_type == "whoami" ] {
		role,
		about_me
	}[0],
}`

export const fetchFrontpageData = async () => await sanityClient.fetch<FrontpageData>(frontpageQuery)
