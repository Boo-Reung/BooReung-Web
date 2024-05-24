import React from "react";
import styled from "styled-components";
import ArrowImg from "../../../../assets/images/RightArrow.svg"

const DetailContainerRoute = ({subtitle, dept, dest}) => {
    return (
        <ColumnContainer>
            <Subtitle>{subtitle}</Subtitle>
            <RowContainer>
                        <ContentBox>
                            <ContentText>{dept}</ContentText>
                        </ContentBox>
                    <Arrow src={ArrowImg} alt="arrow"/>
                        <ContentBox>
                            <ContentText>{dest}</ContentText>
                        </ContentBox>
            </RowContainer>
        </ColumnContainer>
    );
};

const ColumnContainer = styled.div`
    width: 22.4375rem;
    height: 6.0625rem;
    display: flex;
    flex-direction: column;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 22.4375rem;
    
`

const Arrow = styled.img`
    width: 2rem; /* 적절한 너비와 높이 설정 */
    height: 2rem;
    margin: 0 0.5rem; /* 좌우 여백 설정 */
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
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentText = styled.p`
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export default DetailContainerRoute