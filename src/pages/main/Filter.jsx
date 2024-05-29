import React, { useState } from "react";
import styled from "styled-components";
import FilterContainerType from "./components/filter/FilterContainerType";
import FilterContainerGender from "./components/filter/FilterContainerGender";
import FilterContainerDate from "./components/filter/FilterContainerDate";
import FilterContainerRoute from "./components/filter/FilterContainerRoute";
import FilterContainerMember from "./components/filter/FilterContainerMember";
import FilterContainerPrice from "./components/filter/FilterContainerPrice";
import axios from "axios";



const Filter = ({ responseStateChange, show, onClose }) => {
    const [routeSelection, setRouteSelection] = useState("없음");
    const [genderSelection, setGenderSelection] = useState(null); // 초기값을 null로 설정
    const [deptSelection, setDeptSelection] = useState(null);
    const [destSelection, setDestSelection] = useState(null);
    const [minMemberSelection, setMinMemberSelection] = useState(null);
    const [maxMemberSelection, setMaxMemberSelection] = useState(null);
    const [minPriceSelection, setMinPriceSelection] = useState(null);
    const [maxPriceSelection, setMaxPriceSelection] = useState(null);
    const [dateSelection, setDateSelection] = useState(null);
    const [responseState, setResponseState] = useState(null);

    // 1) 여기서 updateRouteSelection이 정의되어서 FilterContainerType.js으로 props 전달
    // 3) FilterContainerType.js에서 업데이트된 상태는 Filter.js의 다른 자식 컴포넌트 (FilterContainerRoute에 영향)
    const updateRouteSelection = (selection) => {
        setRouteSelection(selection);
    };

    const updateGenderSelection = (selection) => {
        setGenderSelection(selection);
    };

    const updateDateSelection = (date) => {
        setDateSelection(date);
    };

    const formatDateToISO = (date) => {
        if (!date) return null;
    
        // 문자열일 경우 Date 객체로 변환
        if (typeof date === 'string' || date instanceof String) {
            date = new Date(date);
        }
    
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            console.error("Invalid date:", date);
            return null;
        }
    
        const isoString = date.toISOString(); // ISO 형식의 문자열
        const dateOnly = isoString.split('T')[0]; // "YYYY-MM-DD" 형식의 날짜 부분 추출
        return dateOnly;
    };

    const resetSelections = () => {
        setRouteSelection("없음");
        setGenderSelection(null);
        setDeptSelection(null);
        setDestSelection(null);
        setMinMemberSelection(null);
        setMaxMemberSelection(null);
        setMinPriceSelection(null);
        setMaxPriceSelection(null);
        setDateSelection(null);
    };

    const handleClose = async () => {
        const type = routeSelection === "없음" ? null : routeSelection;
        const clientGender = genderSelection === "없음" ? null : genderSelection;

        console.log("dateSelection:", dateSelection); // dateSelection 값 로깅

        const formattedDate = formatDateToISO(dateSelection);

        const body = {
            type: type,
            client_gender: clientGender,
            dept: deptSelection,
            dest: destSelection,
            min_member: minMemberSelection,
            max_member: maxMemberSelection,
            min_price: minPriceSelection,
            max_price: maxPriceSelection,
            carpool_date: formattedDate,
        };

        console.log("carpool_date:", body.carpool_date); // carpool_date 값 로깅
        console.log("Request body:", body); // 전체 요청 본문 로깅

        try {
            const response = await axios.post('http://nkey18.pythonanywhere.com/api/carpools/filter/', body);
            onClose();
            console.log(response.data);
            setResponseState(response.data);
            responseStateChange(response.data);
        } catch (error) {
            console.error('Fetch 작업 중 문제가 발생했습니다:', error);
        } finally {
            resetSelections();
        }
    };

    if (!show) {
        return null;
    }

    return (
        <Overlay>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={handleClose}>설정완료!</CloseButton>
                <FilterContainerType updateRouteSelection={updateRouteSelection} />
                <FilterContainerGender updateGenderSelection={updateGenderSelection} />
                <FilterContainerDate updateDateSelection={updateDateSelection} />
                <FilterContainerRoute 
                    routeSelection={routeSelection}
                    deptSelection={deptSelection}
                    destSelection={destSelection}
                    updateDeptSelection={setDeptSelection} 
                    updateDestSelection={setDestSelection} 
                />
                <FilterContainerMember
                    minMember={minMemberSelection} // useState의 왼쪽 parameter
                    maxMember={maxMemberSelection}
                    updateMinMemberSelection={setMinMemberSelection} //useState의 오른쪽 setter
                    updateMaxMemberSelection={setMaxMemberSelection}
                />
                <FilterContainerPrice 
                    minPrice={minPriceSelection} 
                    maxPrice={maxPriceSelection} 
                    updateMinPriceSelection={setMinPriceSelection} 
                    updateMaxPriceSelection={setMaxPriceSelection} 
                />
            </ModalContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 358px;
    height: 900px;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 1rem;
`;

const CloseButton = styled.button`
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 7rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: #164863;
    color: #FFF;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export default Filter;
