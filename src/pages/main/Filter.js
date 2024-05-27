import React, { useState } from "react";
import styled from "styled-components";
import FilterContainerType from "./components/filter/FilterContainerType";
import FilterContainerGender from "./components/filter/FilterContainerGender";
import FilterContainerDate from "./components/filter/FilterContainerDate";
import FilterContainerRoute from "./components/filter/FilterContainerRoute";
import FilterContainerMember from "./components/filter/FilterContainerMember";
import FilterContainerPrice from "./components/filter/FilterContainerPrice";
import axios from "axios";

const Filter = ({ show, onClose }) => {
    const [routeSelection, setRouteSelection] = useState("없음"); /* 목적 */
    const [genderSelection, setGenderSelection] = useState("없음"); /* 성별 */
    const [deptSelection, setDeptSelection] = useState(null); /* 경로 (출발지) */
    const [destSelection, setDestSelection] = useState(null); /* 경로 (도착지) */
    const [minMemberSelection, setMinMemberSelection] = useState(null); /* 인원 (최소인원) */
    const [maxMemberSelection, setMaxMemberSelection] = useState(null); /* 인원 (최대인원) */
    const [minPriceSelection, setMinPriceSelection] = useState(''); /* 가격 (최소가격) */
    const [maxPriceSelection, setMaxPriceSelection] = useState(''); /* 가격 (최대가격) */
    const [dateSelection, setDateSelection] = useState(null); /* 날짜 선택 */

    const updateRouteSelection = (selection) => {
        setRouteSelection(selection);
    };

    const updateGenderSelection = (selection) => {
        setGenderSelection(selection);
    };

    const updateDateSelection = (date) => {
        setDateSelection(date);
    };

    const handleClose = async () => {
        const type = routeSelection === "없음" ? "None" : routeSelection;
        const clientGender = genderSelection === "없음" ? "None" : genderSelection;
    
        const body = {
            type: type,
            client_gender: clientGender,
            dept: deptSelection,
            dest: destSelection,
            min_member: minMemberSelection,
            max_member: maxMemberSelection,
            min_price: minPriceSelection,
            max_price: maxPriceSelection,
            carpool_date: dateSelection ? dateSelection.toISOString() : null,
        };
    
        try {
            const response = await axios.post('http://nkey18.pythonanywhere.com/api/carpools/filter/', body); // axios로 POST 요청 보내기
            // 요청이 성공하면 모달 닫기
            onClose();
            console.log(response.data);
        } catch (error) {
            console.error('Fetch 작업 중 문제가 발생했습니다:', error);
            // 필요시 에러 처리, 예를 들어 사용자에게 알림 표시
        }
    };

    if (!show) {
        return null;
    }

    return (
        <Overlay>
            <ModalContainer onClick={e => e.stopPropagation()}> {/* 모달 내부 공백을 클릭해도 모달이 닫히지 않음 */}
                <CloseButton onClick={handleClose}>설정완료!</CloseButton>
                <FilterContainerType updateRouteSelection={updateRouteSelection} />
                <FilterContainerGender updateGenderSelection={updateGenderSelection} />
                <FilterContainerDate updateDateSelection={updateDateSelection} />
                <FilterContainerRoute routeSelection={routeSelection} updateDeptSelection={setDeptSelection} updateDestSelection={setDestSelection} />
                <FilterContainerMember
                    minMember={minMemberSelection}
                    maxMember={maxMemberSelection}
                    updateMinMemberSelection={setMinMemberSelection}
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
    height: 800px;
    overflow-y: auto; /* Allow scrolling within the modal */
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
