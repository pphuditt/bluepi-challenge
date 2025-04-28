import { Page } from "index";
import LocatorAddItemPage from "./locatorAddItemPage";

export class AddItemPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async clickAddItemTab() {
    await this.page.locator(LocatorAddItemPage.locator.btnAddItemTab).click();
  }

  public async fillToDoItem(item: string) {
    await this.page.getByRole("textbox").fill(item);
  }

  public async clickAddItem() {
    await this.page.locator(LocatorAddItemPage.locator.btnAdd).click();
  }
}
