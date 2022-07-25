import React from "react"

import * as S from "../components/style"

import OdsTemplate from "../assets/AllOds.png"
import Carousel from "nuka-carousel"



export default function Home(){

  const info = {
     wrapAround: true,
     autoplay: true,
     keyCodeConfig: true,
     autoplayInterval: 3000,
    }

  
    const ImagesCarousel = () => {
      return(
        <>
        <Carousel {...info}>
        <S.SlideBox1>
        <S.CarouselTitle>
          Você sabe o que são Objetivos de Desenvolvimento Sustentável?
        </S.CarouselTitle>
        </S.SlideBox1>
        <S.SlideBox2>
        <S.CarouselTitle>
        Conheça os 17 Objetivos de Desenvolvimento Sustentáveis da ONU
        </S.CarouselTitle>
        </S.SlideBox2>
        <S.SlideBox3>
        <S.CarouselTitle> Saiba mais</S.CarouselTitle>
        </S.SlideBox3>
        </Carousel>
        </>
      )
    }

    const ApresentationHome = () => {
        return(
          <S.ContainerHome>
              <S.BoxTitle>
        <S.Title>O que são os Objetivos de Desenvolvimento Sustentável?</S.Title>
        </S.BoxTitle>
        <S.DescriptionBox>
        <S.Description>
        Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.
        <S.More><S.ExternalLink href="https://brasil.un.org/">Saiba Mais >> </S.ExternalLink></S.More>
        </S.Description>
        </S.DescriptionBox>
        <S.OdssBox>
          <S.OdssImg src={OdsTemplate} alt="Todas as ODSs"/>
        </S.OdssBox>
        </S.ContainerHome>
        )
      }
  
    return(
      <>
      <ImagesCarousel/>
      <ApresentationHome/>
      </>
    )
  }