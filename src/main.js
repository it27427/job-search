import App from "@/App.vue";
import { createApp } from "vue";

// IMPORT TAILWIND CSS
import "@/assets/css/tailwind.css";
// IMPORT CUSTOM STYLES
import "@/scss/style.scss";

const app = createApp(App);

app.mount("#app");
