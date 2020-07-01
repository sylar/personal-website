import styled from 'styled-components'

export const PageLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.content.marginBottom};
`

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h2.marginBottom};
`
export const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h3.marginBottom};
`
export const Subtitle = styled.h4`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h4.marginBottom};
`
export const Section = styled.section`
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.content.marginBottom};
`
export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.content.marginBottom};
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

export const UL = styled.ul`
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.content.marginBottom};
`

export const LI = styled.li`
  font-size: ${(props) => props.theme.typography.content.fontSize};
  line-height: ${(props) => props.theme.typography.content.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.content.marginBottom};
`
