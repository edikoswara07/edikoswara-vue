<template>
	<div class="border-b border-blueGray-300">
		<Container>
			<div class="flex items-center justify-between py-4">
				<span class="text-xl font-semibold text-blueGray-900">
					<router-link to="/">
						Edikoswara
					</router-link>
				</span>
				<div class="hidden md:block">
					<NavbarMenu></NavbarMenu>
				</div>
				<div class="block md:hidden">
					<span
						@click="toggleClass()"
						:class="[isActive ? 'block' : 'hidden']"
					>
						<vue-feather type="align-right"></vue-feather>
					</span>

					<span
						@click="toggleClass()"
						:class="[isActive ? 'hidden' : 'block']"
					>
						<vue-feather type="x"></vue-feather>
					</span>
				</div>
			</div>

			<div
				class="block md:hidden -mt-2"
				:class="[isActive ? 'hidden' : 'block']"
			>
				<NavbarMenu></NavbarMenu>
			</div>
		</Container>
	</div>
</template>

<script>
import Container from "./Container.vue";
import NavbarMenu from "./NavbarMenu.vue";
export default {
	name: "Navbar",
	components: {
		Container,
		NavbarMenu,
	},

	data() {
		return {
			isActive: true,
		};
	},
	methods: {
		toggleClass() {
			this.isActive = !this.isActive;
		},
	},
};
</script>

<style></style>
