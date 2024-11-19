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

	const flexLab = {
		label: 'flex lab',
		flexLabLink: '/flex-lab',
		submenu: [
			{ label: 'projects', link: '/flex-lab/projects' },
			{ label: 'plans', link: '/flex-lab/plans' },
			{ label: 'reflections', link: '/flex-lab/reflections' }
		]
	};

	const navbarItems = [
		{ label: 'about me', link: '/about' },
		{ label: 'math', link: '/math' },
		// is part of permanent button { label: 'contact', link: '/contact' },
		{ label: 'xlab', link: '/xlab' },
		{ label: 'quilt', link: '/quilt' },
		{ label: 'bookshelf', link: '/bookshelf' },
		{ label: 'blog', link: '/blog' },
		// ...[projects], // removing because idk what my motivation for this was
		...[flexLab]
	];
</script>

<div class="min-h-screen scrollbar">
	<Navbar items={navbarItems} />

	<div class="min-h-screen">
		<slot />
	</div>

	<Footer />
</div>
