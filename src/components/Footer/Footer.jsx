import React from 'react'
import { Section,LogoDesc,AppStore,Span } from './Footer-style'
import Logo from './../../assets/img/logo.png'
import AppOne from './../../assets/img/pla.png'
import AppTwo from './../../assets/img/app_store_3x_d293084ca1 1.png'


const Footer = () => {
  return (
    <>
      <Section>
        <LogoDesc>
          <img src={Logo} alt="MacLogo"  width={25} height={25}/>
          <Span>© McDonald’s 2024</Span>
        </LogoDesc>
        <AppStore>
          <img src={AppOne} alt="Google Play" />
          <img src={AppTwo} alt="App Store" />
        </AppStore>
      </Section>
    </>
  )
}

export default Footer