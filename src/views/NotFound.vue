<template>
	<div class="min-h-screen w-full bg-blueGray-300">
		<Container>
			<div
				class="flex flex-col min-h-screen w-full items-center justify-center space-y-8"
			>
				<h1 class="text-2xl sm:text-3xl font-bold text-blueGray-900">
					Page Not Found
				</h1>
				<router-link to="/">Go back</router-link>
			</div>
		</Container>
	</div>
</template>

<script>
import Container from "../components/Container.vue";
export default {
	name: "Not Found",
	components: {
		Container,
	},
};
</script>

<style></style>
