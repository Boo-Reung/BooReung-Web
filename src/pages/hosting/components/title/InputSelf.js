import React from "react";
import styled from "styled-components";

const InputSelfs = ({ContentValue}) => {
    return (
        <Container>
            <PageTitle>내용</PageTitle>
            <InputSelf value = {ContentValue} placeholder="간단한 소개글을 작성하세요(50자 이내)" />
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

const InputSelf = styled.textarea`
  width: 359px;
  height: 246px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #9BBEC8;
  background: rgba(210, 236, 250, 0.00);
  margin-top: 0.88rem;
  padding: 19px 33px 19px 27px;
  box-sizing: border-box;
  resize: none; 
  font-size: 1rem;

  &::placeholder {
    font-size: 1rem;
    vertical-align: top;
`;

export default InputSelfs