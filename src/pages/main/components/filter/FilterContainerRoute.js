import React from "react";
import styled from "styled-components";
import DownArrow from "../../../../assets/images/DownArrow.svg"

const FilterContainerRoute = () => {
    return (
        <Container>
            <SubTitleContainerRow>
                <Subtitle>경로</Subtitle>
                <ContentText>없음</ContentText>                
            </SubTitleContainerRow>
            <SelectContainerRow>
                <ArrowContainerColumn>
                    <Start>출발</Start>
                    <Arrow src={DownArrow} alt="arrow"/>
                    <Arrive>도착</Arrive>
                </ArrowContainerColumn>
                <RegionContainerColumn>
                    <Region>지역</Region>
                    <DeptBox/>
                    <DestBox/>
                </RegionContainerColumn>
                <BusStopContainerColumn>
                    <Region>정류장</Region>
                    <DeptBox/>
                    <DestBox/>                    
                </BusStopContainerColumn>
            </SelectContainerRow>
        </Container>
    );
};

const Container = styled.div`
    width: 18.6875rem;
    height: 11.09538rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const SubTitleContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`

const Subtitle = styled.div`
    width: 3.5rem;
    height: 2.125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: auto;
`

const ContentText = styled.div`
    width: 6rem;
    height: 2.62256rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ArrowContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
`

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
`

const Arrow = styled.img`
    width: 1.32263rem;
    height: 2.39694rem;
    flex-shrink: 0;
`
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
`
const RegionContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`
const BusStopContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`
const Region = styled.div`

`
const DeptBox = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`
const DestBox = styled.div`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`







export default FilterContainerRoute