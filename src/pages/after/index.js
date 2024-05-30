import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButtonHY"
import InfoBox from "./components/InfoBox";
import InfoInputForm from "./components/InfoInputForm";
import axios from "axios";

const After = () => {
    const navigate = useNavigate();

    const [childSelectedDate, setChildSelectedDate] = useState(null);
    const [childUserName, setChildUserName] = useState('');
    const [childStuNum, setChildStuNum] = useState('');
    const [childPhoneNum, setChildPhoneNum] = useState('');
    const [childPostNum, setChildPostNum] = useState('');
    const [childHostName, setChildHostName] = useState('');
    const [childHostPhoneNum, setChildHostPhoneNum] = useState('');
    const [childCarInfo, setChildCarInfo] = useState('');

    const handleChildSelectedDateChange = (newDate) => {
        setChildSelectedDate(newDate)
    }
    
    const handleChildNameChange = (newUserName) => {
        setChildUserName(newUserName);
    }
    const handleChildStuNumChange = (newStuNum) => {
        setChildStuNum(newStuNum);
    }
    const handleChildPhoneNumChange = (newPhoneNum) => {
        setChildPhoneNum(newPhoneNum);
    }
    const handleChildPostNumChange = (newPostNum) => {
        setChildPostNum(newPostNum);
    }
    const handleChildHostNameChange = (newHostName) => {
        setChildHostName(newHostName);
    }
    const handleChildHostPhoneNumChange = (newHostPhoneNum) => {
        setChildHostPhoneNum(newHostPhoneNum);
    }
    const handleChildCarInfoChange = (newCarInfo) => {
        setChildCarInfo(newCarInfo);
    }

    const InfoComplete = () => {
        PostInfo();
        navigate("/list");
    };

    const PostInfo = () => {
        const Info = {
            client_name: childUserName,
            student_num: childStuNum,
            phone_num: childPhoneNum,
            post_num: childPostNum,
            host_name: childHostName,
            host_phone_num: childHostPhoneNum,
            car_info: childCarInfo,
            carpool_date: childSelectedDate
        };
       
        axios
            .post("https://nkey18.pythonanywhere.com/api/carpools/completedcarpool/", Info)
            .then((response) => {
                console.log("success", Info)
            console.log(response);
            })
            .catch( (error) => {
                console.log("failed", Info)
            console.log(error);
            });
    };

    return (
        <RootContainer>
            <Container>
                <ContentContainer>
                    <AppBarWrapper>
                        <AppBar />
                    </AppBarWrapper>

                    <TitleContainer>
                        <Title>성사된 카풀 정보 입력 !</Title>
                    </TitleContainer>
                    <InfoBox
                        content={`성사된 카풀 정보 입력은\n범죄 발생 시\n추적을 용이하게\n할 수 있는 기능입니다.\n\n카풀 참여자 분이\n직접 정보를 수집하여\n정확하게 입력해주세요.\n\n기록은 작성일 기준\n30일간 보관됩니다.`}
                    />
                    <InfoInputForm 
                    nameChange = {handleChildNameChange}
                    stuNumChange = {handleChildStuNumChange}
                    phoneNumChange = {handleChildPhoneNumChange}
                    postNumChange = {handleChildPostNumChange}
                    hostNameChange = {handleChildHostNameChange}
                    hostPhoneNumChange = {handleChildHostPhoneNumChange}
                    carInfoChange = {handleChildCarInfoChange}
                    selectedDateChange={handleChildSelectedDateChange}
                    />
                </ContentContainer>

                <ButtonWrapper>
                    <CommonButton text={"정보 입력 완료"} onClick={InfoComplete} />
                </ButtonWrapper>
            </Container>
        </RootContainer>

    );
};


const RootContainer = styled.div`
  width: 390px;
  max-width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6fcff;
  overflow: hidden;
`;

const Container = styled.div`
width: 390px;
height: 1087px;
background-color: #F6FCFF;
display : flex;
flex-direction:column;
align-items :center;
overflow-y: auto;
overflow-x: hidden;
`;

const ContentContainer = styled.div`
flex:1 ;
width: 100%
`;

const AppBarWrapper = styled.div`
 width: 100%
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    width: 100%;
    height: 0.8em;
    // transform: rotate(0.075deg);
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang", serif;
    font-size: 1.7rem;
    letter-spacing: -0.0875rem;
    margin-top: 1rem; // 제목과 박스 사이 간격 조정
    text-align: center; // 텍스트 가운데 정렬
    align-items :center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 2rem;
  justify-content: center;
`;

export default After;
