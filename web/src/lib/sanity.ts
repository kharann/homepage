import sanity from '@sanity/client'

const config = {
	projectId: 'r4l4xmqo',
	dataset: 'production',
	apiVersion: 'v2021-11-11', // use current UTC date - see "specifying API version"!
	token: '' // or leave blank for unauthenticated usage
}

export const sanityClient = sanity(config)

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
export type Parameters = {
	[key: string]: string
}
export const getFetchUrl = (query: string, parameters?: Parameters) => {
	let url = `https://${config.projectId}.api.sanity.io/${config.apiVersion}/data/query/${
		config.dataset
	}?query=${encodeURIComponent(query)}`
	if (parameters) {
		// Encode each parameter and add it to the fetch url
		const urlParameters = Object.entries(parameters)
			.map(([key, val]) => `&$${key}=${encodeURIComponent(`"${val}"`)}`)
			.join('')
		url += urlParameters
	}
	return url
}
