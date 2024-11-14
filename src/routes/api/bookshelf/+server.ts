import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

const slugPrefix = '/bookshelf/'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/markdown/bookshelf-to-blogpost/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = slugPrefix + path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			console.log(file, file.metadata)
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post: Post = { ...metadata, slug }
			if (post.title === undefined) {
				post.title = post.slug.replace(slugPrefix, '')
			}
			if (post.published) posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.created).getTime() - new Date(first.created).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
