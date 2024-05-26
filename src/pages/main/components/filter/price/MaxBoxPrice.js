import React, {useState} from "react";
import styled from "styled-components";

const MaxBoxPrice = () => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value === '' ? '' : Math.max(0, Math.min(50000, Number(event.target.value)));
        setValue(newValue);
    };

    return (
        <Container>
            <MinBox>
                <StyledInput
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min="0"
                    max="50000"
                    placeholder="인당"
                />
            </MinBox>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
`;

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.625rem;

    /* Hide the spin buttons */
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder {
        color: #d3d3d3; /* 연한 회색 */
        text-align: center;
    }

    &:focus {
        outline: none;
    }
`;


export default MaxBoxPrice