import RoundLogo from './RoundLogo'
import { LogoContainer } from './styled'
import { LogoProps } from './types'
import { Sizes } from '../../lib/styles/global'

const LogoComponent = ({ size }: LogoProps): JSX.Element => (
  <LogoContainer size={size}>
    <RoundLogo />
  </LogoContainer>
)

LogoComponent.defaultProps = {
  size: Sizes.MEDIUM
}

export default LogoComponent
