// @flow

import React from 'react'
import Layout from '../components/layout.js'

export default () =>
  <Layout>
    <ul>
      <li>
        CV:{' '}
        <a href='//andreiconstantinescu.github.io/cv'>constantinescu.io/cv</a>
      </li>
      <li>
        Email:{' '}
        <a href='mailto:andrei@constantinescu.io'>andrei@constantinescu.io</a>
      </li>
      <li>
        Github:{' '}
        <a href='//github.com/andreiconstantinescu'>
          github.com/andreiconstantinescu
        </a>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
        font-weight: 300;
        font-size: 1.2rem;
      }
      ul li {
        margin: 1rem 0;
      }

      @media (min-width: 30rem) {
        ul {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </Layout>
