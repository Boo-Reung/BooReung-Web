import React  from "react";
import styled from "styled-components";

const InputTitles = ({ TitleValue }) => {
    return (
        <Container>
            <PageTitle>제목을 입력하세요</PageTitle>
            <InputTitle value={TitleValue} type="text" placeholder="10글자 이내로 입력하세요" />
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

const InputTitle = styled.input`
  width: 359px;
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

export default InputTitles