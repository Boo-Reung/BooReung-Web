import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "./WarningModal";

const AppBar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const goToHome = () => {
        navigate("/");
    };

    const goBack = () => {
        window.history.back();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <BackButton
                src={"/images/back_icon.png"}
                onClick={goBack}
            />
            <Logo 
                src="/images/boo_reung_icon.png"
                onClick={goToHome}
            />
            <Warning
                src="/images/warning_icon.png"
                onClick={openModal}
            />
            {isModalOpen && <Modal onClose={closeModal} />}
        </Container>
    );
};

export default AppBar;

const Container = styled.div`
    width: 24.375rem;
    height: 4.375rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #E3F3FB;
`;

const BackButton = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.62rem;
    cursor: pointer;
`;

const Logo = styled.img`
    cursor: pointer;
`;

const Warning = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    margin-left: 0.62rem;
    cursor: pointer;
`;
