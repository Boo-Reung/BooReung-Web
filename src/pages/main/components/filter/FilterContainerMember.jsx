import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import MinBoxMember from "./member/MinBoxMember";
import MaxBoxMember from "./member/MaxBoxMember";

const FilterContainerMember = ({ minMember, maxMember, updateMinMemberSelection, updateMaxMemberSelection }) => {
    const [maxValue, setMaxValue] = useState(maxMember || 1);
    const [minValue, setMinValue] = useState(minMember || 1);
    const [selected, setSelected] = useState("없음");

    useEffect(() => {
        if (selected === "없음") { // 없음 누르면 null 값으로 만들기
            setMinValue(null);
            setMaxValue(null);
            updateMinMemberSelection(null);
            updateMaxMemberSelection(null);
        } else {
            updateMinMemberSelection(minValue);
            updateMaxMemberSelection(maxValue);
        }
    }, [selected, minValue, maxValue, updateMinMemberSelection, updateMaxMemberSelection]);

    const handleMaxChange = (event) => {
        let newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            newValue = Math.min(10, Math.max(1, newValue));
            setMaxValue(newValue);
            if (minValue > newValue) {
                setMinValue(newValue);
            }
        }
    };

    const handleMinChange = (event) => {
        let newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            newValue = Math.min(maxValue, Math.max(1, newValue));
            setMinValue(newValue);
        }
    };

    const handleSelect = (type) => {
        setSelected(type);
    };

    const containerHeight = selected === "없음" ? "3rem" : "11.09538rem";

    return (
        <Container style={{ height: containerHeight }}>
            <SubTitleContainerRow>
                <Subtitle>인원</Subtitle>
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
            {selected === "있음" && (
                <SelectContainerRow>
                    <MinMaxContainerColumn>
                        <Min>최소 인원</Min>
                        <Max>최대 인원</Max>
                    </MinMaxContainerColumn>
                    <MinMaxBoxContainerColumn>
                        <MinBoxMember value={minValue} handleChange={handleMinChange} maxValue={maxValue} disabled={maxValue === null} />
                        <MaxBoxMember value={maxValue} handleChange={handleMaxChange} />
                    </MinMaxBoxContainerColumn>
                    <MyeongContainerColumn>
                        <Myeong>명</Myeong>
                        <Myeong>명</Myeong>
                    </MyeongContainerColumn>
                </SelectContainerRow>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 18.6875rem;
    height: 9.7505rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
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

const SelectContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

const MinMaxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`;

const Min = styled.div`
    width: 3.875rem;
    height: 1.27763rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Max = styled.div`
    width: 3.875rem;
    height: 1.27763rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const MinMaxBoxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const MyeongContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`;

const Myeong = styled.div`
    width: 3.875rem;
    height: 1.27763rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export default FilterContainerMember;
