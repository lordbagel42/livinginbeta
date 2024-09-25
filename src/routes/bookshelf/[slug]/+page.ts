import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../submodules/obsidian-notes/One Stone/bookshelf-to-blog/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata,
			title: params.slug
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
