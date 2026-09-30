import { defineConfig } from "@playwright/test";

// Minimal gate for the consumer app itself: axe scans of every page in both
// color modes. Doubles as regression safety for FKUI/theme bumps.
export default defineConfig({
    testDir: "e2e",
    projects: [
        {
            name: "chromium",
            use: { browserName: "chromium" },
        },
    ],
    webServer: {
        command: "bun run dev -- --port 5275 --strictPort",
        url: "http://localhost:5275",
        reuseExistingServer: true,
    },
    use: {
        baseURL: "http://localhost:5275",
        viewport: { width: 1280, height: 800 },
        colorScheme: "light",
    },
});
