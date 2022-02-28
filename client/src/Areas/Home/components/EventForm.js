import React from "react";
import { FaTimes } from "react-icons/fa";
import {
    ModalBackground, ModalCloseButton, ModalHeader, ModalHeaderTitle,
    ModalHeaderDesc,
    ModalContent,
    ModalContainer
} from "./style";

const EventForm = ({
    isVisible, onClose,
    title, description
}) => {
    if (!isVisible){
        return null;
    }

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalCloseButton pc onClick={onClose}><FaTimes/> </ModalCloseButton>
                <ModalHeader>
                    <ModalCloseButton pc onClick={onClose}><FaTimes/> </ModalCloseButton>
                    <ModalHeaderTitle>
                        <span>{title}adsadasd</span>
                    </ModalHeaderTitle>
                    <ModalHeaderDesc>
                        asdasd
                    </ModalHeaderDesc>
                </ModalHeader>
                <ModalContent>
                    asdasd
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    )
}

export default EventForm;