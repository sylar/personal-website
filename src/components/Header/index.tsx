import { Header, HeaderTitle } from './styled'
import Logo from '../Logo'
import { HeaderProps } from './types'

const HeaderComponent = ({ size }: HeaderProps): JSX.Element => (
  <Header size={size}>
    <HeaderTitle size={size}>
      Andrei <br />
      Constantinescu
    </HeaderTitle>
    <Logo size={size} />
  </Header>
)

export default HeaderComponent
