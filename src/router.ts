import { createRouter, createWebHashHistory } from "vue-router";
import StartView from "./views/StartView.vue";
import FormsView from "./views/FormsView.vue";
import TableView from "./views/TableView.vue";
import FeedbackView from "./views/FeedbackView.vue";

// Hash history: no server rewrite needed wherever the app is hosted.
export const routes = [
    { path: "/", name: "start", component: StartView, meta: { title: "Start" } },
    { path: "/formular", name: "formular", component: FormsView, meta: { title: "Formulär" } },
    { path: "/tabeller", name: "tabeller", component: TableView, meta: { title: "Tabeller" } },
    { path: "/atkoppling", name: "atkoppling", component: FeedbackView, meta: { title: "Återkoppling" } },
] as const;

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes],
});

router.afterEach((to) => {
    document.title = to.meta.title ? `${to.meta.title} – felix-ds-konsument` : "felix-ds-konsument";
});

export default router;
