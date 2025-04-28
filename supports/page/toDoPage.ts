import { Page } from "index";
import { AddItemPage } from "@pageObjects/addItem/addItemPage";
import { CompletedItemPage } from "@pageObjects/completedItem/completedItemPage";
import { ToDoTasksPage } from "@pageObjects/toDoTasks/toDoTasksPage";
import { ToDoCommonPage } from "@pageObjects/toDo/toDoPage";

let onAddItemPage: AddItemPage;
let onCompletedItemPage: CompletedItemPage;
let onToDoTasksPage: ToDoTasksPage;
let onToDoCommonPage: ToDoCommonPage;

export class ToDoPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    onAddItemPage = new AddItemPage(page);
    onCompletedItemPage = new CompletedItemPage(page);
    onToDoTasksPage = new ToDoTasksPage(page);
    onToDoCommonPage = new ToDoCommonPage(page);
  }

  public async gotoToDoList() {
    await onToDoCommonPage.gotoToDoPage();
    await onToDoCommonPage.verifyPage();
  }

  public async addItem(item: string) {
    await onAddItemPage.fillToDoItem(item);
    await onAddItemPage.clickAddItem();

    await onToDoTasksPage.clickToDoTasksTab();
    await onToDoTasksPage.verifyToDoTasks(item);
  }

  public async completeToDoItem(item: string) {
    await onToDoTasksPage.clickToDoTasksTab();
    await onToDoTasksPage.clickCheckToDoItem();
    await onToDoTasksPage.verifyClickCheckToDoItem();
    await onCompletedItemPage.clickCompletedItemTab();
    await onCompletedItemPage.verifyCompletedItem(item);
  }

  public async deleteToDoItem() {
    await onToDoTasksPage.clickToDoTasksTab();
    await onToDoTasksPage.clickDeleteButton();
    await onToDoTasksPage.verifyClickDeleteButton();
  }

  public async deleteCompletedItem() {
    await onCompletedItemPage.clickCompletedItemTab();
    await onCompletedItemPage.clickDeleteCompleteItemButton();
    await onCompletedItemPage.verifyDeleteCompletedItem();
  }
}
