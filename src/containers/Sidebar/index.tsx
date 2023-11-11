import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Pavanelo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        matheuspavanelo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor full-stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
