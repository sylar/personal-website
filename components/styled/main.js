import styled from '@emotion/styled'

const Main = styled('main')(({ customCss }) => ({
  ...customCss
}))

Main.displayName = 'Main'

export default Main
