export default class LocatorCompletedItemPage {
  public static readonly locator: Record<string, string> = {
    btnCompletedItemTab: "//html/body/div[1]/div/div[1]/a[3]",
    lblCompletedItem: "//*[@id='completed-tasks']/li[1]/span",
    btnDeleteCompletedItem: "//*[@id='1']",
  };
}
