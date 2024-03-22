import styled from "styled-components";

export const NavBar = styled.nav `
    width: 100%;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    margin-left: 20px;
    border: 1px solid black;
`
export const Buttons = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    width: 120px;
`