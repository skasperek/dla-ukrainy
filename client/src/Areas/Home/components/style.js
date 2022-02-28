import styled, {css} from "styled-components";
import { Colors } from "../../../shared/styles/colors";

export const ModalBackground = styled.div`
    top: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    cursor: default;
    background: rgba(255,255,255, .1);
    transition: .3s ease;
    z-index: 999;

    ~ * {
        transition: filter .3s;
        filter: blur(6px);
    }
`;

export const ModalContainer = styled.div`
    max-width: 650px;    
    background: ${Colors.modalBg};
    border-radius: 15px;
    width: 100%;
    position: relative;
    padding: 2rem;
    max-height: 80vh;
    overflow-y: auto;
    cursor: default;
    color: ${Colors.simpleText};
    margin-right: .5rem;
    margin-left: .5rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    scrollbar-width: thin;
    scrollbar-color: ${Colors.scrollbarBg} ${Colors.scrollbar};

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${Colors.scrollbarBg};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${Colors.scrollbar};
        border-radius: 10px;
    }

    @media (max-width: 350px) {
        padding: 20px;
    }

    @media (max-width: 500px) {
        max-height: 95vh;
        border-radius: 0px;
    }
`;

export const ModalCloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    color: ${Colors.defaultText};
    font-size: 40px;

    ${({pc}) => pc && css`
        @media (max-width: 350px) {display: none; opacity: 0;}
    `}
    ${({mobile}) => mobile && css`
        display: none;
        opacity: 0;
        font-size: 15px;
        top: 20px;
        right: 20px;

        @media (max-width: 350px) {display: block; opacity: 1}
    `}
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
`;

export const ModalHeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 10px;

    @media (max-width: 350px) {
        padding: 10px 0;
    }

    span{
        opacity: .8;
        font-size: 30px;
        color: ${Colors.modalTitle};

        @media (max-width: 350px) {
            font-size: 25px;
            text-align: center;
        }
    }
`;

export const ModalHeaderDesc = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1.5rem;

    span {
        opacity: .6;
        font-size: 14px;
    }
`;

export const ModalContent = styled.div`
    padding: 0 1.5rem;

    @media (max-width: 350px) {
        padding: 0;
    }
`;
