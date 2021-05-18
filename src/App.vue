<template>
	<Layout>
		<router-view></router-view>
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
	defaultTitle: "Edi Koswara",
	name: "App",
	components: {
		Layout,
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = to.meta.title || this.defaultTitle;
			},
		},
	},
};
</script>

<style></style>
