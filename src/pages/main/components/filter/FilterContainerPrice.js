import React, {useState} from "react";
import styled, {css} from "styled-components";



const FilterContainerMember = () => {

    const [selected, setSelected] = useState("없음");

    const handleSelect = (type) => {
        setSelected(type);
    };

        // 선택된 값에 따라 Container의 높이 설정
        const containerHeight = selected === "없음" ? "3rem" : "11.09538rem";

    return (
        <Container style={{height : containerHeight}}>
            <SubTitleContainerRow>
                <Subtitle>가격</Subtitle>
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
            {selected === "있음" && (
                <SelectContainerRow>
                    <MinMaxContainerColumn>
                        <Min>최소 가격</Min>
                        <Max>최대 가격</Max>
                    </MinMaxContainerColumn>
                    <MinMaxBoxContainerColumn>
                        <MinBox/>
                        <MaxBox/>
                    </MinMaxBoxContainerColumn>
                    <WonContainerColumn>
                        <Won>원</Won>
                        <Won>원</Won>
                    </WonContainerColumn>
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
`

const MinMaxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

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
`

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
`
const MinMaxBoxContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

const MinBox = styled.div`
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
const MaxBox = styled.div`
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

const WonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

const Won = styled.div`
    width: 3.875rem;
    height: 1.27763rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`





export default FilterContainerMember