import {PureComponent} from 'react'
import Prismic from '../lib/prismic'

class NewHome extends PureComponent {
  componentDidMount () {
    Prismic()
  }

  render () {
    return <div>Salut</div>
  }
}

export default NewHome
