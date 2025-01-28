'use client'

import { Sizes } from '../../styles/global'
import RoundLogo from './RoundLogo'
import { LogoContainer } from './styled'

const LogoComponent = () => (
  <LogoContainer>
    <RoundLogo />
  </LogoContainer>
)

LogoComponent.defaultProps = {
  size: Sizes.MEDIUM
}

export default LogoComponent
