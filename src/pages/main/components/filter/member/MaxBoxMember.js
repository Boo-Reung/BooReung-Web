import React, { useState } from "react";
import styled from "styled-components";

const MaxBoxMember = () => {
    // 입력된 값의 상태를 관리합니다. 기본값은 1입니다.
    const [value, setValue] = useState(1);

    // 입력된 값이 유효한지 확인하는 함수
    const handleChange = (event) => {
        // 입력된 값
        let newValue = parseInt(event.target.value);

        // 입력된 값이 숫자인지 확인하고, 1에서 10 사이의 값으로 제한합니다.
        if (!isNaN(newValue)) {
            newValue = Math.min(10, Math.max(1, newValue));
            setValue(newValue);
        }
    };

    return (
        <Container>
            <MaxBoxInput
                type="number"
                value={value}
                onChange={handleChange}
                min="1" // 최소값은 1입니다.
                max="10" // 최대값은 10입니다.
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
