import React from "react";
import styled from "styled-components";

const DetailContainer = ({subtitle, content}) => {
    return (
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <ContentBox>
                <ContentText>{content}</ContentText>
            </ContentBox>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 22.4375rem;
    height: 6.13281rem;
`

const Subtitle = styled.p`
    width: 19.4375rem;
    height: 2rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const ContentBox = styled.div`
    width: 22.4375rem;
    height: 3.8125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
`

const ContentText = styled.p`
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default DetailContainer