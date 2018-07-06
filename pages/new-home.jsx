import React, {PureComponent} from 'react'
import Prismic from '../lib/prismic'

class NewHome extends PureComponent {
  componentDidMount () {
    Prismic()
  }

  render () {
    return <div>hey there</div>
  }
}

export default NewHome
