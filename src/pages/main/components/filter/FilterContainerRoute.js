import React, {useState} from "react";
import styled, {css} from "styled-components";
import DownArrow from "../../../../assets/images/DownArrow.svg"

/* [목적 : 여행] 이면 출발, 도착지가 검색창이어야 한다. */
/* [목적 : 통학] 이면 출발, 도착지가 피그마대로 드롭다운 형식이어야 한다. */
/* [목적 : 없음] 여행 선택했을 떄와 동일 (출발, 도착지가 검색창) */

/* [경로 : 없음] 목적에서 무엇을 선택하든 검색창 및 드롭다운을 띄우지 않음 */

const FilterContainerRoute = ({ routeSelection }) => {
    const [selected, setSelected] = useState("없음");

    const handleSelect = (type) => {
        setSelected(type);
    };

        // 선택된 값에 따라 Container의 높이 설정
        const containerHeight = selected === "없음" ? "3rem" : "11.09538rem";

    return (
        <Container style={{height : containerHeight}}>
            <SubTitleContainerRow>
                <Subtitle>경로</Subtitle>
                <ContentTextRow>
                    <ContentText
                        isSelected={selected === "없음"}
                        onClick={() => handleSelect("없음")}
                    >
                        없음
                    </ContentText>
                    <ContentText
                        isSelected={selected === "있음"}
                        onClick={() => handleSelect("있음")}
                    >
                        있음
                    </ContentText>
                </ContentTextRow>
            </SubTitleContainerRow>

            <DynamicContainer selected={selected}>
                {selected !== "없음" && (
                    <>
                        {routeSelection === "통학" ? (
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
                        ) : (
                            <SearchContainerRow>
                                <ArrowContainerColumn>
                                    <Start>출발</Start>
                                    <Arrow src={DownArrow} alt="arrow" />
                                    <Arrive>도착</Arrive>
                                </ArrowContainerColumn>
                                <SearchBoxContainerColumn>
                                    <DeptBoxSearch />
                                    <DestBoxSearch />
                                </SearchBoxContainerColumn>
                            </SearchContainerRow>
                        )}
                    </>
                )}
            </DynamicContainer>
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
`;

const SubTitleContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

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
`;

const ContentTextRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
`;

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

    ${({ isSelected }) =>
        isSelected &&
        css`
            background: #003e5f;
            color: white;
            border: 1px solid #003e5f;
        `}
`;

const DynamicContainer = styled.div`
    ${({ selected }) =>
        selected === "있음"
            ? css`
                  height: auto; /* "있음"이 선택된 경우, 컨테이너의 높이를 자동으로 설정하여 내용을 표시함 */
              `
            : css`
                  height: 0; /* "없음"이 선택된 경우, 컨테이너의 높이를 0으로 설정하여 내용을 숨김 */
                  overflow: hidden; /* 내용을 숨기기 위해 overflow를 hidden으로 설정함 */
              `}
`;

const DropDownContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SearchContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
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

const SearchBoxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const DeptBoxSearch = styled.div`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DestBoxSearch = styled.div`
    width: 15.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9bbec8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default FilterContainerRoute;
