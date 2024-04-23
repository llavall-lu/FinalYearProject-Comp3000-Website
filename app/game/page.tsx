"use client";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useGlobalState } from "../context/GlobalContextProvider";

const PageContainer = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem); /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxWrapper = styled.div`
  padding: 20px; /* Adjust padding as needed */
  background-color: ${(props) => props.theme.colorBg2}; /* Grey color */
  border: 2px solid ${(props) => props.theme.borderColor2}; /* Border color */
  border-radius: 10px; /* Border radius */
`;

function Page() {
  const { theme } = useGlobalState(); // Access the theme from global context

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <IframeContainer>
          <BoxWrapper>
            <iframe
              
              title="WebGL Game"
              width="1060" 
              height="680"
            />
          </BoxWrapper>
        </IframeContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Page;
