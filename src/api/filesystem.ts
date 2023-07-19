import {readdir} from "fs-extra"
import {join} from "path";

class FsApi {
  async listItems(dir:string):Promise<string[]> {
    return await readdir(dir);
  }
}

export const fsApi = new FsApi();
