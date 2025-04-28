import { FSExtra } from "@plugins/fsExtra";

const onFSExtra: FSExtra = new FSExtra();

class FileExtensionUtil {
  public async readDataFromJsonFile(pathToFile: string) {
    return await onFSExtra.readDataSyncFromJsonFile(pathToFile);
  }
  public async readTestDataFromFixture(pathToFile: string) {
    return await onFSExtra.readDataSyncFromJsonFile(`resources/testData/${pathToFile}`);
  }
  public async readExpectedResultFromFixture(pathToFile: string) {
    return await onFSExtra.readDataSyncFromJsonFile(`resources/expectedResult/${pathToFile}`);
  }
  public async readPrepareDataFromFixture(pathToFile: string) {
    return await onFSExtra.readDataSyncFromJsonFile(`resources/prepareData/${pathToFile}`);
  }
}
export const onFileExtensionUtil: FileExtensionUtil = new FileExtensionUtil();
