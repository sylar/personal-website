import styled from 'react-emotion'

const H1 = ({style}) => styled('h1')(style)

const H2 = styled('h2')({}, ({customStyle}) => customStyle)

const H3 = ({style}) => styled('h3')(style)

export {H1, H2, H3}
