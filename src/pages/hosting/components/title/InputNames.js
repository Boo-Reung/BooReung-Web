import React from "react";
import styled from "styled-components";

const InputNames = ({NameValue}) => {
    return (
        <Container>
            <PageTitle>이름을 입력하세요</PageTitle>
            <InputName value={NameValue} type="text" placeholder="5글자 이내로 입력하세요" />
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

const InputName = styled.input`
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
export default InputNames