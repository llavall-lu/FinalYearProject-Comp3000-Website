import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSelectedTheme] = useState(0);
  const [theme, setTheme] = useState(themes[selectedTheme]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapsedSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setTheme(themes[selectedTheme]);
  }, [selectedTheme]);

  const contextValues = {
    theme,
    isLoading,
    modal,
    openModal,
    closeModal,
    collapsed,
    collapsedSidebar,
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);