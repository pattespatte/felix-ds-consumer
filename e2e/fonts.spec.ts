import { test, expect } from "@playwright/test";

// The five @font-face rules shipped by @pattespatte/felix-ds
// (src/fonts/_fonts.scss): Noto Sans regular/italic in 400 and 600 for body
// text, plus Roboto Slab 600 for headings.
const fontFaces = [
    { family: "Noto Sans", weight: "400", style: "normal" },
    { family: "Noto Sans", weight: "400", style: "italic" },
    { family: "Noto Sans", weight: "600", style: "normal" },
    { family: "Noto Sans", weight: "600", style: "italic" },
    { family: "Roboto Slab", weight: "600", style: "normal" },
];

test("felix-ds font faces load", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    for (const face of fontFaces) {
        const loaded = await page.evaluate(async ({ family, weight, style }) => {
            const spec = `${style} ${weight} 1rem "${family}"`;
            await document.fonts.load(spec);
            return document.fonts.check(spec);
        }, face);
        expect(loaded, `${face.style} ${face.weight} ${face.family}`).toBe(true);
    }
});

test("body text renders in Noto Sans", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const family = await page.evaluate(() =>
        getComputedStyle(document.body).fontFamily,
    );
    expect(family.toLowerCase()).toContain("noto sans");
});
