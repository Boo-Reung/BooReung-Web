import React from "react";
import styled from "styled-components";
import AppBarLanding from "../../components/AppBarLanding"
import CommonButton from "../../components/CommonButton"

const Landing = () => {
    return (
        <Container>
            <AppBarLanding />
            <CommonButton text={"Boo릉 시작!"}/>
        </Container>
    );
};


const Container = styled.div`
`;

export default Landing;