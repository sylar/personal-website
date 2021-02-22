import React from 'react'
import { Email, Header, HeaderTitle } from './styled'
import { HeaderProps } from './types'
import { Sizes } from '../../styles/global'
import LinkList from '../Link/LinkList'
import personalData from '../../data/personal'

const HeaderComponent = ({ email, onClick }: HeaderProps): JSX.Element => (
  <Header size={Sizes.SMALL}>
    <HeaderTitle size={Sizes.SMALL} onClick={onClick}>
      Andrei Constantinescu
    </HeaderTitle>
    <Email>
      {email.label}: <a href={email.url}>{email.url.slice(7)}</a>
    </Email>
  </Header>
)

export default React.memo(HeaderComponent)
