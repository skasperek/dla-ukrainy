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

export const MapMenuButton = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid ${Colors.tabBorder};
    border-radius: 5px;
    box-shadow: 0 0 5px ${Colors.tabBorder};
    position: relative;
    padding: 10px 20px;
    color: ${Colors.tabTitle};
    font-size: 16px;

    &:hover{
        cursor: pointer;
    }
`;

export const MenuTabs = styled.div`    
    width: 100%;
    flex: 1;
    display: flex;
    position: relative;
    padding-top: 20px;

    /* ${({moreInfo}) => moreInfo && css`
        overflow: hidden;
    `}; */
`;

export const MenuTabsContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateX(0%);
    transition: transform .5s;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 3px;

    /* ${({moreInfo}) => moreInfo && css`
        transform: translateX(-150%);
        overflow: hidden;
    `}; */


`;

export const SearchTab = styled.div`
    padding: 15px;
    /* overflow: hidden; */
    display: flex;
    gap: 20px;
    border: 1px solid ${Colors.tabBorder};
    border-radius: 5px;
    box-shadow: 0 0 5px ${Colors.tabBorder};
    position: relative;


    @media (max-width: 350px) {
        gap: 10px;
        padding: 10px;
    }

    ::before, ::after {
        content: '';
        width: 5px;
        height: 100px;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        background: ${Colors.tabHover};
        opacity: 0;
        transition: opacity .1s;
    }

    ::after {
        right: 0;
        left: auto;
    }

    :hover {
        ::before, ::after {
            opacity: 1;
        }
    }
`;

export const Tab = styled.div`
    display: flex;
    gap: 10px;
    flex: 1;
`;

export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: calc(100% - 80px);

    @media (max-width: 1024px) { max-width: 100%; }
`;

export const TabTitle = styled.div`
    color: ${Colors.tabTitle};
    font: normal 400 18px/21px Roboto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    span {
        padding-right: 10px;
    }

    div:not(:last-of-type) {
        margin-right: 7.5px;
    }
`;

export const TabTitleAddons = styled.div`
    display: flex;
    gap: 5px;
    padding-bottom: 5px;
`;

export const TabTitleAddon = styled.div`
    background: ${({isnew}) => isnew ? Colors.tabAddonNewBG : Colors.tabAddonBestBG};
    padding: 5px 10px;
    color: ${({isnew}) => isnew ? Colors.tabAddonNewColor : Colors.tabAddonBestColor};
    font: normal 400 13px/15px Roboto;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: default;
    position: relative;

    :hover {
        >div { opacity: 1; visibility: visible; }
    }
`;

export const AddonTooltipTail = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    left: 50%;
    bottom: -5px;
    transform: translate(-50%) rotate(45deg);
    background: ${Colors.loginTooltip};
    z-index: -1;
`;

export const AddonTooltip = styled.div`
    position: absolute;
    top: -150%;
    left: 50%;
    transform: translateX(-50%);
    background: ${Colors.loginTooltip};
    color: ${Colors.loginTooltipText};
    padding: 10px 30px;
    border-radius: 5px;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    transition: opacity .1s;
`;

export const TabIMGBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${({flex}) => flex && css`
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 15px;
    `};

    @media (max-width: 1024px) { display: none; }
`;
export const TabIMG = styled.img.attrs({src: 'https://via.placeholder.com/60x60'})`
    width: ${({big}) => big ? "100px" : "60px"};
    height: ${({big}) => big ? "100px" : "60px"};

    @media (max-width: 350px) {
        width: 50px;
        height: 50px;
    }
`;

export const SearchTools = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    padding: 15px 15px 0 15px;
`;