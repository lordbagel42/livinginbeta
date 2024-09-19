<script lang="ts">
	let wordGroups = {
		name: ['sylvie'],
		abstract: {
			food: ['drinks', 'espresso', 'water', 'tea', 'soda', 'food'],
			self: ['leading', 'school', 'encouraging'],
			entertainment: ['netflix', 'video games', 'youtube', 'people', 'plex'],
			miscellaneous: {
				stuff: ['stenography', 'efficiency', 'organization', 'productivity', 'technology'],
				creativity: ['writing', 'reading', 'books', 'friendships', 'learning'],
				enjoyment: [
					'poetry',
					'quilting',
					'photography',
					'woodworking',
					'art',
					'drawing',
					'creation'
				],
				self: {
					pride: ['freedom', 'self', 'lgbtqia+', 'community', 'pride', 'pink', 'blue', 'fashion'],
					visual: ['color', 'tie-dye', 'rainbows']
				}
			}
		},
		creation: {
			digital: [
				'web',
				'design',
				'3d modeling',
				'cnc',
				'sewing',
				'machining',
				'lathes',
				'blender',
				'engineering',
				'onshape',
				'invention',
				'metal milling',
				'robotics',
				'fusion 360'
			],
			physical: {
				values: ['foss', 'oss', 'open source', 'right to repair'],
				servers: [
					'servers',
					'proxmox',
					'virtualization',
					'networking',
					'docker',
					'music',
					'production',
					'audio'
				],
				computers: [
					'typescript',
					'javascript',
					'rust',
					'programming',
					'keyboards',
					'svelte',
					'computers',
					'games'
				]
			}
		}
	};

	function createEllipse(key, values, x, y) {
		return { key, values, x, y };
	}

	let ellipses = [];
	let yOffset = 100;

	ellipses.push(createEllipse('name', wordGroups.name, Math.random() * 800, 50));

	const createNestedEllipses = (obj, parentX, parentY) => {
		for (const [key, value] of Object.entries(obj)) {
			if (Array.isArray(value)) {
				ellipses.push(createEllipse(key, value, parentX, parentY + yOffset));
				parentY += yOffset; // Adjust vertical position for the next ellipse
			} else if (typeof value === 'object') {
				ellipses.push(createEllipse(key, [], parentX, parentY + yOffset));
				createNestedEllipses(value, parentX + 100, parentY + 50); // Nesting further
			}
		}
	};

	createNestedEllipses(wordGroups.abstract, Math.random() * 800, 100);
	createNestedEllipses(wordGroups.creation, Math.random() * 800, 100);
</script>

<div class="w-screen h-screen flex items-center justify-center bg-gray-100">
	<svg width="100%" height="100%">
		{#each ellipses as { key, values, x, y }}
			<g>
				<ellipse
					cx={x}
					cy={y}
					rx="80"
					ry="40"
					class="fill-blue-200 stroke-blue-400 stroke-2 shadow-md"
				/>
				<text
					{x}
					y={y - 10}
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-bold text-lg"
				>
					{key}
				</text>
				{#if values.length}
					{#each values as value}
						<text
							{x}
							y={y + (Math.random() - 0.5) * 40}
							text-anchor="middle"
							dominant-baseline="middle"
							class="text-sm text-gray-700"
						>
							{value}
						</text>
					{/each}
				{/if}
			</g>
		{/each}
	</svg>
</div>

<style>
	svg {
		border: 1px solid #ccc;
	}
</style>
