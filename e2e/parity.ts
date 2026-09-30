// Visual parity capture: one full-page screenshot per route × color mode.
// Usage: bun run e2e/parity.ts <output-dir>   (dev server must run on :5275)
// Used for the registry-switch and FKUI-bump visual spot-checks; PNG pairs
// are compared pixel-wise afterwards (see adoption-findings.md).
import { chromium } from "@playwright/test";
import { routes } from "../src/routes";

const COLOR_MODE_STORAGE_KEY = "felix-consumer-color-mode"; // src/color-mode.ts

const outDir = process.argv[2];
if (!outDir) {
    console.error("usage: bun run e2e/parity.ts <output-dir>");
    process.exit(1);
}

const browser = await chromium.launch();
try {
    for (const route of routes) {
        for (const mode of ["light", "dark"] as const) {
            const page = await browser.newPage({
                viewport: { width: 1280, height: 800 },
                colorScheme: "light",
            });
            await page.addInitScript(
                ([key, value]) => localStorage.setItem(key, value),
                [COLOR_MODE_STORAGE_KEY, mode],
            );
            await page.goto(`http://localhost:5275/#${route.path}`);
            await page.waitForLoadState("networkidle");
            await page.screenshot({
                path: `${outDir}/${route.name}-${mode}.png`,
                fullPage: true,
            });
            await page.close();
        }
    }
} finally {
    await browser.close();
}
console.log(`captured 8 pages -> ${outDir}`);
