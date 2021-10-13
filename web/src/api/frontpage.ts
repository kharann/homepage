import { getFetchUrl } from '@lib/sanity';
import groq from 'groq';
import { allPostsQuery } from './all-post';
import type { PreviewPost } from './all-post';
import type { SanityDataFetcher } from './types';

interface FrontpageData {
	introduction: {
		role: string;
		description: string;
	};
	latest_posts: PreviewPost;
}

const frontpageQuery = groq`{
	"introduction" : *[_type == "whoami" ] {
		role,
		description
	}[0],
	"latest_posts": ${allPostsQuery}[0...3] | order(_createdAt asc)
}`;

export const fetchIntroAndPosts: SanityDataFetcher<FrontpageData> = async (fetch, parameters?) => {
	const url = getFetchUrl(frontpageQuery, parameters);
	const res = await fetch(url);
	const data = await res.json();
	return { data: data.result, status: res.status, ok: res.ok };
};
