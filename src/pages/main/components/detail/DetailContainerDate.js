import React from "react";
import styled from "styled-components";

const DetailContainerBig = ({ subtitle, content }) => {
    // 날짜와 시간을 원하는 형식으로 변환 (오전/오후 추가)
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? '오후' : '오전';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0시를 12시로 표시

        return `${year}-${month}-${day} ${ampm} ${String(hours).padStart(2, '0')}:${minutes}`;
    };

    // content를 포맷팅된 날짜로 변환
    const formattedContent = formatDate(content);

    return (
        <Container>
            <Subtitle>{subtitle}</Subtitle>
            <ContentBox>
                <ContentText>{formattedContent}</ContentText>
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
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentText = styled.p`
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`

export default DetailContainerBig;
