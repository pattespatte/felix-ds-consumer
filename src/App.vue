<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FNavigationMenu, type NavigationMenuItem } from "@fkui/vue";
import { routes } from "./routes";
import ColorModeToggle from "./components/ColorModeToggle.vue";
import SiteFooter from "./components/SiteFooter.vue";

// FNavigationMenu works with named routes: `route` = RouteRecord.name.
const menuRoutes = computed<NavigationMenuItem[]>(() =>
    routes.map((route) => ({ label: route.title, route: route.name })),
);

const router = useRouter();
const route = useRoute();
const currentRoute = ref<string>(String(route.name ?? ""));

watch(
    () => route.name,
    (name) => {
        currentRoute.value = String(name ?? "");
    },
);

function onSelectedRoute(selected: string): void {
    router.push({ name: selected });
}
</script>

<template>
    <div class="app-shell">
        <header class="app-header">
            <a class="app-header__home" href="#/">felix-ds-konsument</a>
            <f-navigation-menu
                v-model:route="currentRoute"
                class="app-header__nav"
                menu-aria-label="Huvudnavigation"
                :routes="menuRoutes"
                @selected-route="onSelectedRoute"
            />
            <color-mode-toggle class="app-header__mode" />
        </header>

        <main class="app-main" id="main-content">
            <router-view />
        </main>

        <site-footer />
    </div>
</template>

<style scoped>
/* Shell layout: every value is a theme token (per the create-a-site guide's
   dark-mode rule – no raw colors), so both color modes flip for free. */
.app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.app-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding: 1rem 1.5rem;
    background-color: var(--fkds-color-background-secondary, #f4f5f7);
    border-bottom: 1px solid var(--fkds-color-border-weak, #d7d9e0);
}

.app-header__home {
    font-weight: 600;
    text-decoration: none;
}

/* Menu styling comes from FKUI's stylesheet (token-mapped by the theme), so
   it flips correctly per color mode. */

.app-header__mode {
    margin-left: auto;
}

.app-main {
    flex: 1;
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    box-sizing: border-box;
}
</style>
