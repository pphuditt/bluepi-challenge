import { expect, Page } from "index";
import LocatorCompletedItemPage from "./locatorCompletedItemPage";

export class CompletedItemPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async clickCompletedItemTab() {
    await this.page.locator(LocatorCompletedItemPage.locator.btnCompletedItemTab).click();
  }

  public async clickDeleteCompleteItemButton() {
    await this.page.locator(LocatorCompletedItemPage.locator.btnDeleteCompletedItem).click();
  }

  public async verifyDeleteCompletedItem() {
    await expect(this.page.locator(LocatorCompletedItemPage.locator.lblCompletedItem)).not.toBeVisible();
  }

  public async verifyCompletedItem(item: string) {
    await expect(this.page.locator(LocatorCompletedItemPage.locator.lblCompletedItem)).toContainText(item);
  }
}
