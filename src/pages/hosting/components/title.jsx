import React, { useState  } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "./select";
import InputTitles from "./title/InputTitles"
import InputNames from "./title/InputNames"
import InputMenbers from "./title/InputMenber";
import InputPrices from "./title/InputPrice";
import InputCarinfos from "./title/InputCarinfo";
import InputSelfs from "./title/InputSelf";
import InputKakaos from "./title/InputKakao";
import axios from "axios";


const HostingPage = () => {
  const [purposeOption, setPurposeOption] = useState(null);
  const [departureOption, setDepartureOption] = useState(null);
  const [arrivalOption, setArrivalOption] = useState(null);
  const [hostGenderOption, setHostGenderOption] = useState(null);
  const [applicableGenderOption, setApplicableGenderOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // const [TitleValue, setTitleValue] = useState(null); //질문: 굳이 state를 사용해야 하는가?
  // const [NameValue, setNameValue] = useState(null);
  // const [MemberValue, setMemberValue] = useState(null);
  // const [PriceValue, setPriceValue] = useState(null);
  // const [CarinfoValue, setCarinfoValue] = useState(null);
  // const [ContentValue, setContentValue] = useState(null);
  // const [OpenkakaoValue, setOpenkakaoValue] = useState(null);



  // const postlist = {
  //   host_name:  {NameValue},
	// 	title: {TitleValue}, // 질문: 변수를 지정 안하고 props값만 있으면 안되는건지..?
	// 	"type": "여행",
	// 	"client_gender": "남성",
	// 	"host_gender": "남자",
	// 	"dept": "모현",
	// 	"dest": "이문동", 
	// 	member : {MemberValue},
	// 	price : {PriceValue},
	// 	car_info : {CarinfoValue},
	// 	content : {ContentValue},
	// 	open_kakao : {OpenkakaoValue} ,
	// 	"carpool_date": "2023-11-09T22:59:53.173811+09:00"
  // }
  // //axios post부분 
  // try {
  //   const response = await axios.post(' http://nkey18.pythonanywhere.com/', body);
  //   onClose();
  //   console.log(response.data);
  //   } catch (error) {
  //   console.error('Fetch 작업 중 문제가 발생했습니다:', error);
  //   }

  return (
    <PageWrapper>
        <InputTitles />
        <InputNames />
        
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

        <InputMenbers />
        <InputPrices />
        <InputCarinfos />
        <InputSelfs ContentValue = {"제목"}/>
        <InputKakaos />
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