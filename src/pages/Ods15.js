import React from "react";

import * as S from "../components/style"

import ods15 from "../assets/ods15.png"

export default function Ods15(){

  const Page = () => {
    return(
      <S.ContainerOds15>
        <S.TextBox>
          <S.OdsPageTitle>5. Igualdade de Gênero</S.OdsPageTitle>
        <S.Description>
        Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade.
        </S.Description>
        </S.TextBox>
        <S.BigCard src={ods15} alt="Objetivo de Desenvolvimento Sustentável"/>
      </S.ContainerOds15>
    )
  }
  const Goals = () => {
    return(
      <S.GoalsContainer>
      <S.OdsText>
      Objetivo 15. Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade.
      </S.OdsText>
      <S.GoalsDescription>15.1 Mapear as principais espécias de plantas e animais da região para conhecimento público do bioma do morro até 2030
</S.GoalsDescription>
    <S.GoalsDescription>15.2 Saneamento básico e coleta de lixo atendendo 100% do território até 2030
</S.GoalsDescription>
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