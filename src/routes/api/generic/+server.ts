import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

const slugPrefix = '/'

async function getAllPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/submodules/obsidian-notes/One Stone/**/*.md', { eager: true })

	console.log(paths)

	for (const path in paths) {
		const file = paths[path]
		const slug = slugPrefix + path.split('/').slice(4).join('/').replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post: Post = { ...metadata, slug }
			if (post.title === undefined) {
				post.title = post.slug.replace(slugPrefix, '')
			}
			// if (post.published) posts.push(post)
			posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.created).getTime() - new Date(first.created).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getAllPosts()
	return json(posts)
}