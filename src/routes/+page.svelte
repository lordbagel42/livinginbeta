<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

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
	});
</script>

<div class="flex justify-center items-center h-view">
	<div class="text-center">
		<p class="text-6xl">Hi.</p>
		<h1 class="text-xl mt-2">
			I'm <b>Sylvie.</b> I'm just another person that <span id="typewriter"></span>
		</h1>
	</div>
</div>

<div class="flex justify-center">
	<div class="w-1/2 flex justify-center">
		<div class="card w-1/2 bg-base-100 shadow-xl">
			<div class="card-body">
				<h4 class="card-title text-2xl">My Story</h4>
				<p class="text-xl">
					Hey there. I'm a web developer, programmer, and robotics enthusiast. I've been programming
					since I was 8 years old, but only began making websites at just under 14. I love to create
					things, and I'm always looking for new projects to work on.
				</p>
			</div>
		</div>
	</div>
	<div class="w-1/2 flex justify-center">
		<div class="card w-1/2 bg-base-100 shadow-xl">
			<div class="card-body">
				<h4 class="card-title">Other thing</h4>
				<p class="text-xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam, atque culpa,
					molestias ipsum assumenda dolores voluptas illo consequuntur modi ducimus blanditiis!
					Reprehenderit officia tenetur eos cupiditate excepturi illum rerum.
				</p>
			</div>
		</div>
	</div>
</div>
