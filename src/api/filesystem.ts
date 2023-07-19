import {readdir} from "fs-extra"
import {join} from "path";

class FsApi {
  async listItems():Promise<string[]> {
	console.log(`dir: ${process.cwd}`)
    return await readdir(join( process.cwd(), "data"));
  }
}

export const fsApi = new FsApi();
