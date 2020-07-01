import RoundLogo from './RoundLogo'
import { LogoContainer } from './styled'
import { LogoContainerProps, LogoSizes } from './types'

const LogoComponent = ({
  src,
  round,
  size
}: LogoContainerProps): JSX.Element => (
  <LogoContainer size={size}>
    <RoundLogo />
  </LogoContainer>
)

LogoComponent.defaultProps = {
  round: false,
  size: LogoSizes.SMALL
}

export default LogoComponent
