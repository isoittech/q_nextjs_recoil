import { atom, selector } from "recoil";

// export const currentDataSheetState = selector<string>({
//   key: "CurrentDataSheet",
//   get: async ({ get }) => {
// //     const { dataSheet } = await getDataSheet({
// //       filepath: get(currentDataSheetPathState),
// //     });
//     // const { dataSheet } = await dataSheetApi.getDataSheet({
//     //   filepath: get(currentDataSheetPathState),
//     // } as GetDataSheetRequest);
//     return dataSheet;
//   },
// });

export const currentDataPathState = atom<string>({
  key: "CurrentDataPath",
  default: "data",
});
