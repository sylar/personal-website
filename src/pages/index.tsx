import LinkList from '../components/Link/LinkList'
import personalData from '../data/personal'
import { HomeContent, HomeLayout, HomeContactList } from '../styles/homepage'
import { HomePageProps } from '../utils/pageTypes'

function Home({ personalData }: HomePageProps): JSX.Element {
  return (
    <HomeLayout>
      <HomeContent>
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
