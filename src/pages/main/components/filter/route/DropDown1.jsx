import React, { useState } from 'react';
import styled from "styled-components";

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 200px; /* 고정된 너비 설정 */
`;

const ToggleButton = styled.div`
    padding: 10px;
    margin: 10px;
    border-radius: 0.625rem;
    border: 1px solid #9BBEC8;
    background-color: #f0f0f0;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DropdownMenu = styled.ul`
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%; /* 부모 요소와 같은 너비로 설정 */
    max-height: 200px; /* 고정된 높이 설정 */
    overflow-y: auto; /* 내용이 넘칠 경우 스크롤 표시 */
    z-index: 1;
`;

const MenuItem = styled.li`
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f1;
    }
`;

const Dropdown1 = ({ onSelect }) => { // onSelect props를 받도록 수정
    const [view, setView] = useState(false); 
    const [selectedFruit, setSelectedFruit] = useState('지역을\n선택하세요');

    const handleFruitSelect = (dest) => {
        setSelectedFruit(dest);
        setView(false);
        onSelect(dest); // 선택한 값을 상위 컴포넌트로 전달
    };

    return (
        <DropdownContainer>
            <ToggleButton onClick={() => setView(!view)}>
                <span style={{ whiteSpace: 'pre-wrap' }}>{selectedFruit}</span>
                <span>{view ? '⌃' : '⌄'}</span>
            </ToggleButton>
            <DropdownMenu show={view}>
                {/* Dropdown2로 onSelect 콜백 함수 전달 */}
                <Dropdown onSelect={handleFruitSelect} />
            </DropdownMenu>
        </DropdownContainer>
    );
};

const Dropdown = ({ onSelect }) => {
    const Reg = [
        { id: '001', reg: '판교, 서현 거점 노선' },
        { id: '002', reg: '경기광주역' },
        { id: '003', reg: '캠퍼스간' },
        { id: '004', reg: '이문, 망우, 남양주 노선' },
        { id: '005', reg: '이문, 돌곶이 노선' },
        { id: '006', reg: '노원, 구리 노선' },
        { id: '007', reg: '광화문 노선' },
        { id: '008', reg: '신길 노선' },
        { id: '009', reg: '삼성 수서 노선' },
        { id: '010', reg: '강남역 노선' },
        { id: '011', reg: '잠실, 천호, 하남 노선' },
        { id: '012', reg: '일산 노선' },
        { id: '013', reg: '부평 노선' },
        { id: '014', reg: '범계 노선' },
        { id: '015', reg: '안산 노선' },
        { id: '016', reg: '수원 노선' },
        { id: '017', reg: '수지 노선' },
        { id: '018', reg: '신갈 노선' }
    ];

    return (
        <div>
            {Reg.map((item) => (
                <MenuItem key={item.id} onClick={() => onSelect(item.reg)}>
                    {item.reg}
                </MenuItem>
            ))}
        </div>
    );
};

export default Dropdown1;

