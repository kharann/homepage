import { Fetch, Parameter, getFetchUrl } from '$lib/sanity';
import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
import groq from 'groq';
import type { QueryResult } from './types';

export interface PreviewPost {
	_createdAt: string;
	title: string;
	slug: string;
	estimatedReadingTime: number;
}
export const allPostsQuery = groq`
		*[_type == "posts" && !(_id in path("drafts.**"))] {
			_createdAt,
			title,
			"slug": slug.current,
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
		}
	`;

export const fetchAllPosts = async (
	fetch: Fetch,
	parameters?: Parameter
): Promise<QueryResult<PreviewPost[]>> => {
	const url = getFetchUrl(allPostsQuery, parameters);
	const res = await fetch(url);
	const data = await res.json();
	return { data: data.result, status: res.status, ok: res.ok };
};
