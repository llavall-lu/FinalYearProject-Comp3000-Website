import React, { createContext, useState, useContext, useEffect } from "react";
import themes from "./themes";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSelectedTheme] = useState(0);
  const [theme, setTheme] = useState(themes[selectedTheme]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapsedSidebar = () => {
    setCollapsed(!collapsed);
  };

  const allBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/blogs");

      if (response.data.error) {
        console.error(response.data.error);
      } else {
        // Add user information to each blog item
        const blogsWithUser = response.data.map(blog => ({
          ...blog,
          user: user // Add the logged-in user information
        }));
        setBlogs(blogsWithUser);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  useEffect(() => {
    if (user) allBlogs();
  }, [user]);

  useEffect(() => {
    setTheme(themes[selectedTheme]);
  }, [selectedTheme]);

  const contextValues = {
    theme,
    blogs,
    isLoading,
    modal,
    openModal,
    closeModal,
    collapsed,
    collapsedSidebar,
    allBlogs,
    selectedBlog,
    setSelectedBlog
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
