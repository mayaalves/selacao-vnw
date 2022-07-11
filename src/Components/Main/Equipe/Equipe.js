import React,{useState} from "react"
import * as S from "./Style"
import { Dados } from "./DadosEquipe/Dados"

export default function Equipe(){

const [ time, setTime ] = useState(Dados)
const [ input, setInput ] = useState()

const Busca = () =>{
  return(
    <S.Ul>
    {time.filter((prevState) => {
      if(!input){
       return prevState
      } else if (
        prevState.nome.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      ){
        return prevState
      }
    })
    .map((prevState) => (
    <S.BoxDialogo>
     <S.Img src={prevState.foto} alt="" />
      <S.Li>{prevState.nome}</S.Li>
      <S.Li>#{prevState.cargo}</S.Li>
    </S.BoxDialogo>
    ))
    }
    </S.Ul>
  )
}
return(
  <S.Container>
    <S.Titulo>Equipe</S.Titulo>
  <S.BoxInput>
  <S.Input type="text" value={input} placeholder="Pesquisar..." onChange={(e) => {setInput(e.target.value)}} />
  {Busca()}
  </S.BoxInput>
  </S.Container>
)
}