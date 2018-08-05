import styled from 'react-emotion'

const commonStyle = {
  marginTop: '1.5rem',
  fontSize: '1rem',
  marginBottom: '1.5rem'
}

const UL = styled('ul')(({customCss}) => ({...commonStyle, ...customCss}))

const OL = styled('ol')(({customCss}) => ({...commonStyle, ...customCss}))

const LI = styled('li')(({customCss}) => ({...customCss}))

UL.displayName = 'UL'
OL.displayName = 'OL'
LI.displayName = 'LI'

export {UL, OL, LI}
