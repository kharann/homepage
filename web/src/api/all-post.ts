import { getFetchUrl } from '@lib/sanity';
import groq from 'groq';
import type { SanityDataFetcher } from './types';

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

export const fetchAllPosts: SanityDataFetcher<PreviewPost[]> = async (fetch, parameters?) => {
	const url = getFetchUrl(allPostsQuery, parameters);
	const res = await fetch(url);
	const data = await res.json();
	return { data: data.result, status: res.status, ok: res.ok };
};
