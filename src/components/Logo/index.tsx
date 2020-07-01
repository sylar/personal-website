import RoundLogo from './RoundLogo'
import { LogoContainer } from './styled'
import { LogoSizes, LogoProps } from './types'

const LogoComponent = ({ size }: LogoProps): JSX.Element => (
  <LogoContainer size={size}>
    <RoundLogo />
  </LogoContainer>
)

LogoComponent.defaultProps = {
  round: false,
  size: LogoSizes.SMALL
}

export default LogoComponent
