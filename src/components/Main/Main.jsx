import React from 'react'
import { SectionOne, SectionTop, SectionBottom, Aside, ParagraphOne, TextOne,BoxArea, Boxs, SectionTwo, ParagraphTwo, Span,TextTwo,Cardss } from './Main-styled'
import Cards from './Cards'
import BigMac from './../../assets/img/bigmac.png'
import Batata from './../../assets/img/batata.svg'
import Sorvete from './../../assets/img/sorvete.svg'
import Sofa from './../../assets/img/B2899_CRIMCD_030_410x180_mequinosofa_3b025848f3 1.png'
import Loja from './../../assets/img/Restaurantes_Participantes_1440x650_edc2805c19 1.png'
import Atendente from './../../assets/img/Banner_Rodapee_estamos_Juntos_01_410x180xp_809c5044aa 1.png'

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
        <Cardss>
          <Cards imagem={Sofa} legenda={"Sofá"} texto="Que tal um #MéquiNoSofá?" />
          <Cards imagem={Loja} legenda={"Loja"} texto="Venha conhecer nossa nova loja" />
          <Cards imagem={Atendente} legenda={"Atendente"} texto="Confira as medidas que o Méqui adotou!" />
        </Cardss>

      </SectionTwo>
    </>
  )
}

export default Main