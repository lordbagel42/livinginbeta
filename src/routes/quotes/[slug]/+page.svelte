<script lang="ts">
	import { formatDate } from '$lib/utils';

	import '../../../app.css';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
	<!-- Title -->
	<hgroup>
		<h1 class="text-4xl font-bold capitalize">{data.meta.title}</h1>
		<p class="mt-2 text-sm text-gray-500">Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="flex flex-wrap gap-2 mt-5">
		{#each data.meta.categories as category}
			<span class="px-3 py-1 bg-secondary text-secondary-content rounded-full"># {category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose lg:prose-xl mt-8">
		<svelte:component this={data.content} />
	</div>
</article>
