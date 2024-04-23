import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import dateFormat from "@/app/utils/dateFormat";
import { GlobalContext } from "@/app/context/GlobalContextProvider";

interface Blog {
  title: string;
  content: string;
  date: string;
  id: string;
}

interface Props {
  blog: Blog;
}

const BlogModal: React.FC<Props> = ({ blog }) => {
  const { theme } = useContext(GlobalContext);
  const modalRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [blog]);

  return (
    <ModalContainer theme={theme} ref={modalRef}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <DateContainer>
        Date: <StyledDate>{dateFormat(new Date(blog.date))}</StyledDate>
      </DateContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colorBg3};
  border-radius: 10px;
  padding: 40px;
  white-space: pre-line;
  border: 4px solid ${(props) => props.theme.borderColor2};
`;

const DateContainer = styled.div`
  margin-top: 20px;
`;

const StyledDate = styled.span`
  color: ${(props) => props.theme.colorDate}; 
  font-weight: bold; 
`;

export default BlogModal;
