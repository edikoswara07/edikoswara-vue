<template>
	<Navbar />
	<Hero></Hero>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../parts/Hero.vue";
export default {
	name: "Home",
	components: {
		Navbar,
		Hero,
	},
};
</script>

<style></style>
