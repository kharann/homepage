import type { PreviewPost } from '@api/all-post'
import type { RequestHandler } from './__types'
import { fetchIntroAndPosts } from '@api/frontpage'

interface HomePageProps {
	posts: PreviewPost[]
	role: string
	description: string
}

export const get: RequestHandler<HomePageProps> = async () => {
	const data = await fetchIntroAndPosts()
	return {
		body: {
			posts: data.latest_posts,
			...data.introduction
		},
		status: 200
	}
}
