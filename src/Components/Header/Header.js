import React from "react";
import Logo from "../../assets/nu-logo-white.svg";
import { Navbar } from "./styles";

function Header() {
    return (
        <Navbar>
            <div className="logo">
                <img src={Logo} alt="nu-logo" />
            </div>
            <div className="titulo">
                <span>Seja Bem-Vindo</span>
            </div>
        </Navbar>
    );
}

export default Header;
