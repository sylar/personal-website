import styled from 'react-emotion'

const Bold = ({style}) => styled('strong')(style)

const Italic = ({style}) => styled('em')(style)

const P = ({style}) => styled('p')(style)

export {Bold, Italic, P}
