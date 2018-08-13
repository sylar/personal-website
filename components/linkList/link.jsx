import React from 'react'
import {A, Link} from '../styled'
import {css} from 'react-emotion'

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

const customStyle = `
  ${common}
  ${effect}
`

const LinkComponent = ({item: {name, url, target, prefetch = false}}) => (
  <Link url={url} prefetch={prefetch}>
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
