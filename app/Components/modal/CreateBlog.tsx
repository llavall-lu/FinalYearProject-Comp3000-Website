import { useGlobalState } from "@/app/context/GlobalContextProvider";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/btn";
import { plus } from "@/app/utils/icons";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { theme, closeModal, allBlogs } = useGlobalState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const blog = {
      title,
      content,
      date: new Date().toISOString(), // Set current date and time
    };

    try {
      const response = await axios.post("/api/blogs", blog);

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Blog created successfully");
        allBlogs();
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <CreateBlogStyle onSubmit={handleSubmit} theme={theme}>
      <h1>Create a Blog</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="input-control">
        <label htmlFor="content">Content</label>
        <textarea
          value={content}
          id="content"
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          name="Create Blog"
          icon={plus}
          padding="0.9rem 2rem"
          borderRadius="0.5rem"
          fontWeight="600"
          fontSize="1.2rem"
          background={theme.colorPurple}
        />
      </div>
    </CreateBlogStyle>
  );
}



const CreateBlogStyle = styled.form`
  > h1 {
    font-size: 1.3rem, 5vw, 1.6rem;
    font-weight: 600;
  }

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    label {
      margin-bottom: 0.4rem;
      font-size: clamp 1rem. 5vw, 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colorGrey1};
    }

    input,
    textarea {
      width: 100%;
      border: 2px solid ${(props) => props.theme.colorGrey4};
      border-radius: 0.5rem;
      padding: 1rem;
      resize: none;
      background-color: ${(props) => props.theme.colorBg4};
    }
  }
  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;

    label {
      flex: 1;
    }
    input {
      width: initial;
    }
  }
`;

export default CreateBlog;
