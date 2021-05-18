<template>
	<Container>
		<div class="flex flex-col items-center justify-between py-12 md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-12">
			<div class="w-full md:w-6/12">
				<h1 class="text-5xl font-semibold text-blueGray-900">
					Howdy
				</h1>
				<p
					class="mt-6 text-base font-medium leading-relaxed text-blueGray-700 md:max-w-sm"
				>
					Aku <span class="font-semibold">Edi Koswara</span>, web
					developer. seorang kreatif untuk membangun website impian
					anda.
				</p>

				<div
					class="my-8"
				>
					<router-link to="/">
						<a class="px-6 py-3 text-base font-semibold bg-blueGray-900 text-blueGray-100 hover:bg-blueGray-300 hover:text-blueGray-900 rounded-md">Lihat Profile</a>
					</router-link>
				</div>
			</div>
			<div class="w-full md:w-6/12">
				<div class="grid grid-cols-2 gap-4">
					<div class="w-full h-48 col-span-2">
						<img :src="imageHero.imageHero1" alt="imageHero"
						class="inset-0 object-cover object-center w-full h-full rounded-xl">
					</div>
					<div class="w-full h-28">
						<img :src="imageHero.imageHero2" alt="imageHero"
						class="inset-0 object-cover object-center w-full h-full rounded-xl">
					</div>
					<div class="w-full h-28">
						<img :src="imageHero.imageHero3" alt="imageHero"
						class="inset-0 object-cover object-center w-full h-full rounded-xl">
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script>
import Container from "../components/Container.vue";

export default {
	name: "Hero",
	data() {
		return {
			imageHero: {
				imageHero1: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
				imageHero2:
				"https://images.unsplash.com/photo-1562683687-80cb85c493b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
				imageHero3: "https://images.unsplash.com/photo-1593526492327-b071f3d5333e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZGF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			}
		}
	},
	props: [],
	components: {
		Container,
	},
};
</script>

<style></style>
