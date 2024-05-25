import React from "react";
import styled from "styled-components";

const FilterContainerType = () => {
    return (
        <Container>
            <Subtitle>목적</Subtitle>
            <RowContainer>
                <ContentText>없음</ContentText>
                <ContentText>통학</ContentText>
                <ContentText>여행</ContentText>
            </RowContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 18.6875rem;
    height: 4.92556rem;
    flex-shrink: 0;
`
const Subtitle = styled.div`
    width: 6.6875rem;
    height: 2.15181rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContentText = styled.div`
    width: 5.8125rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`





export default FilterContainerType