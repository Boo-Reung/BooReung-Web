import React from 'react';
import styled from 'styled-components';

const MaxBoxMember = ({ value, handleChange }) => {
    return (
        <Container>
            <MaxBoxInput
                type="number"
                value={value}
                onChange={handleChange}
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
