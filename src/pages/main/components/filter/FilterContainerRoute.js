import React, {useState} from "react";
import styled, {css} from "styled-components";
import DownArrow from "../../../../assets/images/DownArrow.svg"

/* [목적 : 여행] 이면 출발, 도착지가 검색창이어야 한다. */
/* [목적 : 통학] 이면 출발, 도착지가 피그마대로 드롭다운 형식이어야 한다. */
/* [목적 : 없음] 여행 선택했을 떄와 동일 (출발, 도착지가 검색창) */

/* [경로 : 없음] 목적에서 무엇을 선택하든 검색창 및 드롭다운을 띄우지 않음 */

const FilterContainerRoute = () => {

    const [selected, setSelected] = useState("없음");

    const handleSelect = (type) => {
        setSelected(type);
    };

    return (
        <Container>
            <SubTitleContainerRow>
                <Subtitle>경로</Subtitle>
            <ContentTextRow>
                <ContentText
                    isSelected={selected === "없음"}
                    onClick={() => handleSelect("없음")}
                >없음</ContentText>
                <ContentText
                    isSelected={selected === "있음"}
                    onClick={() => handleSelect("있음")}
                >있음</ContentText>                   
            </ContentTextRow>
            </SubTitleContainerRow>
            <DropDownContainerRow>
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
            </DropDownContainerRow>
            <SearchContainerRow>
                <ArrowContainerColumn>
                    <Start>출발</Start>
                    <Arrow src={DownArrow} alt="arrow"/>
                    <Arrive>도착</Arrive>
                </ArrowContainerColumn>
                <SearchBoxContainerColumn>
                    <DeptSearchBox/>
                    <DestSearchBox/> 
                </SearchBoxContainerColumn>
            </SearchContainerRow>


        </Container>
    );
};

const SearchBoxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

const DeptSearchBox = styled.div`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`

const DestSearchBox = styled.div`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`

/* 15.5rem */
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
const ContentTextRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
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
    cursor: pointer;


    ${({ isSelected }) => isSelected &&
        css`
            background: #003E5F;
            color: white;
            border: 1px solid #003E5F;
        `}    
`

const DropDownContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SearchContainerRow = styled.div`
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