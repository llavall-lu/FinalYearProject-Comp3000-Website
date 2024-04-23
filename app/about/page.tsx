"use client";
import React from "react";
import styled from "styled-components";
import Nav from "../Components/NavBar/Navbar";

const AboutPage = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <TextBlock>
          <Title>About Us</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula a nulla eget pretium. Suspendisse potenti. Aliquam erat
            volutpat. Nulla facilisi. Vestibulum tempor placerat lacus, vel
            ullamcorper ligula consectetur nec. Quisque auctor hendrerit orci,
            non vehicula nunc vestibulum non. Fusce convallis magna vel
            suscipit placerat. Vivamus id ligula a nunc ultrices ultricies.
            Integer nec lectus at libero cursus pharetra. Nulla facilisi.
            Praesent consequat, ipsum vitae consequat suscipit, nulla augue
            consectetur mauris, ac posuere purus ligula eu leo.
          </Description>
        </TextBlock>
      </Content>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 20px;
`;

const TextBlock = styled.div`
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

export default AboutPage;
