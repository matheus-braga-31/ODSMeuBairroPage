import React from "react";

import * as S from "../components/style"

import ods8 from "../assets/ods8.png"

export default function Ods8(){

  const Page = () => {
    return(
      <S.ContainerOds8>
        <S.TextBox>
          <S.OdsPageTitle>8. Trabalho decente e crescimento econômico</S.OdsPageTitle>
        <S.Description>
        8. Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todas e todos
        </S.Description>
        </S.TextBox>
        <S.BigCard src={ods8} alt="Objetivo de Desenvolvimento Sustentável"/>
      </S.ContainerOds8>
    )
  }

  const Goals = () => {
    return(
      <S.GoalsContainer>
      <S.OdsText>
      Objetivo 8. Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todas e todos
      </S.OdsText>
      <S.GoalsDescription>8.1 Valorização do microempreendedor facilitação de acesso a políticas de incentivo, capacitação e investimentos até 2030</S.GoalsDescription>
    <S.GoalsDescription>8.2 Hortas urbanas com incorporação de mão-de-obra em toda cadeia produtiva
e aproveitamento de áreas boas para cultivo nas comunidades até 2030
</S.GoalsDescription>
    <S.GoalsDescription>8.3 Capacitações direcionadas a gaps de mercado até 2030</S.GoalsDescription>
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