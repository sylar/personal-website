import styled from 'react-emotion'

const Image = styled('img')(({customCss}) => ({
  ...customCss
}))

Image.displayName = 'Image'

export default Image
