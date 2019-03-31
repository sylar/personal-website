import styled from '@emotion/styled'

const Image = styled('img')(({ customCss }) => ({
  height: '100%',
  width: 'auto',
  ...customCss
}))

Image.displayName = 'Image'

export default Image
