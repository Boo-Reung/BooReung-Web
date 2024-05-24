import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar"
import Filter from "./components/index/Filter"
import SearchBox from "./components/index/Search"
import HostingButton from "./components/index/MainButton"
import EnterCompleteButton from "./components/index/MainButton"
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
                    <HostingButton text="카풀 주최하기" width="150px" height = "50px"/>
                </RowContainer>
                <EnterCompleteButton text="성사된 카풀 정보 입력하러 가기!" width="200px" height="60px"/>
            </QuantityAndButtonsContainer>
            <ContentContainer>
                
            </ContentContainer>
            <Filter show={showFilterModal} onClose={toggleFilterModal} />
        </Container>
    );
};

export default Main;

const Container = styled.div`
    display: flex;
    flex-direction: column;
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


const RegisteredNum = styled.div`

`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
