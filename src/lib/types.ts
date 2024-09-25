export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	created: string
	updated: string
	categories: Categories[]
	published: boolean
}

export type Note = Post & {
	deploy: boolean
}

export type Blog = Post