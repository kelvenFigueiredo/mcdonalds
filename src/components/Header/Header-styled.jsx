import styled from "styled-components";

export const NavBar = styled.nav `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    margin-left: 40px;
`
export const Buttons = styled.section`
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    width: 390px;
    height: 50px;
`
export const ButtonOne = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`
export const ButtonTwo = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    background-color: #FFC72C;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
`