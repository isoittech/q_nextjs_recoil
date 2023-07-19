"use server";

import { fsApi } from "@/api/filesystem";

export async function getFileListItems(dir:string) {
  return await fsApi.listItems(dir);
}
