import React from "react";
import * as S from "../components/style"

import LinkedinIcon from "../assets/linkedin.png"
import FacebookIcon from "../assets/facebook.png"
import InstagramIcon from "../assets/instagram.png"

export default function Footer(){

    const FooterComponent = () => {
      return(
        <S.FooterContainer>
            <S.Copyright>Página desenvolvida durante o Módulo 3 no curso de formação em Desenvolvimento Front-end na Escola Vai na Web.</S.Copyright>
            <S.SocialMedia>
              <S.FaceLink href="https://www.facebook.com/redeods.br/"><S.SocialIcon src={FacebookIcon} alt="Facebook"/></S.FaceLink>
              <S.InstaLink href="https://www.instagram.com/redeodsbrasil/"><S.SocialIcon src={InstagramIcon} alt="Instagram"/></S.InstaLink>
              <S.LinkedInLink href="https://www.linkedin.com/in/pactoglobalbr/"><S.SocialIcon src={LinkedinIcon} alt="LinkedIn"/></S.LinkedInLink>
            </S.SocialMedia>
        </S.FooterContainer>
      )
    }

  return(
    <>
    <FooterComponent/>
    </>
  )
}