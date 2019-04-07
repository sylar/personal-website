import * as React from 'react'
import Link from './link'
// import Link from 'next/link'
import { UL, LI } from '../styled'
import prefetch from '../../lib/prefetch'

const common = `
  position: relative;
  outline: none;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.2em;
  margin-bottom: .6em;
  text-transform: capitalize;
  &:hover, &:focus {
    outline: none;
  };
`

const effect = `
  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0,0,0,0.15);
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(5px);
  }
  &:hover::after {
    opacity: 1;
    transform: translateY(0px);
  }
`

const customLinkStyle = `
  ${common}
  ${effect}
`

const LinkList = ({ links }) => (
  <UL
    customCss={{
      padding: 0,
      marginTop: '1.5rem',
      marginBottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}
  >
    {links.map((item, key) => (
      <LI
        key={key}
        customCss={{
          display: 'block',
          '@media (max-width: 480px)': {
            flexBasis: '50%',
            display: 'flex'
          }
        }}
      >
        <Link {...item} customCss={customLinkStyle} />
        {/* <Link prefetch href={item.url}>
          <a onMouseOver={() => prefetch('/product?sku=0001')}>{item.label}</a>
        </Link> */}
      </LI>
    ))}
  </UL>
)

LinkList.displayName = 'LinkList'

export default LinkList
