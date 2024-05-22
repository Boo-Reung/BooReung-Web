import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import Filter from "./components/Filter"
import SearchBox from "./components/Search"
import HostingButton from "./components/MainButton"
import EnterCompleteButton from "./components/MainButton"
import axios from "axios"

const Main = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [registeredPoolCount, setRegisteredPoolCount] = useState(0);

    const toggleFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };

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
        <Container>
            <AppBar />
            <SearchContainer>
                <FilterButton onClick={toggleFilterModal}>Open Filter</FilterButton>
                <SearchBox />
            </SearchContainer>
            <QuantityAndButtonsContainer>
                <RowContainer>
                    <RegisteredNum>등록된 카풀 수 {registeredPoolCount}개</RegisteredNum>
                    <CustomHostingButton/>
                </RowContainer>
                <CustomEnterCompleteButton/>
            </QuantityAndButtonsContainer>
            <ContentContainer>

            </ContentContainer>
            <Filter show={showFilterModal} onClose={toggleFilterModal} />
        </Container>
    );
};

export default Main;

const Container = styled.div`
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;

`;
const FilterButton = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
`;
const QuantityAndButtonsContainer = styled.div`

`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


// 다른 코드는 그대로 두고 HostingButton과 EnterCompleteButton의 스타일을 직접 지정합니다.
const CustomHostingButton = styled(HostingButton)`
    width: 100px; /* 내가 원하는 너비 값 */
    height: 50px; /* 내가 원하는 높이 값 */
`;

const CustomEnterCompleteButton = styled(EnterCompleteButton)`
    width: 150px; /* 내가 원하는 너비 값 */
    height: 60px; /* 내가 원하는 높이 값 */
`;

const RegisteredNum = styled.div`

`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


