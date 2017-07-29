// @flow
import React from 'react'
import LogoSVG from './logo-svg.js'

export default () =>
  <div className='logo'>
    <LogoSVG />
    <style jsx>{`
      .logo {
        width: 6.5rem;
      }
    `}</style>
  </div>
