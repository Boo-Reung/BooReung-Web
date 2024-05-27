import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const FilterContainerDate = ({ updateDateSelection }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [datePickerOpen, setDatePickerOpen] = useState(false);

    const toggleDatePicker = () => {
        setDatePickerOpen(!datePickerOpen);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date ? date.toLocaleString('sv-SE', { timeZoneName: 'short' }) : null;
        updateDateSelection(formattedDate);
    };

    return (
        <Container>
            <Subtitle>날짜 (선택 날짜 이후)</Subtitle>
            <DatePickerContainer onClick={toggleDatePicker}>
                <StyledDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    showTimeSelect={false} // Disable time selection
                    open={datePickerOpen}
                    placeholderText="날짜 선택하기! (클릭)"
                />
            </DatePickerContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 18.6875rem;
    height: 4.92556rem;
    flex-shrink: 0;
    margin-bottom: 2rem;
`;

const Subtitle = styled.div`
    width: 18.5rem;
    height: 2.125rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const DatePickerContainer = styled.div`
    width: 100%;
    height: 61px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 0.5rem;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const StyledDatePicker = styled(DatePicker)`
    width: 12rem;
    height: 1.4375rem;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    text-align: center;

    &::placeholder {
        font-size: 1rem;
        color: #000;
        text-align: center;
    }
`;

export default FilterContainerDate;
