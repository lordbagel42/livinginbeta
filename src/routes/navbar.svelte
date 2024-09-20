<script lang="ts">
	// Define the types for submenu items and main menu items
	type SubmenuItem = {
		label: string;
		link: string;
	};

	type MenuItem = {
		label: string;
		link?: string;
		submenu?: SubmenuItem[];
	};

	export let items: MenuItem[] = [];

	const hasSubmenu = (item: MenuItem): boolean => Boolean(item.submenu && item.submenu.length > 0);
</script>

<nav class="navbar bg-base-100" aria-label="Main Navigation">
	<div class="navbar-start">
		<!-- hidden on large screens -->
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost lg:hidden" aria-label="Toggle Menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</button>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				aria-hidden="true"
				aria-label="Menu"
			>
				{#each items as item}
					<li>
						{#if hasSubmenu(item)}
							<button aria-haspopup="true" aria-expanded="false">{item.label}</button>
							<ul class="p-2">
								{#each item.submenu ?? [] as subitem}
									<li><a href={subitem.link}>{subitem.label}</a></li>
								{/each}
							</ul>
						{:else}
							<a href={item.link}>{item.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">sylviethedev</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<!-- hidden on small screens -->
		<ul class="menu menu-horizontal px-1">
			{#each items as item}
				<li>
					{#if hasSubmenu(item)}
						<details>
							<summary>{item.label}</summary>
							<ul class="p-2">
								{#each item.submenu ?? [] as subitem}
									<li><a href={subitem.link}>{subitem.label}</a></li>
								{/each}
							</ul>
						</details>
					{:else}
						<a href={item.link}>{item.label}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end">
		<!-- always shown -->
		<button class="btn">Contact</button>
	</div>
</nav>
