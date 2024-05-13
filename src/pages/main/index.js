import React from "react";
import styled from "styled-components";


const MyPage = () => {
    return (
        <div>
            <MainContainer>
                <Container>

                </Container>
            </MainContainer>
        </div>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: calc(100vh - 10rem);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.125rem;
`;

export default MyPage;