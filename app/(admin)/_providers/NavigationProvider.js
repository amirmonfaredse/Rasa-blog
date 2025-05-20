"use client";
import { createContext, useContext } from "react";

const NavigationContext = createContext();
export function NavigationContextProvider({ children }) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error("Navigation Context Used Outside Of Provider");
  return context;
}
