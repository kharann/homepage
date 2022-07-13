import type { PreviewPost } from '@api/all-post'
import type { RequestHandler } from './__types'
import { fetchFrontpageData } from '@api/frontpage'
import type { InputValue } from '@portabletext/svelte/ptTypes'
import type { Experience } from '@api/all-experience'

interface HomePageProps {
	posts: PreviewPost[]
	role: string
	aboutMeContent: InputValue
	experiences: Experience[]
}

export const get: RequestHandler<HomePageProps> = async () => {
	const data = await fetchFrontpageData()
	const { about_me, role } = data.introduction
	return {
		body: {
			posts: data.latest_posts,
			aboutMeContent: about_me,
			role: role,
			experiences: data.experiences
		},
		status: 200
	}
}
