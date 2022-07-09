import styled from "styled-components"

const Img = styled.img`
  height: 30vh;
  width: 30vh;
`

const funçãoEquipe = ({ foto, nome, profissão }) => {
  return (
    <div>
      <Img src={foto} alt="" />
      <h3>{nome}</h3>
      <h3>{profissão}</h3>
    </div>
  )
}

export default funçãoEquipe