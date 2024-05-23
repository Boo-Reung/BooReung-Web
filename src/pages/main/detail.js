import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"
import CarpoolDateContainer from "./components/DetailContainer"

const Detail = () => {
    return (
        <Container>
            <AppBar />
            <Title/>
            <PostNum/>
            <HostNameAndType/>
            <RouteContainer>
                {/*<SubTitle/>
                <RouteRowContainer>
                    <Dept/>
                    <Arrow/>
                    <Dest/>
    </RouteRowContainer> */}
            </RouteContainer>
            <CarpoolDateContainer subtitle={"카풀 할 날짜와 시간"}>
            </CarpoolDateContainer>
            <CommonButton text={"닫기"}/>
        </Container>
    );
};

const Container = styled.div`
`;

const Title = styled.p`
`;

const PostNum = styled.p`
`;

const HostNameAndType = styled.p`
`;

const RouteContainer = styled.div`
`

export default Detail;