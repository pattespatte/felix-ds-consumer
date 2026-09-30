import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import StartView from "./views/StartView.vue";
import FormsView from "./views/FormsView.vue";
import TableView from "./views/TableView.vue";
import FeedbackView from "./views/FeedbackView.vue";
import { routes } from "./routes";

// Component wiring per route; titles live in routes.ts (single source).
const components = {
    start: StartView,
    formular: FormsView,
    tabeller: TableView,
    atkoppling: FeedbackView,
} as const;

// Hash history: no server rewrite needed wherever the app is hosted.
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes.map(
        (route): RouteRecordRaw => ({
            path: route.path,
            name: route.name,
            component: components[route.name as keyof typeof components],
            meta: { title: route.title },
        }),
    ),
});

router.afterEach((to) => {
    document.title = to.meta.title
        ? `${to.meta.title} – felix-ds-konsument`
        : "felix-ds-konsument";
});

export default router;
