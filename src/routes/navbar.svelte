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

<nav class="navbar bg-base-100 shadow-md lg:w-full" aria-label="Main Navigation">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl">sylvie</a>
	</div>
	<div class="navbar-end">
		<!-- hidden on small screens -->
		<div class="hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				{#each items as item}
					<li>
						{#if hasSubmenu(item)}
							<details class="group">
								<summary class="cursor-pointer flex justify-between items-center">
									{item.label}
								</summary>
								<ul class="p-2 bg-base-100 rounded-box shadow-lg">
									{#each item.submenu ?? [] as subitem}
										<li>
											<a class="block p-1 hover:bg-base-900" href={subitem.link}>{subitem.label}</a>
										</li>
									{/each}
								</ul>
							</details>
						{:else}
							<a class="hover:underline" href={item.link}>{item.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Hamburger menu for small screens -->
		<div class="dropdown lg:hidden">
			<button tabindex="0" class="btn btn-ghost" aria-label="Toggle Menu">
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
				class="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow-lg bg-base-100 rounded-box w-52 right-0"
				aria-hidden="true"
				aria-label="Menu"
			>
				{#each items as item}
					<li>
						{#if hasSubmenu(item)}
							<button
								aria-haspopup="true"
								aria-expanded="false"
								class="flex justify-between w-full"
							>
								{item.label}
							</button>
							<ul class="p-2">
								{#each item.submenu ?? [] as subitem}
									<li>
										<a class="block p-1 hover:bg-base-900" href={subitem.link}>{subitem.label}</a>
									</li>
								{/each}
							</ul>
						{:else}
							<a class="block p-1 hover:bg-base-200" href={item.link}>{item.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
