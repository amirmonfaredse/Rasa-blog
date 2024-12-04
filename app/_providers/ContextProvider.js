"use client";
import { createContext, useContext } from "react";

const MainContext = createContext();

export function MainContextProvider({ children }) {
  

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
}

export function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined)
    throw new Error("Main Context Used Outside Of Provider");
  return context;
}
