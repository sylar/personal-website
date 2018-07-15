// @flow
import * as React from 'react'
import MarkdownElement from './MarkdownElem'

type Props = {
  children?: React.Node
}

const tech = ['JavaScript', 'Node.js', 'React.js']

const B = (props: Props) => (
  <strong>
    {props.children}
    <style jsx>{`
      strong {
        font-weight: 300;
      }
    `}</style>
  </strong>
)

export default ({title, logo, description}) => {
  console.log('KUIII', {title, logo, description})
  return (
    <React.Fragment>
      <MarkdownElement
        text={title}
        customStyle={`h2 {
        font-weight: 200;
        margin-bottom: 0;
        margin-top: 1.5rem;
      }`}
      />
      <ul>{tech.map((item, key) => <li key={key}>{item}</li>)}</ul>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          font-weight: 200;
          margin-bottom: 0;
          margin-top: 1.5rem;
        }
        ul {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding: 0;
          margin: 0.5rem 0;
          font-size: 0.8rem;
          font-weight: 300;
        }
        ul li:not(:last-child):after {
          content: '·';
          margin: 0 0.5rem;
        }
      `}</style>
    </React.Fragment>
  )
}
