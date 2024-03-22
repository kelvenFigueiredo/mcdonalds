import React from "react";
import { NavBar } from "./Header-styled";

const Header = () => {
  return (
    <>
      <NavBar>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <button>sim</button>
          <button>não</button>
        </div>
      </NavBar>
    </>
  );
};

export default Header;
