"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalContextProvider";
import Blogs from "../Components/Blogs/Blogs";

function page() {
  const { incompleteBlogs } = useGlobalState();
  return <Blogs title="Completed Blogs" blogs={incompleteBlogs} />;
}

export default page;
