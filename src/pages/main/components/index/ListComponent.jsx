import React from "react";
import styled from "styled-components";

const ListComponent = ({ carpool_info, onClick }) => {
    const { id, title, type, client_gender, dept, dest, member, price, created_at, carpool_date } = carpool_info

    console.log("받아온 정보들:", title, type, client_gender, dept, dest, member, price, created_at, carpool_date)
    const formattedType = `${type} 카풀`;

    // 성별에 따라 색상과 텍스트 포맷 설정
    const getGenderStyle = (gender) => {
        switch (gender) {
            case '여성':
                return { color: '#FF6DAA', text: `${gender}만` };
            case '남성':
                return { color: '#0084BD', text: `${gender}만` };
            case '성별무관':
                return { color: '#9EC747', text: `${gender}` };
            default:
                return { color: '#000', text: `${gender}` };
        }
    };

    const { color, text } = getGenderStyle(client_gender);

    const formattedRoute = `경로 : ${dept} -> ${dest}`;

    // 날짜와 시간을 원하는 형식으로 변환 (오전/오후 추가)
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? '오후' : '오전';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0시를 12시로 표시

        return `${year}-${month}-${day} ${ampm} ${String(hours).padStart(2, '0')}:${minutes}`;
    };

    const formattedDate = `카풀 날짜 : ${formatDate(carpool_date)}`;
    const formattedMember = `인원 : ${member} 명`;
    const formattedPrice = `가격(1인당) : ${price} 원`;

    return (
        <Container onClick={() => onClick(id)}>
            <Title>{title}</Title>
            <ContentContainer>
                <RowContainer>
                    <Type>{formattedType}</Type>
                    <ClientGender color={color}>{text}</ClientGender>
                </RowContainer>
                <Route>{formattedRoute}</Route>
                <CarpoolDate>{formattedDate}</CarpoolDate>
                <Member>{formattedMember}</Member>
                <Price>{formattedPrice}</Price>
            </ContentContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 21.875rem;
    height: 15.625rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;

const Title = styled.div`
    width: 17.375rem;
    height: 2.28038rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.875rem;
    align-items: center;
    gap: 0.5rem;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 21.875rem;
`;

const Type = styled.div`
    width: 7.7rem;
    height: 1.8125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`;

const ClientGender = styled.div`
    width: 5.8125rem;
    height: 1.98169rem;
    flex-shrink: 0;
    color: ${props => props.color};
    font-family: "Gowun Batang";
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`;

const Route = styled.div`
    width: 20.5rem;
    height: 1.8125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CarpoolDate = styled.div`
    width: 20.5rem;
    height: 1.8125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Member = styled.div`
    width: 20.5rem;
    height: 1.8125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Price = styled.div`
    width: 20.5rem;
    height: 1.8125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export default ListComponent;
