import React, { useState } from 'react';
import styled from 'styled-components';

const MaxBoxMember = ({ value, handleChange }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (!newValue || (newValue > 0 && newValue <= 10)) { // MaxBoxMember에 숫자를 입력하지 않았거나 0보다 크고 10보다 작은 값인 경우
            setInputValue(newValue);
            handleChange(event);
        }
    };

    return (
        <Container>
            <MaxBoxInput 
                type="text" 
                inputMode="numeric" 
                pattern="[0-9]*"
                value={inputValue} 
                onChange={handleInputChange} 
                min="1"
                max="10"
            />
        </Container>
    );
};

const Container = styled.div`
    /* 필요한 스타일을 여기에 추가하세요 */
`;

const MaxBoxInput = styled.input`
    width: 7.5rem;
    height: 2.4375rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background: rgba(210, 236, 250, 0.00);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default MaxBoxMember;
