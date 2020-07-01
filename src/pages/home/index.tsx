import LinkList from '../../components/Link/LinkList'
import Logo from '../../components/Logo'
import personalData from '../../data/personal'
import { Header, HeaderTitle } from './styled'

function Home(): JSX.Element {
  return (
    <Header>
      <Logo src="/LogoRound.svg" />
      <HeaderTitle>Andrei Constantinescu</HeaderTitle>
      <LinkList urls={personalData.links} />
    </Header>
  )
}

export default Home
