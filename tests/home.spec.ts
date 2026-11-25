import { expect, test } from "@playwright/test";

test("home page responds", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto("/");

  expect(response?.ok()).toBeTruthy();
  await expect(page.locator("main")).toHaveCount(1);
  expect(pageErrors).toEqual([]);
});
