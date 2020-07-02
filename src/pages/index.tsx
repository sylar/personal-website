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
import { HomePageProps } from '../lib/pageTypes'

function Home({ personalData }: HomePageProps): JSX.Element {
  return (
    <HomeLayout>
      <HeaderComponent size={Sizes.MEDIUM} />
      <HomeContent>
        <Md source={personalData.description} />
        <HomeContactList>
          <LinkList urls={personalData.links} />
        </HomeContactList>
      </HomeContent>
    </HomeLayout>
  )
}

export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  return {
    props: { personalData }
  }
}

export default Home
