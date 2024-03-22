import React from 'react'
import { SectionOne, SectionTop, SectionBottom, Aside, ParagraphOne, Text,BoxArea, Boxs, SectionTwo, ParagraphTwo, Cards, Span } from './Main-styled'
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
            <Text>bateu aquela <br/><Span>#fome</Span> de <Span>méqui?</Span></Text>
          </ParagraphOne>
        </SectionTop>
        <SectionBottom>
          <BoxArea>
            <Boxs>
            
            </Boxs>
            <Boxs>
              <img src={Batata} alt="Batata" />
            </Boxs>
            <Boxs>
              <img src={Sorvete} alt="Sorvete" />
            </Boxs>
          </BoxArea>
        </SectionBottom>
      </SectionOne>
      <SectionTwo>
        <ParagraphTwo>
          promoção 
        </ParagraphTwo>
        <Cards>

        </Cards>
      </SectionTwo>
    </>
  )
}

export default Main