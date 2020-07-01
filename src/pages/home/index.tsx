import Logo from '../../components/Logo'
import { Header, HeaderTitle } from './styled'

function Home(): JSX.Element {
  return (
    <Header>
      <Logo src="/LogoRound.svg" />
      <HeaderTitle>Andrei Constantinescu</HeaderTitle>
    </Header>
  )
}

export default Home
