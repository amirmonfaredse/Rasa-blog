"use client";

import dynamic from "next/dynamic";
const NavigationHeader = dynamic(() => import("./NavigationHeader"), {
  ssr: false,
});
function NavigationLoader() {
  return <NavigationHeader />;
}

export default NavigationLoader;
