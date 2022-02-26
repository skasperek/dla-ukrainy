import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../../shared/styles/colors";

export const NavHeader = styled.nav`
    width: 100%;
    position: ${({classic}) => classic ? "relative" : "sticky"};
    top: 0;
    left: 0;
    z-index: 401;
    background: ${Colors.navDropdownBG};
    font-weight: 500;
    font-size: 15px;
    border-bottom: 1px solid ${Colors.navBottomBorder};

    @media (max-width: 1400px){
        padding: 0 20px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1300px;
    margin: auto;
`;

export const NavLogo = styled.div`
    padding: 25px 0;
    z-index: 100;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: stretch;

    @media (max-width: 350px){
        position: fixed;
        bottom: ${({show}) => show ? "0" : "-100%"};;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0,0,0,.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }
`;

export const NavList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, auto);

    &>* {
        display: flex;
        align-items: stretch;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:not(:nth-last-of-type(-n+1)) {
        margin: ${({longerMargin}) => longerMargin ? "0 50px" : "0 25px"};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 3px;
        width: 0;
        background: ${Colors.navHover};
        transition: width .2s;
    }

    ${p => p.currentPage && css`
        a { color: ${Colors.navHover}; }

        &::after { width: 100%; }
    `};

    ${p => p.hoverable && css`
        :hover {
            a { color: ${Colors.navHover}; }

            &::after { width: 100%; }
        }
    `}

    ${({flag}) => flag && css`
        height: 100%;
        min-width: 50px;

        :hover > div {
            visibility: visible;
            opacity: 1;
        }
    `}
`;

export const NavLink = styled(Link)`
    color: ${Colors.navHoverless};
    text-transform: uppercase;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &:nth-last-child(2){
        background: ${Colors.primaryColor};
        padding: 10px 15px;
        color: #fff;
        font-weight: 700;
        border-radius: 8px;
    }
`;
