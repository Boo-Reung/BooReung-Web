import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"

const CautionContainer = styled.div`
    text-align: center;
    border-radius: 0.625rem;
    border: 3px solid #003E5F;
    background: rgba(141, 209, 245, 0.28);
    padding: 10px;
    margin-bottom: 10px;
    width: 90%;
    margin: 70px auto 0;
    `

const CautionText = styled.p`
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `


const Main = () => {
    return (
        <Container>
            <AppBar />
        </Container>
    );
};

export default Main;

const Container = styled.div`
`;


