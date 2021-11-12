const config = {
	projectId: 'r4l4xmqo',
	dataset: 'production',
	apiVersion: 'v2021-11-11', // use current UTC date - see "specifying API version"!
	token: '' // or leave blank for unauthenticated usage
};

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;
export type Parameter = {
	[key: string]: string;
};
export const getFetchUrl = (query: string, parameters?: Parameter) => {
	let url = `https://${config.projectId}.api.sanity.io/${config.apiVersion}/data/query/${
		config.dataset
	}?query=${encodeURIComponent(query)}`;
	if (parameters) {
		const urlParameters = Object.entries(parameters)
			.map(([key, val]) => `&$${key}=${encodeURIComponent(`"${val}"`)}`)
			.join('');

		url += urlParameters;
	}
	console.log(url);
	return url;
};
