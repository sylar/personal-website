import styled from 'react-emotion'

const UL = styled('ul')(({customCss}) => ({...customCss}))

const OL = styled('ol')(({customCss}) => ({...customCss}))

const LI = styled('li')(({customCss}) => ({...customCss}))

UL.displayName = 'UL'
OL.displayName = 'OL'
LI.displayName = 'LI'

export {UL, OL, LI}
