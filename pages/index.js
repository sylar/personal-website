// @flow

import React from 'react'
import Layout from '../components/layout.js'

type props = {
  children?: React$Element<*>
}

const B = ({ children }: props) =>
  <strong>
    {children}
    <style jsx>{`
      strong {
        font-weight: 300;
      }
    `}</style>
  </strong>

export default () =>
  <Layout>
    <h2>
      <B>Andrei</B>Constantinescu
    </h2>
    <ul>
      <li>Email</li>
      <li>CV</li>
      <li>Github</li>
    </ul>

    <style jsx>{`
      h2 {
        font-weight: 100;
      }

      ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
      }

      ul li:not(:last-child):after {
        content: '·';
        margin: 0 0.5rem;
      }
    `}</style>
  </Layout>
