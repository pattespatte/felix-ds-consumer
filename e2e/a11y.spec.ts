import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "axe-playwright";
import { routes } from "../src/routes";

// Keep in sync with src/color-mode.ts (not imported – that module touches
// window/localStorage at import time, which belongs to the app, not the test).
const COLOR_MODE_STORAGE_KEY = "felix-consumer-color-mode";

type ColorMode = "light" | "dark";

const modes: ColorMode[] = ["light", "dark"];

for (const route of routes) {
    for (const mode of modes) {
        test(`${String(route.name)} [${mode}]`, async ({ page }) => {
            await page.addInitScript(
                ([key, value]) => localStorage.setItem(key, value),
                [COLOR_MODE_STORAGE_KEY, mode],
            );
            await page.goto(`/#${route.path}`);
            await page.waitForLoadState("networkidle");
            await injectAxe(page);
            await checkA11y(page, undefined, undefined, false);
        });
    }
}
