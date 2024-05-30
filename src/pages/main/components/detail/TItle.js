import React from "react";
import styled from "styled-components";

const DetailTitle = ({title}) => {
    const formattedTitle = `[${title}]`;

    return(
        <Container>
            <Title>{formattedTitle}</Title>
        </Container>
    );
};

const Container = styled.div`
    padding-bottom: 1rem;

`;

const Title = styled.div`
    width: 20.625rem;
    height: 0.8em;
    flex-shrink: 0;
    color: #164863;
    font-family: "Gowun Batang";
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`

export default DetailTitle
