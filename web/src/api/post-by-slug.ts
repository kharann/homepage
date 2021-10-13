import { getFetchUrl } from '@lib/sanity';
import type { PortableTextBlocks } from '@portabletext/svelte/ptTypes';
import groq from 'groq';
import type { SanityDataFetcher } from './types';

export interface BlogPost {
	title: string;
	tags: string[];
	content: PortableTextBlocks;
	slug: string;
	estimatedReadingTime: number;
	_createdAt: string;
	_updatedAt: string;
}

export const postBySlugQuery = groq`
		*[_type == "posts" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
			_createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
			tags,
			content,
			"estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )

		}
	`;

export const fetchPostBySlug: SanityDataFetcher<BlogPost> = async (fetch, parameters?) => {
	const url = getFetchUrl(postBySlugQuery, parameters);
	const res = await fetch(url);
	const data = await res.json();
	return { data: data.result, status: res.status, ok: res.ok };
};
