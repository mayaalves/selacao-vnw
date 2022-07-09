import React from "react"
import * as S from "./Style"
import Mac from "./Img/MacReunião.png"

export default function Eventos() {
  return (
    <>
    <S.Titulo>Eventos</S.Titulo>
    <S.Container>
      <S.Img src={Mac} alt="" />
      <S.BoxDialogo>
      <S.SubTitulo>Tech Girls</S.SubTitulo>
      <S.P>
        Com o objetivo de promover network entre mulheres de tecnologia,
        conectar talentos femininos com oportunidades no mercado da tecnologia,
        oferecer experiências de troca através de eventos com mulheres que já
        têm experiência no mercado da tecnologia, acelerar os talentos com ajuda
        para custeio de luz e internet para facilitar o processo de estudo,
        promover mentoria para as participantes do grupo.
      </S.P>
      </S.BoxDialogo>
    </S.Container>
    </>
  )
}