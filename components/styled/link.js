import styled from 'react-emotion'

const A = styled('a')(({css}) => css)

A.displayName = 'A'

export default A
