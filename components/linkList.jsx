// @flow
import * as React from 'react'
import Link from './Link'
import {UL, LI} from './styled'

type LinkListItem = {
  url: string,
  name: string
}

type Props = {
  links: Array<LinkListItem>
}

export default (props: Props) => (
  <UL
    customCss={{
      padding: 0,
      marginTop: '3rem',
      marginBottom: 0,
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    {props.links.map((item, key) => (
      <LI
        key={key}
        customCss={{
          display: 'block'
        }}
      >
        <Link item={item} />
      </LI>
    ))}
  </UL>
)
