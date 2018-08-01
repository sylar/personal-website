import React from 'react'
import {Image} from './styled'

const Logo = ({src, customCss}) => <Image
  src={src}
  customCss={{...customCss, width: '6rem', alignSelf: 'center', marginBottom: '3rem'}}
/>

Logo.displayName = 'Logo'

export default Logo
