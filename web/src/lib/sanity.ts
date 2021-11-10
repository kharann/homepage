import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'r4l4xmqo',
	dataset: 'production',
	apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: true // `false` if you want to ensure fresh data
});

export default client;
