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
const List = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [registeredPoolCount, setRegisteredPoolCount] = useState(0);
    const [carpools, setCarpools] = useState([]); // 초기 상태를 빈 배열로 설정

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
        axios.get("http://nkey18.pythonanywhere.com/api/carpools/full_list/")
            .then((response) => {
                console.log("API response:", response); // 응답을 콘솔에 출력하여 확인
                setRegisteredPoolCount(response.data.length);
                setCarpools(response.data); // carpools 상태 업데이트
                console.log("Updated carpools:", response.data); // 상태 업데이트 후 콘솔 출력
            })
            .catch((error) => {
                console.error("Error fetching pool count:", error);
            });
    }, []);

    useEffect(() => {
        console.log("carpools state:", carpools); // 상태가 업데이트될 때마다 콘솔에 출력
    }, [carpools]);
    

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
                    {carpools.map((carpool) => (
                        <ListComponent
                            key={carpool.id}
                            title={carpool.title}
                            type={carpool.type}
                            client_gender={carpool.client_gender}
                            dept={carpool.dept}
                            dest={carpool.dest}
                            carpool_date={carpool.carpool_date}
                            member={carpool.member}
                            price={carpool.price}
                            onClick={handleDetailButtonClick}
                        />
                    ))}
                </ContentContainer>
                <Filter show={showFilterModal} onClose={toggleFilterModal} />
            </Container>
        </RootContainer>

    );
};

export default List;

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
