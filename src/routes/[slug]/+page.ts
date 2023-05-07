import { error } from '@sveltejs/kit'
import type { Post } from '$lib/types';


export const load = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata as Omit<Post,'slug'>
		}
	} catch (err) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
