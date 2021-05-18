<template>
<Container>
	<div class="flex flex-col-reverse items-center justify-between my-16 md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0">
	<div class="w-full md:w-6/12">
		<div>
			<img :src="datas.image" alt="aboutImage" class="inset-0 object-cover object-center w-full h-96 rounded-xl">
		</div>
	</div>
	<div class="w-full md:w-6/12">
		<h3 class="text-2xl font-semibold lg:text-4xl text-blueGray-900">{{datas.title}}</h3>
		<p class="my-4 text-base font-medium leading-relaxed text-blueGray-700">{{datas.description}}</p>
	</div>
	</div>
</Container>
</template>

<script>
import Container from "../components/Container.vue";

export default {
	name: "About",
	props:['datas'],
	components: {Container}
}
</script>

<style>

</style>
