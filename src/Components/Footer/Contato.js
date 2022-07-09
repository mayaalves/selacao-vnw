import React from "react"
import * as S from "./Style"
import Facebook from "./Imgs/facebook.png"
import Insta from "./Imgs/insta.png"
import Linkedin from "./Imgs/linkedin.png"
import Medium from "./Imgs/medium.png"
import Youtube from "./Imgs/youtub.png"


export default function Contato() {
  return (
    <S.Container>
      <S.Titulo>Contato</S.Titulo>
      <S.BoxRow>
      <S.SubTitulo>Siga nossas redes sociais e fique conectado com todas as novidades.</S.SubTitulo>
      <S.Img src={Facebook} alt="" />
      <S.Img src={Insta} alt="" />
      <S.Img src={Linkedin} alt="" />
      <S.Img src={Medium} alt="" />
      <S.Img src={Youtube} alt="" />
      </S.BoxRow>
    </S.Container>
  )
}