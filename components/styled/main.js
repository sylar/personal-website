import styled from 'react-emotion'

const Main = styled('main')(({customCss}) => ({
  maxWidth: '25rem',
  margin: '4.5rem auto',
  padding: '3rem',
  paddingBottom: '1.5rem',
  borderRadius: '10px',
  backgroundColor: '#f5f5f5',
  ...customCss
}))

Main.displayName = 'Main'

export default Main
