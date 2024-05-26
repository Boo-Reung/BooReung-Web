import React from "react";
import styled from "styled-components";

const MinBoxPrice = () => {

    return(
        <Container>
            <MinBox/>
        </Container>
    );

};

const Container = styled.div`
`;


const MinBox = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`

export default MinBoxPrice