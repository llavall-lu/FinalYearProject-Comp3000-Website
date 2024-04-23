import React from "react";
import styled from "styled-components";
import BlogObject from "../BlogObject/BlogObject";
import { plusA } from "@/app/utils/icons";
import Modal from "../modal/Modal";
import CreateBlog from "../modal/CreateBlog";
import { useGlobalState } from "@/app/context/GlobalContextProvider";
import BlogModal from "../modal/BlogModal";

interface Props {
  title: string;
  blogs: any[];
}

const Blogs = ({ title, blogs }: Props) => {
  const { theme, openModal, modal, selectedBlog, closeModal } = useGlobalState();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlogStyle theme={theme} modal={modal}>
      {modal && <Modal blogContent={<CreateBlog />} />}
      {selectedBlog && <BlogModal blog={selectedBlog} />}
      <h1>{title}</h1>
      <button className="create-blog" onClick={openModal}>
        {plusA}
        Add Blog
      </button>
      <div className="blogs">
  {blogs.slice().reverse().map((blog) => (
    <BlogObject
      key={blog.id}
      title={blog.title}
      content={blog.content}
      date={blog.date}
      id={blog.id} 
    />
  ))}
</div>
    </BlogStyle>
  );
};

const BlogStyle = styled.main<{ modal: boolean }>`
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 850;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 3rem;
      height: 2px;
      background-color: ${(props) => props.theme.purple};
      border-radius: 1rem;
    }
  }

  .blogs {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .create-blog {
    margin-top: 2rem;
    position: sticky;
    top: 2rem;
    z-index: 98; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: auto; 
    min-height: 6rem; 
    width: calc(100%);
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    background-color: rgba(0, 0, 5, 0.3); 
    transition: all 0.4s ease;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => props.theme.colorGrey2};
    pointer-events: ${(props) => (props.modal ? "none" : "auto")}; 

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey2};
    }
  }
`;

export default Blogs;
