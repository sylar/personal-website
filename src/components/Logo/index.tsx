import RoundLogo from './RoundLogo'
import { LogoContainer } from './styled'
import { Sizes } from '../../styles/global'

const LogoComponent = (): JSX.Element => (
  <LogoContainer>
    <RoundLogo />
  </LogoContainer>
)

LogoComponent.defaultProps = {
  size: Sizes.MEDIUM
}

export default LogoComponent
