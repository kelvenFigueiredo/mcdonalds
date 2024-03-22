import React from 'react'
import { SectionOne, SectionTop, SectionBottom, Aside, ParagraphOne,BoxArea, Boxs, SectionTwo, ParagraphTwo, Cards } from './Main-styled'

const Main = () => {
  return (
    <>
      <SectionOne>
        <SectionTop>
          <Aside>
            Lorem 
          </Aside>
          <ParagraphOne>
            Lorem ipsum 
          </ParagraphOne>
        </SectionTop>
        <SectionBottom>
          <BoxArea>
            <Boxs>

            </Boxs>
            <Boxs>
              
            </Boxs>
            <Boxs>

            </Boxs>
          </BoxArea>
        </SectionBottom>
      </SectionOne>
      <SectionTwo>
        <ParagraphTwo>
          Lorem ipsum 
        </ParagraphTwo>
        <Cards>

        </Cards>
      </SectionTwo>
    </>
  )
}

export default Main