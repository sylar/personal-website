import * as React from 'react'
import Link from './link'
import {UL, LI} from '../styled'

const LinkList = ({links}) => (
  <UL
    customCss={{
      padding: 0,
      marginTop: '1.5rem',
      marginBottom: 0,
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    {links.map((item, key) => (
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

LinkList.displayName = 'LinkList'

export default LinkList
