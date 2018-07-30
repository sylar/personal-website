import * as React from 'react'
import {Image, Paragraph, Heading} from './styled'

const Header = ({title, logo, description}) => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <Image src={logo} style={{width: '4rem', alignSelf: 'center'}} />
    <Heading
      md={title}
      customCss={{
        fontWeight: 200,
        alignSelf: 'center',
        marginTop: '.5rem',
        color: 'salmon'
      }}
    />
    <Paragraph md={description} />
  </div>
)

Header.displayName = 'Header'

export default Header
