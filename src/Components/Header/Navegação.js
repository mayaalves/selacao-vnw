import React from "react"
import Inscrição from "./Banner/Inscrição"
import Logo from "../Header/Img/VnW-Logo.png"
import * as S from "./Style"

export default function Navegação() {
  return (
    <>
      <S.Container>
        <S.BoxImg>
          <S.Img src={Logo} alt="" />
        </S.BoxImg>
        <S.BoxNav>
          <S.Ul>
            <S.Li>Sobre</S.Li>
            <S.Li>Formação</S.Li>
            <S.Li>Equipe</S.Li>
            <S.Li>Eventos</S.Li>
            <S.Li>Contatos</S.Li>
          </S.Ul>
        </S.BoxNav>
      </S.Container>
      <Inscrição />
    </>
  )
}