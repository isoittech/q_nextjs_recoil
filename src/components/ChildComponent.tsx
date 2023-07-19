"use client";

import { debounce } from "lodash";
import { useFilesystem } from "@/hooks/filesystem";
import { currentDataPathState } from "@/recoil/filesystem";
import { useSetRecoilState } from "recoil";
import { useCallback, useState } from "react";

export const ChildComponent = () => {
  const { fileItems } = useFilesystem();
  const setCurrentDir = useSetRecoilState(currentDataPathState);
  const [value, setValue] = useState("");


  const handleDebouncedChange = useCallback(
    debounce((value: string) => {
      console.log(`debounced: ${value}`);
    }, 1000),
    []
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleDebouncedChange(e.target.value);
  };

  return (
    <div style={{ fontSize: "32px" }}>
      <ul style={{ padding: "8px", listStyle: "none" }}>
        {fileItems &&
          fileItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <div style={{ padding: "8px" }}>
        <label>folder:</label>
        <input value={value} onChange={handleChange} />
        <button
          onClick={() => {
            setCurrentDir(value);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
};
