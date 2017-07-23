// @flow
import React from 'react'
import Logo from './logo.js'

type props = {
  children?: React$Element<*>
}

export default ({ children }: props) =>
  <div className='layout'>
    <Logo />
    <main>
      {children}
    </main>
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
    `}</style>
  </div>
