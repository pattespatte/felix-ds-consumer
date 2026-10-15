import { createApp } from "vue";
import "@fkui/icon-lib-default/dist/f";
import "@fkui/design/lib/fkui.css";
import "@fkui/design/lib/fonts.css";
import "@pattespatte/felix-ds/dist/felix.css";
import "./assets/main.css";
import { ValidationPlugin } from "@fkui/vue";
import App from "./App.vue";
import router from "./router";
import { restoreColorMode } from "./color-mode";

// Restores the persisted color-mode choice (or the system preference) before
// the app mounts; the inline script in index.html already applied the
// attribute pre-paint, this keeps the module state in sync.
restoreColorMode();

const app = createApp(App);
app.use(router);
app.use(ValidationPlugin);
app.mount("#app");
