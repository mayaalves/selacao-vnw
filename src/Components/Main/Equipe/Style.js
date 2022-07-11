import styled from "styled-components";
import Buscador from "./Img/Buscador.png"

export const Container = styled.section`
height: 160vh;
`
export const Titulo = styled.h2`
margin-left: 22vh;
margin-bottom: 2vh;
margin-top: -5vh;
color: #0F2260;
`
export const Img = styled.img`
width: 30vh;
height: 30vh;
margin: 2vh;
margin-top: -3vh;
`
export const BoxInput = styled.section`
background-color: #0F2260;
width: 70%;
margin-left: 22vh;
height: 8vh;
display: flex;
align-items: center;
`
export const Input = styled.input`
background-color: #0F2260;
color: #FFFFFF;
border: solid 1px #FFFFFF;
margin-left: 20vh;
background-image: url(${Buscador});
background-size: contain;
background-repeat: no-repeat;
background-position: right;
`
export const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
margin-top: 156vh;
margin-left: -45vh;
`
export const Li = styled.li`
list-style: none;
color: #ffffff;
font-size: 2vh;
text-align: center;
position: relative;
bottom: 9vh;
`
export const BoxDialogo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`