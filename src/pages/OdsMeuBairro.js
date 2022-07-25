import React, { useState } from "react";
import * as S from "../components/style"

import Ods4 from "../assets/ods4.png"
import Ods8 from "../assets/ods8.png"
import Ods15 from "../assets/ods15.png"
import Logo from "../assets/LogoOdsNoBG.png"
import { Link } from "react-router-dom";

export default function OdsMeuBairro(){

    const [ ods ] = useState([{
        card3: Ods4,
        card4: Ods8,
        card5: Ods15
    }])

    const ApresentationMeuBairro = () => {
      return(
        <S.ContainerMeuBairro>
          <S.AboutBoxMeuBairro>
      <S.TitleMeuBairro>Os Objetivos de Desenvolvimento Sustentável em Piedade</S.TitleMeuBairro>
      <S.LogoDescriptionBox>
      <S.DescriptionMeuBairro>
      Motivado pelo desafio final do curso de desenvolvimento web front-end na Escola Vai Na Web, elenquei 3 cards das ODSs Brasil para propor melhorias para a minha comunidade: morro do 18.
      Devo apontar que, a arte da logo foi criada para esta página e é inspirada no cruzeiro localizado no alto do Morro, aqui no 18 que, tal qual o letreiro "Creio em Deus", outro monumento que o morro recebe, são os estandartes da comunidade.
      </S.DescriptionMeuBairro>
      <S.AboutLogo src={Logo} alt="Logo ODSs"/>
      </S.LogoDescriptionBox>
      </S.AboutBoxMeuBairro>
      <S.ConheçaMeuBairro>Acesse a seguir os Objetivos de Desenvolvimento sustentável que pensei para a minha comunidade!</S.ConheçaMeuBairro>
      {ods.map(item => (
          <S.OdsBox>
              <Link to={"/Ods4"}>
              <S.OdsCard src={item.card3} alt="Objetivo de Desenvolvimento Sustentável"/>
              </Link>
              <Link to={"/Ods8"}>
              <S.OdsCard src={item.card4} alt="Objetivo de Desenvolvimento Sustentável"/>
              </Link>
              <Link to={"/Ods15"}>
              <S.OdsCard src={item.card5} alt="Objetivo de Desenvolvimento Sustentável"/>
              </Link>
      </S.OdsBox>  
      ))}
      </S.ContainerMeuBairro>
      )
    }

  return(
    <>
    <ApresentationMeuBairro/>
    </>
  )
}



//modal: 

//const [modal, setModal] = useState(false)

//return(
//    <>
//    <Card onClick={()=>setModal{(prevState => !prevState)}}
//    {modal && <h1></h1>}
//    </>
//)