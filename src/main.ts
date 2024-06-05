import { createApp } from "vue";

import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createPinia } from "pinia";
import { router } from "./route";

import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./plugins/firebase";

import App from "./App.vue";

import "./assets/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(autoAnimatePlugin);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
