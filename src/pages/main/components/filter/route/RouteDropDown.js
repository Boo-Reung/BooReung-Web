import React from "react";
import styled from "styled-components";
import DownArrow from "../../../../../assets/images/DownArrow.svg"


const RouteDropDown = () => {

    return (
        <DropDownContainerRow>
        <ArrowContainerColumn>
            <Start>출발</Start>
            <Arrow src={DownArrow} alt="arrow" />
            <Arrive>도착</Arrive>
        </ArrowContainerColumn>
        <RegionContainerColumn>
            <Region>지역</Region>
            <DeptBoxRegion />
            <DestBoxRegion />
        </RegionContainerColumn>
        <BusStopContainerColumn>
            <BusStop>정류장</BusStop>
            <DeptBoxBusStop />
            <DestBoxBusStop />
        </BusStopContainerColumn>
        </DropDownContainerRow>
    );
};

const DropDownContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ArrowContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
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

const RegionContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const BusStopContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const Region = styled.div``;

const BusStop = styled.div``;

const DeptBoxRegion = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DestBoxRegion = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeptBoxBusStop = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DestBoxBusStop = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
`;

export default RouteDropDown