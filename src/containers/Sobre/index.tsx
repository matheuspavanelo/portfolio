import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsum
      dolorum aut libero, minus deserunt excepturi, natus delectus voluptate
      beatae, modi quaerat accusamus earum? Accusamus fugit delectus impedit
      labore aspernatur.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=matheuspavanelo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img
        className="larger"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheuspavanelo&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
