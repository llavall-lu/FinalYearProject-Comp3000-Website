"use client";
import Blogs from "./Components/Blogs/Blogs";
import { useGlobalState } from "./context/GlobalContextProvider";

export default function Home() {
  const { blogs } = useGlobalState();
  return <Blogs title="" blogs={blogs} />;
}
