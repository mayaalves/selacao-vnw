import styled from "styled-components"
import Background from "./Img/BackgroundVnW.png"

export const Container = styled.section`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 120vh;
  margin-top: -20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const H1 = styled.h1`
color: #FF611E;
position: absolute;
top: 18vh;
left: 40vh;
font-size: 8vh;
font-weight: lighter;
`
export const Carreira = styled.h2`
  width: 120vh;
  color: #ffac2d;
  font-size: 6vh;
  text-indent: 6vh;
`
export const BoxDialogo = styled.section`
  padding: 4vh;
  background-color: #ffffff;
  color: #00145d;
  border-radius: 10px;
  margin-right: 48vh;
  margin-top: 6vh;
`
export const Reticencias = styled.h2`
  font-weight: bolder;
  font-size: 14vh;
  margin-top: -12vh;
`
export const Underline = styled.h2`
  font-weight: bolder;
  font-size: 12vh;
  margin-top: -14vh;
`
export const Inscreva = styled.h2`
margin-top: 4vh;
`
export const Data = styled.h2`
margin-top: 2vh;
`
export const Link = styled.h2`
font-size: 2.5vh;
font-weight: lighter;
margin-right: 70vh;
margin-top: 1vh;
color: #FED5B2;
`