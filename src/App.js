import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./Components/Header/Navegação"
import Sobre from "./Components/Main/Sobre/Missões"
import Formações from "./Components/Main/Formações/Formações"
import Equipe from "./Components/Main/Equipe/Equipe"
import Eventos from "./Components/Main/Eventos/Eventos"
import Contato from "./Components/Footer/Contato"

const GlobalStyle = createGlobalStyle`
*{
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sobre />
      <Formações />
      <Equipe />
      <Eventos />
      <Contato />
    </>
  )
}
