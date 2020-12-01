// Cálculo de aposentodoria
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 20

const calcAposentadoria =  idade + contribuicao

const homemAposenta = sexo === 'M' && contribuicao >= 35 && calcAposentadoria >= 95
const mulherposenta = sexo === 'F' && contribuicao >= 30 && calcAposentadoria >= 85

if(homemAposenta || mulherposenta){
  console.log(`${nome} pode aposentar`)
} else {
  console.log(`${nome} não pode aposentar`)
}