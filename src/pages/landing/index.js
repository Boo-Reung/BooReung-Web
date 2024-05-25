import React from "react";
import styled from "styled-components";
import AppBarLanding from "../../components/AppBarLanding"
import CommonButton from "../../components/CommonButton"
import { useNavigate } from "react-router-dom";


const BackgroundImage1 = styled.div`
  width: 228px;
  height: 222px;
  background-image: url('https://i.imgur.com/O8FztUI.jpg');
  background-size: cover;
  background-position: center;
  transform: translate(80px, 50px);
`;

//빈 공간 표현하고 싶어서 중간에 margine auto 넣었습니다.
const TextContainer = styled.div`
    text-align: center;
    border-radius: 0.625rem;
    border: 3px solid #003E5F;
    background: rgba(141, 209, 245, 0.28);
    padding: 10px;
    margin-bottom: 10px;
    transform: translate(0,70px);
    width : 90%; 
    margin: 0 auto;

`;


const StyledParagraph =styled.p`
    color: #000;
    text-align: center;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625rem;
    `



//navigate사용해서 페이지 넘김 구현 
const Landing = () => {
    const navigate = useNavigate();

    const goToloading = () => {
        navigate('/loading')
    }

    return (
        <Container>
            <AppBarLanding />
            <BackgroundImage1 />
            <TextContainer> 
                <StyledParagraph>
                     Boo릉은<br />
                    학우들 간 차량 공유를 통해<br />
                    보다 더 많은 학우들이<br />
                    편하게 카풀을 이용할 수 있는<br />
                    서비스 입니다.<br /><br />
                    
                    차량공유를 통해<br />
                    친목도 쌓을수 있다는 사실!!!<br /><br />

                    Boo릉과 함께<br />
                    행복한 카풀을 경험하세요!<br /><br /> 
                    </StyledParagraph>
            </TextContainer>
            <CommonButton onClick = {goToloading} text={"Boo릉 시작!"}/>
        </Container>
    );
};


const Container = styled.div`
`;

export default Landing;