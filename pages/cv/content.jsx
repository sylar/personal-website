import React, {Fragment} from 'react'
import {Section} from '../../components'

const Content = ({slices}) => (
  <Section>
    {slices.map(({Component, data}, key) => (
      <Fragment key={`slice-${key}`}>
        <Component {...data} />
      </Fragment>
    ))}
  </Section>
)

export default Content
