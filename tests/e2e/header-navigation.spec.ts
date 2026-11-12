import { expect, test } from "@playwright/test";

test.describe("Header navigation", () => {
  test("shows the Resume action inside the mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuButton = page.getByRole("button", {
      name: "Open navigation menu",
    });

    await expect(menuButton).toBeVisible();
    await expect(page.getByRole("link", { name: "Resume" })).toBeHidden();

    await menuButton.click();

    await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/lucas-oliveira-cv.pdf",
    );
  });

  test("keeps the desktop navigation visible without the menu trigger", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Open navigation menu" }),
    ).toBeHidden();
  });
});
