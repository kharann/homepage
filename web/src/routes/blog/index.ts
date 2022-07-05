import { fetchListPosts } from '@api/all-post';
import type { PreviewPost } from '@api/all-post';
import type { RequestHandler } from './__types';

export const get: RequestHandler<{ posts: PreviewPost[] }> = async () => {
	const data = await fetchListPosts();
	return {
		body: {
			posts: data
		},
		status: 200
	};
};
