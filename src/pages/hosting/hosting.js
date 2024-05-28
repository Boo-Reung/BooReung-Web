import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import HostingPage from "./components/HostingEnterBox";

const Hosting = () => {
  return (
    <RootContainer>
      <Container>
        <ContentWrapper>
          <AppBarWrapper>
            <AppBar />
          </AppBarWrapper>  

          <HostingPage />
        </ContentWrapper>
      </Container>
    </RootContainer>
  );
};

const RootContainer = styled.div`
  width: 390px;
  max-width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6fcff;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-bottom: 1.5rem;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 0rem 1rem 0rem;
  margin-bottom: 1rem;
`;

const AppBarWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
`;



export default Hosting;
