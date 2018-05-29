// @flow
import * as React from 'react'
import Link from 'next/link'

type LinkListItem = {
  url: string,
  label: string,
}

type Props = {
  links: Array<LinkListItem>,
}

export default (props: Props) => (
  <>
    {props.links.map((item, key) => (
      <Link key={key} href={item.url}>
        <a>{item.label}</a>
      </Link>
    ))}
    <style jsx>{`
      a {
        padding: 0.5rem 1rem;
        border: 1px solid #000;
        text-decoration: none;
        transition: background-color .15s ease-in-out;
        color: inherit;
        flex-basis: 2.5rem;
      }

      a:hover,
      a:focus {
        color: #fff;
        background-color: #000;
      }

      div {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 30rem) {

        div {
          text-align: center;
          flex-basis: 6rem;
          flex-direction: row;
          justify-content space-between;
        }
      }
    `}</style>
  </>
)
