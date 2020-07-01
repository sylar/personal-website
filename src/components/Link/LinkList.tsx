import Link from './index'
import { List, ListElement } from './styled'
import { LinkListProps } from './types'

const LinkList = ({ urls }: LinkListProps): JSX.Element => (
  <List>
    {urls.map(({ label, url, internal = false }, key) => (
      <ListElement key={`ListElement_${key}`}>
        <Link label={label} url={url} internal={internal} />
      </ListElement>
    ))}
  </List>
)

export default LinkList
