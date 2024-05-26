import React, { useState  } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "./select";


const HostingPage = () => {
  const [purposeOption, setPurposeOption] = useState(null);
  const [departureOption, setDepartureOption] = useState(null);
  const [arrivalOption, setArrivalOption] = useState(null);
  const [hostGenderOption, setHostGenderOption] = useState(null);
  const [applicableGenderOption, setApplicableGenderOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <PageWrapper>

        <PageTitle>제목을 입력하세요</PageTitle>
        <Input type="text" placeholder="10글자 이내로 입력하세요" />
        <PageTitle>이름을 입력하세요</PageTitle>
        <Input type="text" placeholder="5글자 이내로 입력하세요" />
        
        <PageTitle>목적</PageTitle>
        <Select
          options={['통학', '여행']}
          selectedOption={purposeOption}
          onOptionClick={setPurposeOption}
        />
        
        <PageTitle>카풀 할 날짜와 시간을 입력하세요</PageTitle>
          <DatePickerWrapper>
            <StyledDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="날짜와 시간 선택하기! (클릭)"
            />
          </DatePickerWrapper>
        
        <PageTitle>경로(출발)</PageTitle>
        <Select
          options={['지역', '정류장']}
          selectedOption={departureOption}
          onOptionClick={setDepartureOption}
        />
        
        <PageTitle>경로(도착)</PageTitle>
        <Select
          options={['지역', '정류장']}
          selectedOption={arrivalOption}
          onOptionClick={setArrivalOption}
        />

        <PageTitle>호스트의 성별</PageTitle>
        <Select
          options={['남성', '여성']}
          selectedOption={hostGenderOption}
          onOptionClick={setHostGenderOption}
        />

        <PageTitle>신청가능 성별</PageTitle>
        <Select
          options={['남성', '여성','성별무관']}
          selectedOption={applicableGenderOption}
          onOptionClick={setApplicableGenderOption}
        />

        <PageTitle>모집 인원 (최대)</PageTitle>
        <Input type="text" placeholder="5글자 이내로 입력하세요" />

        <PageTitle>가격 (1인당)</PageTitle>
        <Input type="text" placeholder="5글자 이내로 입력하세요" />

        <PageTitle>차량정보</PageTitle>
        <Input type="text" placeholder="ex) 검정카니발 34오 0214" />
 
        <PageTitle>내용</PageTitle>
        <BigInput placeholder="간단한 소개글을 작성하세요(50자 이내)" />

        <PageTitle>오픈 카톡방 링크</PageTitle>
        <Input type="text" placeholder="오픈 카톡방 링크를 입력하세요" />

    </PageWrapper>
  );
};

export default HostingPage;


const PageWrapper = styled.div`
display : flex;
flex-direction:column;
align-items: flex-start;
padding: 0rem 1rem 1rem 1rem;
width: 100%;
max-width: 390px;
margin: 0 auto;
`
const PageTitle = styled.h1`
width: 100%
height: 2rem;
flex-shrink: 0;
font-size: 1.3rem;
margin:0.4rem 0;
padding-top: 0.88rem;
color: #000;
font-family: "Gowun Batang";
`

const Input = styled.input`
  width: 100%;
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

const BigInput = styled.textarea`
  width: 100%;
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

const DatePickerWrapper = styled.div`
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #9BBEC8;
  margin-top: 0.88rem;
  background: rgba(210, 236, 250, 0.00);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledDatePicker = styled(DatePicker)`
width: 15.6875rem;
height: 1.4375rem;
flex-shrink: 0;
border:none;
cursor: pointer;



&::placeholder {
    font-size: 1rem; 
    color: #000;
    text-align:center;
}
`