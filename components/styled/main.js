import styled from 'react-emotion'

const Main = styled('main')(({customCss}) => ({
  ...customCss
}))

Main.displayName = 'Main'

export default Main
