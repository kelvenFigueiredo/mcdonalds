import React from "react";
import { NavBar, Logo, Buttons } from "./Header-styled";
import Logotipo from './../../assets/img/logo.png'

const Header = () => {
  return (
    <>
      <NavBar>
        <Logo>
           <img src={Logotipo} alt="Logotipo" />
        </Logo>
        <Buttons>
          <button>sim</button>
          <button>não</button>
        </Buttons>
      </NavBar>
    </>
  );
};

export default Header;
