import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButton"
import RouteContainer from "./components/detail/DetailContainerRoute"
import CarpoolDateContainer from "./components/detail/DetailContainerBig"
import HostGender from "./components/detail/DetailContainerSmall"
import ClientGender from "./components/detail/DetailContainerSmall"
import Member from "./components/detail/DetailContainerBig"
import Price from "./components/detail/DetailContainerBig"
import CarInfo from "./components/detail/DetailContainerBig"
import Content from "./components/detail/DetailContainerHuge"
import OpenKakao from "./components/detail/DetailContainerBig"
import Title from "./components/detail/TItle"
import PostNum from "./components/detail/PostNum"
import HostNameAndType from "./components/detail/HostNameAndType";

const Detail = () => {
    const navigate = useNavigate();

    const handleListButtonClick = () => {
        navigate("/list");
    };

    return (
        <RootContainer>
            <Container>
                <AppBar/>
                <Title title={"하이"}/>
                <HeaderContainer>
                    <PostNum post_num={"2983"}/>
                    <HostNameAndType host_name={"김재우"} type={"여행"}/>
                </HeaderContainer>
                <RouteContainer subtitle={"경로"} dept={"모현"} dest={"이문동"}/>
                <CarpoolDateContainer subtitle={"카풀 할 날짜와 시간"} content={"내용 넣어봄"}/>
                <GenderRowContainer>
                    <HostGender subtitle={"호스트의 성별"} content={"남성"}/>
                    <ClientGender subtitle={"신청가능 성별"} content={"성별무관"}/>
                </GenderRowContainer>
                <Member subtitle={"모집 인원 (최대)"} content={"4명"}/>
                <Price subtitle={"가격 (1인당)"} content={"5000원"}/>
                <CarInfo subtitle={"차량 정보"} content={"검정 카니발 34오 0413"}/>
                <Content subtitle={"내용"} content={"설캠 이중전공 때문에 이문동 가셔야하거나 이문동에 사시는 분들 제 차 타고 가세요~~"}/>
                <OpenKakao subtitle={"오픈 카톡방 링크"} content={"openkakao.kjhihig"}/> 
            </Container>
            <CommonButton text={"닫기"} onClick={handleListButtonClick}/>
        </RootContainer>
    );
};

const RootContainer = styled.div`
    width: 390px;
    max-width: 390px;
    height: 1600px; /* 원하는 높이로 설정 */
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #F6FCFF;
    position: relative;
    overflow-y: auto; /* 스크롤 가능하게 설정 */
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    padding-left: 1rem;
    gap: 0.5rem;
`;


const GenderRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 22.4375rem;
    justify-content: space-between;
`


export default Detail;