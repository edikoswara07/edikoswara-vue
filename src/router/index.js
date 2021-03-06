import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
		},
	},
	{
		path: "/about",
		name: "About",
		component: About,
		meta: {
			title: "About",
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "Page Not Found",
		component: NotFound,
		meta: {
			title: "Page not found",
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
