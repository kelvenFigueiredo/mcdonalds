import styled from "styled-components";

export const NavBar = styled.nav `
    width: 100%;
    height: 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    margin-left: 3vw;
`
export const Buttons = styled.section`
    margin-right: 3vw;
    display: flex;
    justify-content: space-between;
    width: 28vw;
    height: 3.4vw;
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
    border-radius: 0.8vw;
    align-items: center;
    cursor: pointer;
`