<template>
	<Layout>
		<router-view></router-view>
	</Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
	name: "App",
	data() {
		return {
			defaultTitle: "Edi Koswara",
		};
	},
	components: {
		Layout,
	},
	watch: {
		$route: {
			immediate: true,
			handler(to) {
				document.title = `${to.meta.title} - ${this.defaultTitle}`;
			},
		},
	},
};
</script>

<style></style>
