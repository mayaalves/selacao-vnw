import React from "react"
import Pc from "./Imgs/Pc.png"
import Mecanica from "./Imgs/Mecanica.png"

export default function Formações() {
  return (
    <>
      <>
        <img src={Pc} alt="" />
        <h2>Formação</h2>
        <h3>FRONT-END</h3>
        <p>
          Quem trabalha com Front End é responsável por desenvolver por meio do
          código uma interface gráfica e, normalmente, com as tecnologias base
          da Web: HTML, CSS e JavaScript.
        </p>
        <img src={Pc} alt="" />
        <h3>BACK-END</h3>
        <p>
          O Back-End trabalha em boa parte dos casos fazendo a ponte entre os
          dados que vem do navegador rumo ao banco de dados e vice-versa, sempre
          aplicando as devidas regras de negócio, validações e garantias num
          ambiente restrito ao usuário final (ou seja, onde ele não consegue
          acessar ou manipular algo).
        </p>
      </>
      <img src={Mecanica} alt="" />
    </>
  )
}