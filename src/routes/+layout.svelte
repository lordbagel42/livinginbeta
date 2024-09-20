<script lang="ts">
	import '../app.css';
	import Navbar from './navbar.svelte';
	import Footer from './footer.svelte';

	const projects = {
		label: 'projects',
		submenu: [
			{ label: 'overview', link: '/projects' },
			{ label: 'bagelindustries', link: '/projects/bagelindustries' },
			{ label: 'project 2', link: '/' }
		]
	};

	const navbarItems = [
		{ label: 'about me', link: '/about' },
		{ label: 'other thing', link: '/' },
		// is part of permanent button { label: 'contact', link: '/contact' },
		{ label: 'blog', link: '/blog' },
		{ label: 'quotes', link: '/quotes' },
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
