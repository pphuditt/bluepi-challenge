import { ToDoPage } from "@pages/toDoPage";
import { AddItemPage } from "@pageObjects/addItem/addItemPage";
import { CompletedItemPage } from "@pageObjects/completedItem/completedItemPage";
import { ToDoTasksPage } from "@pageObjects/toDoTasks/toDoTasksPage";
import { test, onFileExtensionUtil } from "index";

test.describe("UI: To Do List", async () => {
  let onToDoPage: ToDoPage;
  let onAddItemPage: AddItemPage;
  let onCompletedItemPage: CompletedItemPage;
  let onToDoTasksPage: ToDoTasksPage;
  let prepareData: any, expectedResult: Record<string, any>;

  test.beforeAll(async () => {
    prepareData = await onFileExtensionUtil.readTestDataFromFixture("ui/toDoList.json");
  });

  test.beforeEach(async ({ page }) => {
    onToDoPage = new ToDoPage(page);
    onAddItemPage = new AddItemPage(page);
    onCompletedItemPage = new CompletedItemPage(page);
    onToDoTasksPage = new ToDoTasksPage(page);
  });

  test("[BTD-01] To verify that user able to add to-do item", async () => {
    await test.step("Go to https://abhigyank.github.io/To-Do-List/", async () => {
      await onToDoPage.gotoToDoList();
    });

    await test.step("Input item to textbox", async () => {
      await onToDoPage.addItem(prepareData.toDoList.item);
    });
  });

  test("[BTD-02] To verify that user able to view to-do item after add item", async () => {
    await test.step("Go to https://abhigyank.github.io/To-Do-List/", async () => {
      await onToDoPage.gotoToDoList();
    });

    await test.step("Input item to textbox and verify", async () => {
      await onToDoPage.addItem(prepareData.toDoList.item);
      await onToDoTasksPage.verifyToDoTasks(prepareData.toDoList.item);
    });
  });

  test("[BTD-03] To verify that user able to complete to-do item", async () => {
    await test.step("Go to https://abhigyank.github.io/To-Do-List/", async () => {
      await onToDoPage.gotoToDoList();
    });

    await test.step("Input item to textbox", async () => {
      await onToDoPage.addItem(prepareData.toDoList.item);
    });

    await test.step("Click check task", async () => {
      await onToDoPage.completeToDoItem(prepareData.toDoList.item);
    });

    await test.step("Verify complete task", async () => {
      await onCompletedItemPage.verifyCompletedItem(prepareData.toDoList.item);
    });
  });

  test("[BTD-04] To verify that user able to delete To-Do item", async () => {
    await test.step("Go to https://abhigyank.github.io/To-Do-List/", async () => {
      await onToDoPage.gotoToDoList();
    });

    await test.step("Input item to textbox", async () => {
      await onToDoPage.addItem(prepareData.toDoList.item);
    });

    await test.step("Click delete to do task", async () => {
      await onToDoTasksPage.clickDeleteButton();
      await onToDoTasksPage.verifyClickDeleteButton();
    });
  });

  test("[BTD-05] To verify that user able to delete completed item", async () => {
    await test.step("Go to https://abhigyank.github.io/To-Do-List/", async () => {
      await onToDoPage.gotoToDoList();
    });

    await test.step("Input item to textbox", async () => {
      await onToDoPage.addItem(prepareData.toDoList.item);
    });

    await test.step("Input item to textbox", async () => {
      await onToDoPage.completeToDoItem(prepareData.toDoList.item);
    });

    await test.step("Click delete completed task", async () => {
      await onToDoPage.deleteCompletedItem();
    });
  });
});
