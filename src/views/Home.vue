<template>
	<Navbar />
	<Hero></Hero>
	<About :datas="datas"></About>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../parts/Hero.vue";
import About from "../parts/About.vue";
export default {
	name: "Home",
	data() {
	return {
		datas: 
			{
				title: "Tentang Edi Koswara",
				image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
				description: "I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.",
			}
		}
	},
	components: {
		Navbar,
		Hero,
		About
	},
};
</script>

<style></style>
