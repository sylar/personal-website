import LinkList from '../../components/Link/LinkList'
import Logo from '../../components/Logo'
import personalData from '../../data/personal'
import {
  Header,
  HeaderTitle,
  HomeContent,
  HomeLayout,
  HomeContactList
} from './styled'
import Md from '../../components/Md'

function Home(): JSX.Element {
  return (
    <HomeLayout>
      <Header>
        <HeaderTitle>
          Andrei <br />
          Constantinescu
        </HeaderTitle>
        <Logo src="/LogoRound.svg" />
      </Header>
      <HomeContent>
        <Md source={personalData.descripion} />
        <HomeContactList>
          <LinkList urls={personalData.links} />
        </HomeContactList>
      </HomeContent>
    </HomeLayout>
  )
}

export default Home
