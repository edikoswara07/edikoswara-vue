import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueFeather from "vue-feather";

createApp(App)
	.use(router)
	.component(VueFeather.name, VueFeather)
	.mount("#app");
