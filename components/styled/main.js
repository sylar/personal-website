import styled from 'react-emotion'

const Main = styled('main')(({customCss}) => ({
  maxWidth: '25rem',
  margin: '4.5rem auto',
  ...customCss
}))

Main.displayName = 'Main'

export default Main
