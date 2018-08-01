import * as React from 'react'
import {Image, Paragraph, Heading} from './styled'
import {css} from 'react-emotion'

const hrStyle = css`
  width: 50%;
  margin: -1px auto;
`

const Header = ({title, logo, description}) => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Image
      src={logo}
      customCss={{width: '6rem', alignSelf: 'center', marginBottom: '3rem'}}
    />
    <hr css={hrStyle} />
    <Paragraph
      md={description}
      customCss={{
        fontWeight: 300,
        letterSpacing: '1px',
        fontSize: '20px',
        lineHeight: '1.2em',
        margin: '2.4em 0'
      }}
    />
    <hr css={hrStyle} />
  </div>
)

Header.displayName = 'Header'

export default Header
