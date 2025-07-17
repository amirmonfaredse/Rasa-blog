"use client";

import { useAdminStore } from "_lib/store/store";

function SideLayoutContainer({ children }: { children: React.ReactNode }) {
  const drawer = useAdminStore.use.drawerIsOpen();

  return (
    <div
      style={{ right: drawer ? 0 : -240 }}
      className="top-20 absolute md:static md:flex duration-300"
    >
      {children}
    </div>
  );
}

export default SideLayoutContainer;
