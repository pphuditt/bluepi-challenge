export default class LocatorToDoTasksPage {
  public static readonly locator: Record<string, string> = {
    btnToDoTasksTab: "//html/body/div[1]/div/div[1]/a[2]",
    btnCheckItem: "//*[@id='incomplete-tasks']/li/label/span[4]",
    btnDeleteTasks: "//*[@id='1']",
    lblToDoItem: "//*[@id='text-1']",
  };
}
