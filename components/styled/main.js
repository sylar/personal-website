import styled from 'react-emotion'

const Main = styled('main')(({customCss}) => ({
  maxWidth: '25rem',
  margin: '4.5rem auto',
  ...customCss,
  '@media (max-width: 480px)': {
    margin: '1.5rem',
    ...customCss['@media (max-width: 480px)']
  }
}))

Main.displayName = 'Main'

export default Main
