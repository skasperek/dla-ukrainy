import React from "react";
import { Link } from "react-router-dom";
import {IoMapSharp} from "react-icons/io5"
import {
    NavContainer, NavHeader, NavList, NavLogo, NavMenu, NavItem, NavLink
} from "./style"

const Navbar = (props) => {
    return (
        <NavHeader>
            <NavContainer>
                <NavLogo>
                    <Link to="/">DlaUkrainy</Link>
                </NavLogo>
                <NavMenu>
                    <NavList>
                        <NavItem hoverable currentPage={props.home}>
                            <NavLink to="/"><IoMapSharp className="nav-icon" /> MAPA</NavLink>
                        </NavItem>
                        <NavItem hoverable currentPage={props.home}>
                            <NavLink to="/"><IoMapSharp className="nav-icon" /> MAPA</NavLink>
                        </NavItem>
                        <NavItem hoverable currentPage={props.home}>
                            <NavLink to="/"><IoMapSharp className="nav-icon" /> MAPA</NavLink>
                        </NavItem>
                    </NavList>
                </NavMenu>
            </NavContainer>
        </NavHeader>
    )
}

export default Navbar;