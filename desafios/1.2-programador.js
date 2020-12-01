const programador = {
  nome: 'Gabriel',
  idade: 18,
  tecnologias: [
    {
      nome: 'C++',
      especialidade: 'Desktop'
    },
    {
      nome: 'JavaScript',
      especialidade: 'Web/Mobile'
    }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)