
import groq from 'groq'
import { sanityClient } from "../lib/sanity"

interface FrontpageData {
	introduction: {
		role: string
	}
}

const frontpageQuery = groq`
{
	"introduction" : *[_type == "whoami" ] {
		role
	}[0],
}`

export const fetchFrontpageData = async() => {
const data = await sanityClient.fetch<FrontpageData>(frontpageQuery)
console.log(data)
return data
}
