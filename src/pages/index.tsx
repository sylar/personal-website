import LinkList from '../components/Link/LinkList'
import personalData from '../lib/data/personal'
import {
  HomeContent,
  HomeLayout,
  HomeContactList
} from '../lib/styles/homepage'
import Md from '../components/Md'
import HeaderComponent from '../components/Header'
import { Sizes } from '../lib/styles/global'

function Home(): JSX.Element {
  return (
    <HomeLayout>
      <HeaderComponent size={Sizes.MEDIUM} />
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
