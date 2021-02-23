import React from 'react'
import { Email, Header, HeaderTitle } from './styled'
import { HeaderProps } from './types'
import { Sizes } from '../../styles/global'

const HeaderComponent = ({ email, onClick }: HeaderProps): JSX.Element => (
  <Header size={Sizes.SMALL}>
    <HeaderTitle size={Sizes.SMALL} onClick={onClick}>
      Andrei Constantinescu
    </HeaderTitle>
    <Email>
      <a href={email.url}>{email.url.slice(7)}</a>
    </Email>
  </Header>
)

export default React.memo(HeaderComponent)
