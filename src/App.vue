<script setup lang="ts">
import { routes } from "./routes";
import ColorModeToggle from "./components/ColorModeToggle.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
    <div class="app-shell">
        <header class="app-header">
            <a class="app-header__home" href="#/">felix-ds-konsument</a>
            <nav aria-label="Huvudnavigation" class="app-header__nav">
                <router-link
                    v-for="route in routes"
                    :key="route.name"
                    class="app-header__link"
                    :to="{ name: route.name }"
                >
                    {{ route.title }}
                </router-link>
            </nav>
            <color-mode-toggle class="app-header__mode" />
        </header>

        <main class="app-main" id="main-content">
            <router-view />
        </main>

        <site-footer />
    </div>
</template>

<style scoped lang="scss">
// Shell layout: every value is a theme token (per the create-a-site guide's
// dark-mode rule – no raw colors), so both color modes flip for free.
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

.app-header__nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

// Link colors come from FKUI's stylesheet (token-mapped by the theme), which
// flips correctly per color mode – setting our own would need a token that
// exists in both mode palettes.
.app-header__link {
    text-decoration: underline;

    &.router-link-active {
        font-weight: 600;
        text-decoration-thickness: 2px;
    }
}

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
