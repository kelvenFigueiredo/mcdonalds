import React from 'react'
import { SectionOne, SectionTop, SectionBottom, Aside, ParagraphOne, TextOne,BoxArea, Boxs, SectionTwo, ParagraphTwo, Cards, Span,TextTwo } from './Main-styled'
import BigMac from './../../assets/img/bigmac.png'
import Batata from './../../assets/img/batata.svg'
import Sorvete from './../../assets/img/sorvete.svg'

const Main = () => {
  return (
    <>
      <SectionOne>
        <SectionTop>
          <Aside>
            <img src={BigMac} alt="BigMac" /> 
          </Aside>
          <ParagraphOne>
            <TextOne>bateu aquela <br/><Span>#fome</Span> de <Span>méqui</Span>?</TextOne>
         </ParagraphOne>
        </SectionTop>
        <SectionBottom>
          <BoxArea>
            <Boxs>
              <img src={BigMac} alt="BigMac" width={90} height={90} />
            </Boxs>
            <Boxs>
              <img src={Batata} alt="Batata"  width={90} height={90} />
            </Boxs>
            <Boxs>
              <img src={Sorvete} alt="Sorvete"  width={90} height={90} />
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