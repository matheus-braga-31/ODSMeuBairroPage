import React from "react";

import * as S from "../components/style"

import ods4 from "../assets/ods4.png"

export default function Ods4(){

  const Page = () => {
    return(
      <S.ContainerOds>
        <S.TextBox>
          <S.OdsPageTitle>4. Educação de Qualidade</S.OdsPageTitle>
        <S.Description>
        Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.
        </S.Description>
        </S.TextBox>
        <S.BigCard src={ods4} alt="Objetivo de Desenvolvimento Sustentável"/>
      </S.ContainerOds>
    )
  }

  const Goals = () => {
    return(
      <S.GoalsContainer>
      <S.OdsText>
      Objetivo 4. Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.
      </S.OdsText>
    <S.GoalsDescription>4.1 Mais 10 escolas públicas de ensino infantil atendendo ao bairro até 2030</S.GoalsDescription>
    <S.GoalsDescription>4.2 2 bibliotecas públicas e 1 brinquedoteca até 2030</S.GoalsDescription>
    <S.GoalsDescription>4.3 3 novas praças com equipamentos de lazer para desenvolvimento motor e interação social com agendas de peças de teatro, seminários e fóruns culturais e de educação até 2030</S.GoalsDescription>
      </S.GoalsContainer>
    )
  }

  return(
    <>
    <Page/>
    <Goals/>
    </>
  )
}