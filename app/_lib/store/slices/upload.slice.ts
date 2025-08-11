import { StateCreator } from "zustand";
import { initUploadManager } from "../initials";
import { StoreType, useAdminStore } from "../store";
import { UploadSliceType } from "../../../../types/app/store/types";

export const uploadSlice: StateCreator<
  StoreType,
  [
    ["zustand/subscribeWithSelector", never],
    ["zustand/devtools", never],
    ["zustand/immer", never]
  ],
  [],
  UploadSliceType
> = (set) => ({
  uploadManager: initUploadManager,
  onReadFile: (acceptedFile: File) =>
    set((state) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFile);
      reader.onabort = () => {};
      reader.onerror = () => {};
      reader.onload = () => {
        useAdminStore.setState((state) => {
          state.uploadManager = {
            name: acceptedFile.name as string,
            preview: reader.result as string,
            file: acceptedFile as File,
            size: acceptedFile.size,
            type: acceptedFile.type as string,
          };
        });
      };
    }),
});
