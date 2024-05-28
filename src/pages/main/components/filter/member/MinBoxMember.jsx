import React, { useState } from 'react';
import styled from 'styled-components';

const MinBoxMember = ({ value, handleChange, maxValue, disabled }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (!newValue || (newValue >= 1 && newValue <= maxValue)) { // MinBoxMember에 숫자를 입력하지 않았거나 MaxBoxMember 값보다 작거나 같은 경우
            setInputValue(newValue);
            handleChange(event);
        }
    };

    return (
        <Container>
            <MinBoxInput
                type="text"
                inputMode="numeric" 
                pattern="[0-9]*"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={(event) => event.target.select()} // 입력값 선택
                min="1"
                max={maxValue || 10}
                disabled={disabled} // MaxBoxMember의 값이 없을 때 비활성화
            />
        </Container>
    );
};

const Container = styled.div`
    /* 필요한 스타일을 여기에 추가하세요 */
`;

const MinBoxInput = styled.input`
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

export default MinBoxMember;
