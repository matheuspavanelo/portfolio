import Paragrafo from '../Paragrafo'
import Titulo from '../titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkBotao>Vicualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
