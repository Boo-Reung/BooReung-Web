import React from "react";
import styled from "styled-components";

const MaxBoxPrice = ({ maxPrice, setMaxPrice }) => {
    const handleChange = (event) => {
        const newValue = event.target.value === '' ? '' : Math.max(0, Math.min(50000, Number(event.target.value)));
        setMaxPrice(newValue);
    };

    return (
        <MaxBox>
            <StyledInput
                type="number"
                value={maxPrice}
                onChange={handleChange}
                min="0"
                max="50000"
                placeholder="먼저 입력"
            />
        </MaxBox>
    );
};

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
        color: #d3d3d3;
        text-align: center;
    }

    &:focus {
        outline: none;
    }
`;

export default MaxBoxPrice;
