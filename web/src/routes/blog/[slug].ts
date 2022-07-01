
import { fetchPostBySlug, type BlogPost } from "@api/post-by-slug";
import type { RequestHandler } from "./__types/[slug]"

export const get: RequestHandler<{ post: BlogPost }> = async({ params }) => {
        const data = await fetchPostBySlug(params.slug)
		if (data) {
			return {
				body: {
                    post: data
				}
			};
		}

		return {
			status: 404,
			error: new Error("No blog post was found with the given url")
		};
        
}