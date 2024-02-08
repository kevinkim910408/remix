import { test, expect } from "@playwright/test";

test("Home page with a button", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Click me" }).click();
});
