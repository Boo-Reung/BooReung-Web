import React from "react";
import styled from "styled-components";
import DownArrow from "../../../../../assets/images/DownArrow.svg";

const RouteSearch = ({ deptSelection, destSelection, updateDeptSelection, updateDestSelection }) => {
    return (
        <SearchContainerRow>
            <ArrowContainerColumn>
                <Start>출발</Start>
                <Arrow src={DownArrow} alt="arrow" />
                <Arrive>도착</Arrive>
            </ArrowContainerColumn>
            <SearchBoxContainerColumn>
                <DeptBoxSearch 
                    value={deptSelection}
                    onChange={(e) => updateDeptSelection(e.target.value)} // 입력값 변경 시 상태 업데이트
                />
                <DestBoxSearch 
                    value={destSelection}
                    onChange={(e) => updateDestSelection(e.target.value)} // 입력값 변경 시 상태 업데이트
                />
            </SearchBoxContainerColumn>
        </SearchContainerRow>
    );
};

const SearchContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
`;

const Start = styled.div`
    width: 1.875rem;
    height: 1.34488rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Arrow = styled.img`
    width: 1.32263rem;
    height: 2.39694rem;
    flex-shrink: 0;
`;

const Arrive = styled.div`
    width: 1.875rem;
    height: 1.34488rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ArrowContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
`;

const SearchBoxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const DeptBoxSearch = styled.input`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 1rem;
`;

const DestBoxSearch = styled.input`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 1rem;
`;

export default RouteSearch;
