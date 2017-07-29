// @flow

import React from 'react'
import Layout from '../components/layout.js'

export default () =>
  <Layout>
    <ul>
      <li>
        Email:{' '}
        <a href='mailto:andrei@constantinescu.io'>andrei@constantinescu.io</a>
      </li>
      <li>
        CV:{' '}
        <a href='//andreiconstantinescu.github.io/cv'>constantinescu.io/cv</a>
      </li>
      <li>
        Github:{' '}
        <a href='//github.com/andreiconstantinescu'>
          github.com/andreiconstantinescu
        </a>
      </li>
      <li>
        Linkedin:{' '}
        <a href='//linkedin.com/in/constantinescuio'>
          linkedin.com/in/constantinescuio
        </a>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 300;
      }

      ul li {
        padding: 1rem;
        margin: 0.5rem;
      }

      ul li:hover {
        background: #fff;
      }
    `}</style>
  </Layout>
