import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"
import InfoBox from "./components/InfoBox";
import InfoInputForm from "./components/InfoInputForm";

const After = () => {
    return (
        <Container>
            <AppBarWrapper>
                <AppBar />
            </AppBarWrapper>
            
            <ContentContainer>
                <TitleContainer>
                    <Title>성사된 카풀 정보 입력 !</Title>
                </TitleContainer>
                <InfoBox 
                    content={`성사된 카풀 정보 입력은\n범죄 발생 시\n추적을 용이하게\n할 수 있는 기능입니다.\n\n카풀 참여자 분이\n직접 정보를 수집하여\n정확하게 입력해주세요.\n\n기록은 작성일 기준\n30일간 보관됩니다.`}
                />  
                <InfoInputForm/>
                <CommonButton text={"정보 입력 완료"}/>
            </ContentContainer>
        </Container>
    );
};


const Container = styled.div`
display : flex;
flex-direction:column;
align-items :center;
padding: 0rem 2rem 2rem 2rem;
height: 100vh;
`;

const AppBarWrapper =styled.div`
 width: 100%
 flex-shrink:0;
`;

const ContentContainer = styled.div`
flex:1 ;
width: 100%
max-width: 400px;
padding: 1rem 0rem 1rem 0rem;
margin-bottom: 1rem;
overflow-y: auto;
`

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    width: 17.22694rem;
    height: 0.8em;
    transform: rotate(0.075deg);
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang", serif;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;   
    line-height: normal;
    letter-spacing: -0.0875rem;
    margin-top: 1rem; // 제목과 박스 사이 간격 조정
    text-align: center; // 텍스트 가운데 정렬
    align-items :center;

`;

export default After;