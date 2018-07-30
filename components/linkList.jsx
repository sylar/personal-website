// @flow
import * as React from 'react'
import Link from './Link'

type LinkListItem = {
  url: string,
  name: string
}

type Props = {
  links: Array<LinkListItem>
}

export default (props: Props) =>
  props.links.map((item, key) => <Link key={key} item={item} />)
