import React from "react";
import * as S from "../components/style"

import Logo from "../assets/LogoOdsNoBG.png"

export default function Header(){

    const HeaderComponent = () => {
      return(
        <S.MenuHeader>
          <S.LogoBox>
            <S.Logo src={Logo} alt="Logo ODSs"/>
          </S.LogoBox>
        <S.NavHeader>
          <S.HeaderList>
           <S.HeaderLink to={"/"}><S.NavItem>Home</S.NavItem></S.HeaderLink> 
           <S.HeaderLink to={"/OdsMeuBairro"}><S.NavItem>ODS: Meu Bairro</S.NavItem></S.HeaderLink>
            <S.ExternalLink href="https://brasil.un.org/"><S.NavItem>ODS: Brasil</S.NavItem></S.ExternalLink>
            <S.HeaderLink to={"/Footer"}><S.NavItem>Saiba mais</S.NavItem></S.HeaderLink> 
          </S.HeaderList>
        </S.NavHeader>
      </S.MenuHeader>
      )
    }

  return(
    <>
    <HeaderComponent/>
    </>
  )
}