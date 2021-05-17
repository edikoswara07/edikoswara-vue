<template>
	<ul
		class="flex flex-col md:flex-row text-sm font-medium my-4 md:my-0 space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-blueGray-500"
	>
		<li v-for="link in links" :key="link">
			<router-link :to="link.path">{{ link.name }}</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "NavbarMenu",
	data() {
		return {
			links: [
				{
					path: "/",
					name: "Home",
					target: "_self",
				},
				{
					path: "/about",
					name: "About",
					target: "_self",
				},
				{
					path: "/blog",
					name: "Blog",
					target: "_self",
				},
				{
					path: "/portofolio",
					name: "Portofolio",
					target: "_self",
				},
				{
					path: "/contact",
					name: "Contact",
					target: "_self",
				},
			],
		};
	},
};
</script>

<style></style>
