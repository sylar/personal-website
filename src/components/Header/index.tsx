'use client'

import { Anchor, Email, Header, HeaderTitle, Info, Muted, Text } from './styled'
import { HeaderProps } from './types'
import LogoComponent from '../Logo'
import { memo } from 'react'

const HeaderComponent = ({ email, onClick }: HeaderProps) => (
  <Header>
    <LogoComponent />
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

export default memo(HeaderComponent)
