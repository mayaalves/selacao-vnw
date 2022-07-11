import React from "react"
import * as S from "./Styles"

export default function Inscrição() {
  return (
    <S.Container>
      <S.H1>//</S.H1>
      <S.Carreira>
        Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?
      </S.Carreira>
      <S.BoxDialogo>
        <S.Reticencias>...</S.Reticencias>
        <S.Underline>__________</S.Underline>
        <S.Inscreva>Inscreva-se no Vai na Web!</S.Inscreva>
        <S.Data>Inscrições 02 a 21 de Agosto</S.Data>
      </S.BoxDialogo>
      <S.Link>Link para o formulário: bit.ly/CarreiraVaiNaWeb</S.Link>
    </S.Container>
  )
}