<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	let isMobile = false;

	onMount(() => {
		console.log('mounted');

		const phrases = [
			{ text: 'hates', deleteAfter: 150, typeAfter: 200 },
			{ text: 'loves technology', deleteAfter: 650, typeAfter: 650 },
			{ text: 'hangs out in VR', deleteAfter: 650, typeAfter: 650 },
			{ text: 'creates content', deleteAfter: 650, typeAfter: 650 },
			{ text: 'loves friends', deleteAfter: 650, typeAfter: 650 },
			{ text: 'sucks at programming', deleteAfter: 650, typeAfter: 650 },
			{ text: 'is gay af :3', deleteAfter: 70, typeAfter: 200 },
			{ text: 'is lazy (in a good way)', deleteAfter: 650, typeAfter: 650 }
		];

		const typeItInstance = new TypeIt('#typewriter', {
			lifeLike: false,
			speed: 80,
			deleteSpeed: 40,
			loop: true,
			loopDelay: 650
		});

		phrases.forEach(({ text, deleteAfter, typeAfter }) => {
			typeItInstance.type(text).pause(deleteAfter).delete(text.length).pause(typeAfter);
		});

		typeItInstance.go();

		const checkMobile = () => {
			isMobile = window.matchMedia('(max-width: 640px)').matches;
			updateCardCollapse();
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	const cards = writable([
		{
			title: 'My Story',
			content: `Hey there. I'm a web developer, programmer, and robotics enthusiast. I've been programming
			since I was 8 years old, but only began making websites at just under 14. I love to create
			things, and I'm always looking for new projects to work on.`,
			collapsed: false
		},
		{
			title: 'Other thing',
			content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam, atque culpa,
			molestias ipsum assumenda dolores voluptas illo consequuntur modi ducimus blanditiis!
			Reprehenderit officia tenetur eos cupiditate excepturi illum rerum.`,
			collapsed: false
		}
	]);

	function updateCardCollapse() {
		cards.update((cards) => {
			return cards.map((card) => ({
				...card,
				collapsed: isMobile ? card.collapsed : false
			}));
		});
	}

	function toggleCollapse(index: number) {
		cards.update((cards) => {
			if (isMobile) {
				cards[index].collapsed = !cards[index].collapsed;
			}
			return cards;
		});
	}
</script>

<div class="flex justify-center items-center h-view">
	<div class="text-center">
		<p class="text-6xl">Hi.</p>
		<h1 class="text-xl mt-2">
			I'm <b>Sylvie.</b> I'm just another person that <span id="typewriter"></span>
		</h1>
	</div>
</div>

<div class="flex flex-wrap justify-center gap-4">
	{#each $cards as card, index}
		<div
			class="card w-full sm:w-1/3 bg-base-200 shadow-xl transition-all duration-300"
			class:collapsed={card.collapsed}
		>
			<div class="card-body p-4">
				<!-- Added padding -->
				<h4 class="card-title text-2xl flex justify-between items-center">
					<!-- Added margin-bottom -->
					{card.title}
					{#if isMobile}
						<button
							class="btn btn-sm btn-circle btn-ghost transform transition-transform duration-300 sm:hidden"
							class:rotate-180={card.collapsed}
							on:click={() => toggleCollapse(index)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 9l6 6 6-6"
								/>
							</svg>
						</button>
					{/if}
				</h4>
				{#if !card.collapsed}
					<p transition:slide={{ axis: 'y' }} class="text-xl">{card.content}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	@media (max-width: 640px) {
		.card {
			width: 100%;
		}
	}
</style>
