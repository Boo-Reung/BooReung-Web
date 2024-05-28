import React from "react";
import styled from "styled-components";

const InputCarinfos = ({CarinfoValue}) => {
    return (
        <Container>
            <PageTitle>차량정보</PageTitle>
            <InputCarinfo value = {CarinfoValue} type="text" placeholder="ex) 검정카니발 34오 0214" />
        </Container>
    );
};

const Container = styled.div`

`;

const PageTitle = styled.h1`
  height: 2rem;
  flex-shrink: 0;
  font-size: 1.375rem;
  margin:0.4rem 0;
  padding-top: 0.88rem;
  color: #000;
  font-family: "Gowun Batang";
`

const InputCarinfo = styled.input`
  width: 21.2rem;
  height: 61px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #9BBEC8;
  background: rgba(210, 236, 250, 0.00);
  margin-top: 0.88rem;
  padding: 19px 33px 19px 27px;

  &::placeholder {
    font-size: 1rem;
`;

export default InputCarinfos