import styled from 'react-emotion'

const Section = styled('section')(({customCss}) => ({...customCss}))

Section.displayName = 'Section'

export default Section
