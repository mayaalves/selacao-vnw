import React from "react"
import * as S from "./Style"
import Pc from "./Imgs/Pc.png"
import Mecanica from "./Imgs/Mecanica.png"

export default function Formações() {
  return (
    <S.Container>
      <S.BoxDialogo>
      <S.Titulo>Formação</S.Titulo>
      <S.BoxDireção>
        <S.Pc src={Pc} alt="" />
        <S.BoxSubTitulo>
        <S.SubTitulo>FRONT-END</S.SubTitulo>
        <S.P>
          Quem trabalha com Front End é responsável por desenvolver por meio do
          código uma interface gráfica e, normalmente, com as tecnologias base
          da Web: HTML, CSS e JavaScript.
        </S.P>
        </S.BoxSubTitulo>
        </S.BoxDireção>
        <S.BoxDireção>
        <S.Pc src={Pc} alt="" />
        <S.BoxSubTitulo>
        <S.SubTitulo>BACK-END</S.SubTitulo>
        <S.P>
          O Back-End trabalha em boa parte dos casos fazendo a ponte entre os
          dados que vem do navegador rumo ao banco de dados e vice-versa, sempre
          aplicando as devidas regras de negócio, validações e garantias num
          ambiente restrito ao usuário final (ou seja, onde ele não consegue
          acessar ou manipular algo).
        </S.P>
        </S.BoxSubTitulo>
        </S.BoxDireção>
      </S.BoxDialogo>
      <S.Mecanica src={Mecanica} alt="" />
    </S.Container>
  )
}