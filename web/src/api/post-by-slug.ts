import { getFetchUrl, sanityClient } from '@lib/sanity';
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

const postBySlugQuery = groq`
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

export const fetchPostBySlug = async (slug: string) =>
	sanityClient.fetch(postBySlugQuery, { slug });
