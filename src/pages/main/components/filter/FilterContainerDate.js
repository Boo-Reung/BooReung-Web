import React from "react";
import styled from "styled-components";

const FilterContainerDate = () => {
    return (
        <Container>
            <Subtitle>날짜 (선택 날짜 이후)</Subtitle>
            <RowContainer>
                <ContentText>날짜 및 시간 선택하기! (클릭)</ContentText>
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
    width: 18.5rem;
    height: 2.125rem;
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
    width: 18.7rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`





export default FilterContainerDate