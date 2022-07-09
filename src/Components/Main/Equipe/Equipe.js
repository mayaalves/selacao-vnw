import { Dados } from "./DadosEquipe/Dados"
import FunçãoEquipe from "./DadosEquipe/FunçãoEquipe"

const Equipe = () => {
  return (
    <>
      {Dados.map((item) => (
        <FunçãoEquipe
          foto={item.foto}
          nome={item.nome}
          profissão={item.profissão}
        />
      ))}
    </>
  )
}
export default Equipe