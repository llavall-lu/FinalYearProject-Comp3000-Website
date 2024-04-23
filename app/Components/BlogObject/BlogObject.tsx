import React from "react";
import styled from "styled-components";
import dateFormat from "@/app/utils/dateFormat";
import { useGlobalState } from "@/app/context/GlobalContextProvider"; 

interface Props {
  title: string;
  content: string;
  date: string;
  id: string;
}

const BlogObject = ({ title, content, date, id }: Props) => {
  const { theme, setSelectedBlog } = useGlobalState(); 

  const handleClick = () => {
    setSelectedBlog({ title, content, date, id }); 
  };

  return (
    <BlogItemStyle theme={theme} onClick={handleClick}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="date">
        <p>{dateFormat(new Date(date))}</p>
      </div>
    </BlogItemStyle>
  );
};

const BlogItemStyle = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  min-height: 17rem;
  border: 2px solid ${(props) => props.theme.colorBg2};
  box-shadow: ${(props) => props.theme.Shadow};
  background-color: ${(props) => props.theme.borderColor2};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: pre-line;
  overflow: hidden; 
  cursor: pointer;

  &:hover {
    cursor: pointer; 
    border: 2px solid ${(props) => props.theme.colorPurple2};
  }

  .date {
    margin-top: auto;
    font-size: 0.8rem;
    background-color: ${(props) => props.theme.colorBg};
    width: fit-content;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  > p {
    font-size: 1rem;
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis; 
    max-height: 10rem; 
  }
`;

export default BlogObject;
