"use client";
import { useEffect } from "react";
import { useSliderContext } from "../../_providers/NavigationProvider";

function SideLayoutContainer({ children }) {
  const { openDrawer } = useSliderContext();

  return (
    <div
      style={{ right: openDrawer ? 0 : -240 }}
      className="top-20 absolute md:static md:flex duration-300"
    >
      {children}
    </div>
  );
}

export default SideLayoutContainer;
