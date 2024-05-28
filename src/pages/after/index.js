import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButtonHY"
import InfoBox from "./components/InfoBox";
import InfoInputForm from "./components/InfoInputForm";

const After = () => {
    const navigate = useNavigate();
    const InfoComplete = () => {
        navigate("/list");
    };
    return (
        <Container>
        <ContentContainer>
            <AppBarWrapper>
                <AppBar />
            </AppBarWrapper>
        
                <TitleContainer>
                    <Title>성사된 카풀 정보 입력 !</Title>
                </TitleContainer>
                <InfoBox 
                    content={`성사된 카풀 정보 입력은\n범죄 발생 시\n추적을 용이하게\n할 수 있는 기능입니다.\n\n카풀 참여자 분이\n직접 정보를 수집하여\n정확하게 입력해주세요.\n\n기록은 작성일 기준\n30일간 보관됩니다.`}
                />  
                <InfoInputForm/>
        </ContentContainer>

        <ButtonWrapper>
            <CommonButton text={"정보 입력 완료"} onClick={InfoComplete}/>
        </ButtonWrapper>

        </Container>
    );
};


const Container = styled.div`
width: 390px;
max-width: 390px;
height: 844px;
background-color: #F6FCFF;
display : flex;
flex-direction:column;
align-items :center;
overflow-y: auto;
overflow-x: hidden;
`;

const ContentContainer = styled.div`
flex:1 ;
width: 100%
`;

const AppBarWrapper =styled.div`
 width: 100%
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    width: 100%;
    height: 0.8em;
    // transform: rotate(0.075deg);
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang", serif;
    font-size: 1.7rem;
    letter-spacing: -0.0875rem;
    margin-top: 1rem; // 제목과 박스 사이 간격 조정
    text-align: center; // 텍스트 가운데 정렬
    align-items :center;

`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 2rem;
  justify-content: center;
`;

export default After;