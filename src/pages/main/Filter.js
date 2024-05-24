import React from "react";
import styled from "styled-components";

const Filter = ({ show, onClose }) => {
    if (!show) {
        return null;
    }


    return (
        <Overlay>
            <ModalContainer onClick={e => e.stopPropagation()}> {/* 모달 내부 공백을 클릭해도 모달이 닫히지 않음 */}
                <CloseButton onClick={onClose}>설정완료!</CloseButton>
                {/* Filter modal content goes here */}
                
            </ModalContainer>
        </Overlay>

    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 330px;
    height: 800px;
    overflow-y: auto; /* Allow scrolling within the modal */
    position: relative;
`;

const CloseButton = styled.button`
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: #164863;
    color: #FFF;
    font-family: "Gowun Batang";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export default Filter