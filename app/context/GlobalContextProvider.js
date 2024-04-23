"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];
  const [isLoading, setIsLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const collapsedSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        theme,
        isLoading,
        setIsLoading,
        collapsed,
        collapsedSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);