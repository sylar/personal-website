import {Container} from 'unstated'

class PrismicContainer extends Container {
  state = {
    home: {},
    cv: {}
  }

  setPage ({page, content}) {
    this.setState({[page]: content})
  }
}

export {PrismicContainer}
