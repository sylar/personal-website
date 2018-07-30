import styled from 'react-emotion'

const UL = styled('ul')(({customCss}) => ({...customCss}))

const OL = styled('ol')(({customCss}) => ({...customCss}))

const LI = styled('li')(({customCss}) => ({...customCss}))

export {UL, OL, LI}
