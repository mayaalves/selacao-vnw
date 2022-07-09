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
      <h2>Contato</h2>
      <p>Siga nossas redes sociais e fique conectado com todas as novidades.</p>
      <img src={Facebook} alt="" />
      <img src={Insta} alt="" />
      <img src={Linkedin} alt="" />
      <img src={Medium} alt="" />
      <img src={Youtube} alt="" />
    </S.Container>
  )
}