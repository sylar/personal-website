import React from 'react'
import { Section, Image } from './styled'
import { css } from '@emotion/core'

const Logo = ({ src, customCss, imgCss }) => (
  <Section
    customCss={{
      textAlign: 'center',
      ...customCss
    }}
  >
    <Image src={src} customCss={imgCss} />
  </Section>
)

Logo.displayName = 'Logo'
Logo.defaultProps = {
  imgCss: {}
}

export default Logo
