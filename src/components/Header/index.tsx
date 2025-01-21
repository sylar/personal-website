import React from 'react'
import { Anchor, Email, Header, HeaderTitle, Info, Muted, Text } from './styled'
import { HeaderProps } from './types'
import { Sizes } from '../../styles/global'
import LogoComponent from '../Logo'

const HeaderComponent = ({ email, onClick }: HeaderProps): JSX.Element => (
  <Header size={Sizes.SMALL}>
    <LogoComponent size={Sizes.MEDIUM} />
    <Info>
      <HeaderTitle onClick={onClick}>
        <Anchor href={email.url}>
          <Text>Andrei</Text>
          <Muted>@</Muted>
          Constantinescu
          <Muted>.io</Muted>
        </Anchor>
      </HeaderTitle>
      <Email>
        <a href={email.url}>{email.url.slice(7)}</a>
      </Email>
    </Info>
  </Header>
)

export default React.memo(HeaderComponent)
