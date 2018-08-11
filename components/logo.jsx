import React from 'react'
import {Section, Image} from './styled'

const Logo = ({src, customCss}) => (
  <Section>
    <Image
      src={src}
      customCss={{
        width: '6rem',
        alignSelf: 'center',
        marginBottom: '3rem',
        ...customCss
      }}
    />
  </Section>
)

Logo.displayName = 'Logo'

export default Logo
