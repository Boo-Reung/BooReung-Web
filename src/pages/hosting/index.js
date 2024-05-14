import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"

const Hosting = () => {
    return (
        <Container>
            <AppBar />
            <CommonButton text = {'정보 입력 완료'} />
        </Container>
    );
};


const Container = styled.div`
`;

export default Hosting;