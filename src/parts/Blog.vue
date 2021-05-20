<template>
	<div class="py-12 my-12">
		<Container>
			<div class="flex flex-col items-center justify-center space-y-4">
				<h3
					class="text-2xl font-semibold md:text-4xl text-blueGray-900"
				>
					From Blog
				</h3>
				<p
					class="text-base font-medium text-center md:text-lg text-blueGray-700"
				>
					membaca adalah seni untuk membuat anda pusing akan pikiran
					saya meheheheh
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 mt-12">
				<div
					class="w-full p-4 bg-blueGray-100 rounded-lg shadow-md"
					v-for="data in blogDatas"
					:key="data.id"
				>
					<div class="w-full h-48 lg:h-60 relative">
						<div
							class="absolute top-2 right-2 py-2 text-sm px-6 font-semibold bg-blueGray-900 text-blueGray-100 rounded-lg"
						>
							{{ data.tag }}
						</div>
						<img
							:src="data.image"
							alt="blogImage"
							class="object-cover object-center h-full w-full inset-0 rounded-lg"
						/>
					</div>
					<h3
						class="text-base md:text-lg font-semibold text-blueGray-900 py-6"
					>
						{{ data.title }}
					</h3>
					<div>
						<p
							class="text-sm text-blueGray-700 font-medium leading-relaxed"
						>
							{{ data.content.substring(0, 120) }}...
							<i>baca selengkapnya</i>
						</p>
					</div>
					<div class="flex justify-between items-center mt-10">
						<div class="inline-flex items-center">
							<div class="relative w-8 h-8">
								<div
									class="absolute w-8 h-8 rounded-full ring-1 ring ring-offset-1"
								></div>
								<img
									:src="data.imageAuthor"
									alt="blog"
									class="inset-0 object-cover object-center w-full h-full rounded-full"
								/>
							</div>
							<h3
								class="ml-2 text-blueGray-700 font-medium text-sm"
							>
								{{ data.author }}
							</h3>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>

<script>
import Container from "../components/Container.vue";
export default {
	name: "Blog",
	props: ["blogDatas"],
	data() {
		return {
			image:
				"https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			title: "Panda is awesome",
			text:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim vel eum modi atque temporibus alias, natus officia ratione delectus quam recusandae id. Ex facilis repellat ipsa? Rerum, autem aliquid.",
		};
	},
	components: {
		Container,
	},
};
</script>

<style></style>
