import styled from "styled-components";

export const Cardss = styled.section`
    justify-content: space-between;
    display: inline-flex;
    width: 100%;
    border: 1px solid black; 
`
export const Card = styled.div`
    width: 350px;
    height: 310px;
    display: inline;
    justify-content: center;
    background-color: white;
    border-radius: 18px 18px;

`

export const Img = styled.img`
    width: 100%;
    height: 160px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 18px 18px 0px 0px;
`
export const Button = styled.button`
    height: 42px;
    width: 160px;
    margin-left: 30%;
    background-color: #FFBC0D;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #FFC72A;
        transition: 0.5s;
    }
`
export const Imagem = styled.div`
    width: 100%;
`
export const H2 = styled.div`
    margin: 20px 32px;
    height: 40px;
    display: flex;
    font-weight: bolder;
    font-size: 22px;
    justify-content: center;
    align-items: center;
`
export const Div = styled.div`
    height: 130px;
    display: block;
    justify-content: center;
    align-items: center;
`