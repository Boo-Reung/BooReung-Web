import React from "react";
import styled from "styled-components";

const DetailContainerBig = ({subtitle, dept, dest}) => {
    return (
        <ColumnContainer>
            <Subtitle>{subtitle}</Subtitle>
            <RowContainer>
                <Container>
                    <ContentBox>
                        <ContentText>{dept}</ContentText>
                    </ContentBox>
                </Container>
                <Arrow/>
                <Container>
                    <ContentBox>
                        <ContentText>{dest}</ContentText>
                    </ContentBox>
                </Container>
            </RowContainer>
        </ColumnContainer>
    );
};

const ColumnContainer = styled.div`
    width: 22.0625rem;
    height: 6.0625rem;
    display: flex;
    flex-direction: column;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Arrow = styled.img`

`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 9.1875rem;
    height: 6.5rem;
    flex-shrink: 0;
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
    width: 9.1875rem;
    height: 3.8125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
`

const ContentText = styled.p`
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default DetailContainerBig