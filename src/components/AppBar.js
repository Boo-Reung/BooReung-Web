import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
    
    const navigate = useNavigate();
    
    // 로고 클릭시 홈화면으로 이동
    const goToHome = () => {
        console.log("gotohome")
        navigate("/");
    };
    // back버튼 클릭시 이전 페이지로 이동
    const goBack = () => {
        window.history.back();
    };

    return (
        <Container>
            <BackButton
                src={"/images/back_icon.png"}
                onClick={goBack}
            />
            <Logo 
                src="/images/boo_reung_icon.png"
                onClick={goToHome}
            />
            <Warning
                src="/images/warning_icon.png"
            />
        </Container>
    );
};

export default AppBar;

const Container = styled.div`
    width: 24.375rem;
    height: 4.375rem;
    display: flex; 
    flex-direction: row;
    
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: space-around;
    background: #E3F3FB;
`;

const BackButton = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.62rem;
    cursor: pointer;

`

const Logo = styled.img`

    // 부모 요소(Container: relative)의 가로 세로 중앙에 절대 위치에 고정
    left: 50%;
    top: 50%;
`;

const Warning = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    margin-left: 0.62rem;
    cursor: pointer;

`