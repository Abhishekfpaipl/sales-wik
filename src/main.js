import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import observe from "./directives/v-observe.js";

// Create the app instance
const app = createApp(App);

// Register the custom directive
app.directive('observe', observe);

// Use router and store
app.use(store).use(router);

// Mount the app
app.mount("#app");
