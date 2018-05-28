// @flow

import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>
      <a href="/cv">Resume</a>
      <a href="mailto:andrei@constantinescu.io">Email me</a>
      <a href="//github.com/andreiconstantinescu">Github</a>
    </div>
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
          flex-basis: 5rem;
          flex-direction: row;
          justify-content space-between;
        }
      }
    `}</style>
  </Layout>
)
