import { getFileListItems } from "@/app/server-functions";
import { currentDataPathState } from "@/recoil/filesystem";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const useFilesystem = () => {
  const [fileItems, setFileItems] = useState([] as string[]);
  const currentDir = useRecoilValue(currentDataPathState);

  useEffect(() => {
    const data = async () => {
      const items = await getFileListItems(currentDir);
      setFileItems(items);
    };
    data();
  }, [currentDir]);

  return { fileItems };
};
