import React from 'react'
import Link from 'next/link'
import {A} from './styled'
import {css} from 'react-emotion'

const common = `
  position: relative;
  display: inline-block;
  outline: none;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: 0 0 1px rgba(255,255,255,0.3);
  font-size: 1em;
  &:hover, &:focus {
    outline: none;
  }
`

const effect = `
  padding: 8px 0;
  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0,0,0,0.1);
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px);
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translateY(0px);
  }
`

const customStyle = `
  ${common}
  ${effect}
`

const LinkComponent = ({item: {name, url, target}}) => (
  <Link href={url} passHref>
    <A
      css={css`
        ${customStyle};
      `}
      target={target}
    >
      {name}
    </A>
  </Link>
)

LinkComponent.displayName = 'Link'

export default LinkComponent
