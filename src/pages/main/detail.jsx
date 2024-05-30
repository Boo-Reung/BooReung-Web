import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import CommonButton from "../../components/CommonButton";
import RouteContainer from "./components/detail/DetailContainerRoute";
import CarpoolDateContainer from "./components/detail/DetailContainerDate";
import HostGender from "./components/detail/DetailContainerSmall";
import ClientGender from "./components/detail/DetailContainerSmall";
import Member from "./components/detail/DetailContainerBig";
import Price from "./components/detail/DetailContainerBig";
import CarInfo from "./components/detail/DetailContainerBig";
import Content from "./components/detail/DetailContainerHuge";
import OpenKakao from "./components/detail/DetailContainerBig";
import Title from "./components/detail/TItle";
import PostNum from "./components/detail/PostNum";
import HostNameAndType from "./components/detail/HostNameAndType";
import axios from "axios";

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 id를 가져옵니다.
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleListButtonClick = () => {
        navigate("/list");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://nkey18.pythonanywhere.com/api/carpools/detail/${id}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error loading data</div>;
    }

    return (
        <RootContainer>
            <Container>
                <AppBar />
                <Title title={data.title} />
                <HeaderContainer>
                    <PostNum id={data.id} />
                    <HostNameAndType host_name={data.host_name} type={data.type} />
                </HeaderContainer>
                <RouteContainer subtitle={"경로"} dept={data.dept} dest={data.dest} />
                <CarpoolDateContainer subtitle={"카풀 할 날짜와 시간"} content={data.carpool_date} />
                <GenderRowContainer>
                    <HostGender subtitle={"호스트의 성별"} content={data.host_gender} />
                    <ClientGender subtitle={"신청가능 성별"} content={data.client_gender} />
                </GenderRowContainer>
                <Member subtitle={"모집 인원 (최대)"} content={`${data.member}명`} />
                <Price subtitle={"가격 (1인당)"} content={`${data.price}원`} />
                <CarInfo subtitle={"차량 정보"} content={data.car_info} />
                <Content subtitle={"내용"} content={data.content} />
                <OpenKakao subtitle={"오픈 카톡방 링크"} content={data.open_kakao} />
            </Container>
            <CommonButton text={"닫기"} onClick={handleListButtonClick} />
        </RootContainer>
    );
};

export default Detail;

const RootContainer = styled.div`
    width: 390px;
    max-width: 390px;
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
    gap: 1.5rem;
    height: 1570px;
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
`;
