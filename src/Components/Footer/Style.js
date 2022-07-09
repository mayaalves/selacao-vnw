import styled from "styled-components";
import Terra from "./Imgs/TerraBackground.png";

export const Container = styled.section`
  background-image: url(${Terra});
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Titulo = styled.h2`
color: #FFFFFF;
margin-bottom: 12vh;
margin-left: 12vh;
`
export const BoxRow = styled.section`
display: flex;
align-items: center;
margin-top: -10vh;
`
export const SubTitulo = styled.p`
color: #FFFFFF;
width: 26vh;
margin-left: 12vh;
`
export const Img = styled.img`
width: 8vh;
height: 8vh;
margin: 4vh;
`