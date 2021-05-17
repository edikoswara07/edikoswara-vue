<template>
	<ul
		class="flex flex-col text-sm font-medium md:flex-row my-4 md:my-0 md:space-y-0 space-x-0 text-blueGray-500"
	>
		<li
			v-for="link in links"
			:key="link"
			class="py-3 px-4 hover:bg-blueGray-300 rounded-md"
		>
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
<style></style>
