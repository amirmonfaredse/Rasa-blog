"use client";

import { createAdminStore } from "(admin)/_stores/adminStore";
import type { AdminStore } from "@/types/app/admin/store";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
export type AdminStoreApi = ReturnType<typeof createAdminStore>;

export const AdminStoreContext = createContext<AdminStoreApi | undefined>(
  undefined
);

export function AdminStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AdminStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAdminStore();
  }

  return (
    <AdminStoreContext.Provider value={storeRef.current}>
      {children}
    </AdminStoreContext.Provider>
  );
}

export const useAdminStore = <T,>(selector: (store: AdminStore) => T): T => {
  const adminStoreContext = useContext(AdminStoreContext);
  if (!adminStoreContext)
    throw new Error(`useStore must be used within StoreProvider`);
  return useStore(adminStoreContext, selector);
};
