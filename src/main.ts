import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("css", css);

createApp(App).use(pinia).use(hljsVuePlugin).mount("#app");
