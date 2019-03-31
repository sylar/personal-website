import styled from '@emotion/styled'

const Section = styled('section')(({ customCss }) => ({
  ...customCss,
  '@media print': {
    margin: 0,
    padding: 0,
    ...customCss['@media print']
  }
}))

Section.displayName = 'Section'
Section.defaultProps = {
  customCss: {}
}

export default Section
