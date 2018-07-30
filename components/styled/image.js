import styled from 'react-emotion'

const Image = styled('img')(({customCss}) => ({
  ...customCss,
  minWidth: customCss.width
}))

export default Image
