import type { PreviewPost } from '@api/all-post'
import type { RequestHandler } from './__types'
import { fetchIntroAndPosts } from '@api/frontpage'
import type { InputValue } from '@portabletext/svelte/ptTypes'

interface HomePageProps {
	posts: PreviewPost[]
	role: string
	aboutMeContent: InputValue
}

export const get: RequestHandler<HomePageProps> = async () => {
	const data = await fetchIntroAndPosts()
	const { about_me, role } = data.introduction
	return {
		body: {
			posts: data.latest_posts,
			aboutMeContent: about_me,
			role: role
		},
		status: 200
	}
}
