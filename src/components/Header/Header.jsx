import React from "react";
import { NavBar, Logo, Buttons, ButtonOne, ButtonTwo } from "./Header-styled";
import Logotipo from './../../assets/img/logo.png'
import CelIcon from './../../assets/img/app.svg'
import CelMequi from './../../assets/img/app(1).svg'


const Header = () => {
  return (
    <>
      <NavBar>
        <Logo>
          <a href="#"> 
            <img src={Logotipo} alt="Logotipo" />
          </a>
        </Logo>
        <Buttons>
          <ButtonOne>
            <img src={CelIcon} alt="Celular" />
            <span>Baixe o App</span>
          </ButtonOne>
          <ButtonTwo>
            <span><strong>Peça seu Méqui</strong></span>
            <img src={CelMequi} alt="Celular Méqui" />
          </ButtonTwo>
        </Buttons>
      </NavBar>
    </>
  );
};

export default Header;
