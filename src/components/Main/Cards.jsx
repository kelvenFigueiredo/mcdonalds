import React from "react";
import { Card, Img,Imagem, Div, H2,Button} from "./Cards-styled";
 
const Cards = (props) =>{
    return(
            <Card>
                <Imagem>
                    <Img src={props.imagem} alt={props.legenda} />
                </Imagem>
                <Div>
                    <H2>{props.texto}</H2>
                    <Button>Clique aqui</Button>
                </Div>
            </Card>
    );
}

export default Cards