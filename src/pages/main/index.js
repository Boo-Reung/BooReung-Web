import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import SearchBox from "./components/index/Search"
import HostingButton from "./components/index/MainButton"
import EnterCompleteButton from "./components/index/MainButton"
import ListComponent from "./components/index/ListComponent"
import axios from "axios"
/* 필터 관련 imports */
import Filter from "./Filter"

    // 1) 여기서 updateRouteSelection이 정의되어서 FilterContainerType.js으로 props 전달
    // 3) FilterContainerType.js에서 업데이트된 상태는 Filter.js의 다른 자식 컴포넌트 (FilterContainerRoute에 영향)
const Main = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [registeredPoolCount, setRegisteredPoolCount] = useState(0);

    const toggleFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };

    const navigate = useNavigate();

    const handleHostingButtonClick = () => {
        navigate("/hosting");
    };

    const handleCompleteButtonClick = () => {
        navigate("/after");
    }

    const handleDetailButtonClick = () => {
        navigate("/detail")
    }

    useEffect(() => {
        // 백엔드 API 호출을 통해 등록된 카풀 수 가져오기
        axios.get("백엔드 API URL")
            .then((response) => {
                // API 응답에서 등록된 카풀 수를 가져와 상태 업데이트
                setRegisteredPoolCount(response.data.ppolCount);
            })
            .catch((error) => {
                console.error("Error fetching pool count:", error);
            });
    }, []);

    return (
        <RootContainer>
            <Container>
                <AppBar />
                <SearchContainer>
                    <FilterButton onClick={toggleFilterModal}>검색 필터</FilterButton>
                    <SearchBox />
                </SearchContainer>
                <QuantityAndButtonsContainer>
                    <RowContainer>
                        <RegisteredNum>등록된 카풀 <br /> 개수: {registeredPoolCount}개</RegisteredNum>
                        <HostingButton text="카풀 주최하기" width="12.6875rem" height = "3.5rem" onClick={handleHostingButtonClick}/>
                    </RowContainer>
                    <EnterCompleteButton text="성사된 카풀 정보 입력하러 가기!" width="20.5625rem" height="3.5rem" onClick={handleCompleteButtonClick}/>
                </QuantityAndButtonsContainer>
                <ContentContainer>
                    <ListComponent title={"하이"} type={"통학"} client_gender={"남성"} dept={"백년관 정류장"} dest={"서현역"} carpool_date={"2023-11-09"} member={"5"} price={"5000"} onClick={handleDetailButtonClick}/>
                    <ListComponent title={"싸게 모현에서 이문 고고"} type={"통학"} client_gender={"남성"} dept={"백년관 정류장"} dest={"서현역"} carpool_date={"2023-11-09"} member={"5"} price={"5000"} onClick={handleDetailButtonClick}/>
                    <ListComponent title={"싸게 모현에서 이문 고고"} type={"통학"} client_gender={"남성"} dept={"백년관 정류장"} dest={"서현역"} carpool_date={"2023-11-09"} member={"5"} price={"5000"} onClick={handleDetailButtonClick}/>
                </ContentContainer>
                <Filter show={showFilterModal} onClose={toggleFilterModal} />
            </Container>
        </RootContainer>

    );
};

export default Main;

const RootContainer = styled.div`
    width: 390px;
    max-width: 390px;
    height: 844px;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #F6FCFF;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 스크롤 가능하게 설정 */
    padding-bottom: 1.5rem;
    overflow-x: hidden;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;

`;
const FilterButton = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    width: 7.4375rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: transparent; /* 배경색 */
    border: 1px solid #9BBEC8; /* 테두리 색상 */
`;

const QuantityAndButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


    const RegisteredNum = styled.div`
    white-space: pre-line; /*줄바꿈을 가능케 함 */
    width: 7.8125rem;
    height: 1.6875rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
