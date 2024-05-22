import React from "react";
import styled from "styled-components";

const Filter = ({ show, onClose }) => {
    if (!show) {
        return null;
    }


    return (
        <Overlay>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>설정완료!</CloseButton>
                {/* Filter modal content goes here */}
            </ModalContainer>
        </Overlay>

    );
};

const Overlay = styled.div`
    position: fixed;
    width: 330px;
    height: 952px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

export default Filter