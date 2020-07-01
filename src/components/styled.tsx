import Shevy from 'shevyjs'
import styled from 'styled-components'
const shevy = new Shevy()

const { h2, h3, h4, content } = shevy

export const PageLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
`

export const Heading = styled.h2`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  margin-bottom: ${h2.marginBottom};
`
export const Title = styled.h3`
  font-size: ${h3.fontSize};
  line-height: ${h3.lineHeight};
  margin-bottom: ${h3.marginBottom};
`
export const Subtitle = styled.h4`
  font-size: ${h4.fontSize};
  line-height: ${h4.lineHeight};
  margin-bottom: ${h4.marginBottom};
`
export const Section = styled.section`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
`
export const Paragraph = styled.p`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
`
export const Image = styled.img``
export const SVG = styled.svg`
  @media (prefers-color-scheme: light) {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  @media (prefers-color-scheme: dark) {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`
