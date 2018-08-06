import React from 'react'
import {Image} from './styled'

const Logo = ({src, customCss}) => (
  <Image
    src={src}
    customCss={{
      width: '6rem',
      alignSelf: 'center',
      marginBottom: '3rem',
      ...customCss
    }}
  />
)

Logo.displayName = 'Logo'

export default Logo
