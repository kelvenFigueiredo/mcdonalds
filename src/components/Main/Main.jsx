import React from 'react'
import { SectionOne, SectionTop, SectionBottom, Aside, ParagraphOne, TextOne,BoxArea, Boxs, SectionTwo, ParagraphTwo, Cards, Span,TextTwo } from './Main-styled'
import BigMac from './../../assets/img/bigmac.png'
import Batata from './../../assets/img/batata.svg'
import Sorvete from './../../assets/img/sorvete.svg'
import { useState } from 'react'

const Main = () => {
  const[imagem, setImagem] = useState(BigMac)


  return (
    <>
      <SectionOne>
        <SectionTop>
          <Aside>
            <img src={imagem} alt="BigMac" width={300} height={300}/> 
          </Aside>
          <ParagraphOne>
            <TextOne>bateu aquela <br/><Span>#fome</Span> de <Span>méqui</Span>?</TextOne>
         </ParagraphOne>
        </SectionTop>
        <SectionBottom>
          <BoxArea>
            <Boxs>
              <img onClick={()=>{setImagem(BigMac)}} src={BigMac} alt="BigMac" width={90} height={90} />
            </Boxs>
            <Boxs>
              <img onClick={()=>{setImagem(Batata)}} src={Batata} alt="Batata"  width={90} height={90} />
            </Boxs>
            <Boxs>
              <img onClick={()=>{setImagem(Sorvete)}} src={Sorvete} alt="Sorvete"  width={90} height={90} />
            </Boxs>
          </BoxArea>
        </SectionBottom>
      </SectionOne>
      <SectionTwo>
        <ParagraphTwo>
          <TextTwo>promoção</TextTwo>
        </ParagraphTwo>
        <Cards>

        </Cards>
      </SectionTwo>
    </>
  )
}

export default Main