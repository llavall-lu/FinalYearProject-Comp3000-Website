"use client";
import React from "react";
import styled from "styled-components";
import Nav from "../Components/NavBar/Navbar";

const HomePage = () => {
 
  const slideshowImages = [
    "",
  ];

  return (
    <Container>
      <Nav />
      <Slideshow>
        {slideshowImages.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slideshow>
      <Content>
        <TextBlock>
          <Title>Welcome to my final year project</Title>
          <Description>
            This is a blog and game website. You can read and write blogs and
            play games. Enjoy the website.
          </Description>
        </TextBlock>
        <TextBlock>
          <Title>Enjoy the game and blog</Title>
          <Description>
            This is a blog and game website. You can read and write blogs and
            play games. Enjoy the website.
          </Description>
        </TextBlock>
      </Content>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slideshow = styled.div`
  width: 80%; /* Adjust the width as needed */
  max-height: 300px; /* Set the maximum height */
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin-top: 20px;
`;

const TextBlock = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 16px;
  text-align: center;
`;

export default HomePage;
