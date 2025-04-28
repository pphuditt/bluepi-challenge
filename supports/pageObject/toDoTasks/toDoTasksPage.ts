import { expect, Page } from "index";
import LocatorToDoTasksPage from "./locatorToDoTasksPage";

export class ToDoTasksPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async clickToDoTasksTab() {
    await this.page.reload();
    await this.page.locator(LocatorToDoTasksPage.locator.btnToDoTasksTab).click();
  }

  public async clickCheckToDoItem() {
    await this.page.locator(LocatorToDoTasksPage.locator.btnCheckItem).click();
  }

  public async verifyClickCheckToDoItem() {
    await expect(this.page.locator(LocatorToDoTasksPage.locator.lblToDoItem)).not.toBeVisible();
  }

  public async clickDeleteButton() {
    await this.page.getByRole("button", { name: "Delete" }).click();
  }

  public async verifyClickDeleteButton() {
    await expect(this.page.locator(LocatorToDoTasksPage.locator.lblToDoItem)).not.toBeVisible();
  }

  public async verifyToDoTasks(item: string) {
    await expect(this.page.locator(LocatorToDoTasksPage.locator.lblToDoItem)).toBeVisible();
  }
}
