import React from "react";
import { NavBar, Logo, Buttons } from "./Header-styled";

const Header = () => {
  return (
    <>
      <NavBar>
        <Logo>
           <h1>Logo</h1>
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
