import React, {useState} from "react";
import styled, {css} from "styled-components";

import RouteDropDown from "./route/RouteDropDown"
import RouteSearch from "./route/RouteSearch"

/* [목적 : 여행] 이면 출발, 도착지가 검색창이어야 한다. */
/* [목적 : 통학] 이면 출발, 도착지가 피그마대로 드롭다운 형식이어야 한다. */
/* [목적 : 없음] 여행 선택했을 떄와 동일 (출발, 도착지가 검색창) */

/* [경로 : 없음] 목적에서 무엇을 선택하든 검색창 및 드롭다운을 띄우지 않음 */


// 4) routeSelection은 목적 값임  (없음, 통학, 여행) FilterContainerType에서 정해진게 Filter.js가 업데이트 되어서 Filter.js에서 날아옴 */
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
                        무관
                    </ContentText>
                    <ContentText
                        isSelected={selected === "있음"}
                        onClick={() => handleSelect("있음")}
                    >
                        설정
                    </ContentText>
                </ContentTextRow>
            </SubTitleContainerRow>

            <DynamicContainer selected={selected}>
                {selected !== "없음" && (
                    <>
                        {routeSelection === "통학" ? (
                            <RouteDropDown/>
                        ) : (
                            <RouteSearch/>
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

export default FilterContainerRoute;
