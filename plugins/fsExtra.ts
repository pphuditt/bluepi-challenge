import * as fsExtra from "fs-extra";

export class FSExtra {
  public async readDataSyncFromJsonFile(pathToFile: string) {
    try {
      const dataObj = await fsExtra.readJsonSync(pathToFile);
      return dataObj;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
