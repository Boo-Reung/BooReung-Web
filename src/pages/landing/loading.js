import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppBarLanding from "../../components/AppBarLanding";
import { Navigate } from "react-router-dom";
import axios from "axios";


const BackgroundImage2 = styled.div`
  width: 14.25rem;
  height: 14.125rem;
  background: url(https://imgur.com/mhisI4Z.jpg);
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-bottom: 10.12rem;
  transform: translate(0, 5.12rem);
`;

const LoadingTextTitle = styled.p`
  color: #003e5f;
  font-family: "Gowun Batang";
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transform: translate(1.5rem, 0.5rem);
`;

const StyledDiv = styled.div`
  transform: translate(1.5rem, 2rem);
  color: #000;
  text-align: center;
  font-family: "Gowun Dodum";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 350px; 
  height: 100px;
`;

//로딩바 기능구현 

const LoadingBarContainer = styled.div`
  width: 80%;
  height: 10px;
  background-color: #ddd;
  transform: translate(2.3rem, 3rem);

`;

const LoadingProgressBar = styled.div`
  height: 100%;
  background-color: #007bff;
  animation: loadingAnimation 3s;

  @keyframes loadingAnimation {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

const LoadingText = styled.p`
    color: #000;
    font-family: Gurajada;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transform: translate(9.0rem, 2.5rem);

`



const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getRandomLists = () => {
      axios.get('https://nkey18.pythonanywhere.com/api/carpools/caution/')
        .then(response => {
          setContent(response.data.content); // 함수 호출로 상태 업데이트
          console.log("Content:", response.data.content);
        })
        .catch(error => {
          console.error("Error fetching content:", error);
        });
    }
    getRandomLists();

    // 5초 후 로딩 상태 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5초 타이머 설정

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  if (isLoading) {
    return (
      <Container>
        <AppBarLanding />
        <BackgroundImage2 />
        <LoadingTextTitle>Boo릉 주의사항 알고계셨나요?</LoadingTextTitle>
        <StyledDiv>{content}</StyledDiv>
        <LoadingText>Loading..</LoadingText>
        <LoadingBarContainer><LoadingProgressBar /></LoadingBarContainer>
      </Container>
    );
  } else {
    return <Navigate to="/list" />;
  }
};

const Container = styled.div`

`;


export default Loading;