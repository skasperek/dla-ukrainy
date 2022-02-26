import styled, {css} from "styled-components";
import { Colors } from "../../../shared/styles/colors";

export const MapWrapper = styled.main`
    display: flex;
    height: calc(100vh - 95px);
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    transition: filter .3s;
    ${({blur}) => blur && css` filter: blur(2px) grayscale(10%) brightness(50%); `}
`;

export const MapContent = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
`;

export const MapMenu = styled.div`
    max-width: 0px;
    z-index: 4;
    position: relative;
    transition: max-width .2s;
    flex-direction: column;
    display: flex;

    ${({showMenu}) => showMenu && css`
        max-width: 600px;
    `};

    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        position: absolute;
        ${({showMenu}) => showMenu && css`
            max-width: 100%;
        `};
    }
`;

export const MapMenuButtons = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    gap: 10px;
    padding: 15px 15px 0 15px;
`;