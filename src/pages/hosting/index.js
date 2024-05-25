import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"
import HostingPage from "./components/title";
const Hosting = () => {
    return (
        <Container>

            <AppBarWrapper>
                <AppBar />
            </AppBarWrapper>

            <ContentWrapper>
                <HostingPage/>

            <CommonButton text = {'정보 입력 완료'} />

            </ContentWrapper>

        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
    height: 100vh; /* 전체 높이를 100vh로 설정 */
  overflow: hidden; /* 전체 컨테이너에 오버플로우를 숨김 */
  align-items:center;
`;

const AppBarWrapper =styled.div`
 width: 100%
 flex-shrink:0;
`;

// const ButtonWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   left: 5.8rem;
//   right: 5.8rem;
//   bottom: 1.88rem;
//   justify-content: center;
// `;

const ContentWrapper = styled.div`
  width : 100%;
  max-width: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 1rem 0rem;
  margin-bottom: 1rem;
  overflow-x: inherit;
  overflow-y: auto;
`;

export default Hosting;