<script lang="ts">
	import '../app.css';
	import Navbar from './navbar.svelte';
	import Footer from './footer.svelte';

	const projects = {
		label: 'projects',
		projectsLink: '/projects',
		submenu: [
			{ label: 'overview', link: '/projects' },
			{ label: 'project 1', link: '/projects/project1' },
			{ label: 'project 2', link: '/projects/project2' }
		]
	};

	const navbarItems = [
		{ label: 'about me', link: '/about' },
		{ label: 'math', link: '/math' },
		// is part of permanent button { label: 'contact', link: '/contact' },
		{ label: 'flex lab', link: '/flex-lab' },
		{ label: 'games', link: '/games' },
		{ label: 'blog', link: '/blog' },
		...[projects]
	];
</script>

<div
	class="min-h-screen scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-800 scrollbar-w-3 h-16 overflow-y-scroll"
>
	<Navbar items={navbarItems} />

	<div class="min-h-screen">
		<slot />
	</div>

	<Footer />
</div>
