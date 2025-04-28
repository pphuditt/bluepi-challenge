import { expect, Page } from "index";

export class ToDoCommonPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async gotoToDoPage() {
    await this.page.goto("https://abhigyank.github.io/To-Do-List/");
  }

  public async verifyPage() {
    await expect(this.page).toHaveURL("https://abhigyank.github.io/To-Do-List/");
  }
}
