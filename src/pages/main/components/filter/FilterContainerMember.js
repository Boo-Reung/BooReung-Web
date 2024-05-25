import React from "react";
import styled from "styled-components";

const FilterContainerMember = () => {
    return (
        <Container>
            <SubTitleContainerRow>
                <Subtitle>인원</Subtitle>
                <ContentText>없음</ContentText>                
            </SubTitleContainerRow>
            <SelectContainerRow>
                <MinMaxContainerColumn>
                    <Min>최소 인원</Min>
                    <Max>최대 인원</Max>
                </MinMaxContainerColumn>
                <MinMaxBoxContainerColumn>
                    <MinBox/>
                    <MaxBox/>
                </MinMaxBoxContainerColumn>
                <MyeongContainerColumn>
                    <Myeong>명</Myeong>
                    <Myeong>명</Myeong>
                </MyeongContainerColumn>
            </SelectContainerRow>
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

const MyeongContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

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
`





export default FilterContainerMember