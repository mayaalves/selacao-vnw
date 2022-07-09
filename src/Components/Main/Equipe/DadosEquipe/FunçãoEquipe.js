const funçãoEquipe = ({ foto, nome, profissão }) => {
  return (
    <div>
      <h2>Equipe</h2>
      <div>
        <input/>
      </div>
      <img src={foto} alt="Fotos de Membros da Equipe" />
      <h3>{nome}</h3>
      <h3>{profissão}</h3>
    </div>
  )
}

export default funçãoEquipe