<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="flex">
	<!-- Posts List -->
	<section class="flex-1 overflow-y-auto p-4">
		<ul class="flex flex-col space-y-8">
			{#each data.posts as post}
				<a
					href={post.slug}
					class="block p-6 border border-base-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-100"
					id={`section-${post.title[0].toUpperCase()}`}
				>
					<li class="cursor-pointer">
						<h2 class="text-2xl text-white underline">{post.title}</h2>
						<p class="text-sm text-secondary mt-2">{formatDate(post.date)}</p>
						<p class="mt-4 text-base text-neutral-content">{post.description}</p>
					</li>
				</a>
			{/each}
		</ul>
	</section>
</div>

<style>
	a:hover .text-white {
		font-weight: bold;
	}
</style>
