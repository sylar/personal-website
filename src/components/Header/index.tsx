import { Header, HeaderTitle, SmallList } from './styled'
import Logo from '../Logo'
import { HeaderProps } from './types'
import LinkList from '../Link/LinkList'
import { Div, Sizes } from '../../styles/global'
import { LinkProps } from '../Link/types'

const links: LinkProps[] = [
  {
    label: 'Home',
    url: '/',
    internal: true
  },
  {
    label: 'Email',
    url: 'mailto:andrei@constantinescu.io'
  }
]

const HeaderComponent = ({ size }: HeaderProps): JSX.Element => (
  <Header size={size}>
    <Logo size={size} />
    <Div>
      <HeaderTitle size={size}>Andrei Constantinescu</HeaderTitle>
      {size === Sizes.SMALL && (
        <SmallList>
          <LinkList urls={links} />
        </SmallList>
      )}
    </Div>
  </Header>
)

export default HeaderComponent
