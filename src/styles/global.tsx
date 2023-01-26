import styled from 'styled-components'

export const PageLayout = styled.main`
  @media screen {
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.typography.content.fontSize};
    line-height: ${(props) => props.theme.typography.content.lineHeight};
    padding: 0 ${(props) => props.theme.typography.lineHeightSpacing(1.5)};

  }
`

export const Heading = styled.h1`
@media screen {

  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h2.marginBottom};
  margin-top: ${(props) => props.theme.typography.h2.marginBottom};
}

`
export const Title = styled.h3`@media screen {

  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h3.marginBottom};
  margin-top: ${(props) => props.theme.typography.h3.marginBottom};
}

`
export const Subtitle = styled.h4`@media screen {

  font-size: ${(props) => props.theme.typography.h4.fontSize};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h4.marginBottom};
  margin-top: ${(props) => props.theme.typography.h4.marginBottom};
}

`

export const H5 = styled.h5`@media screen {

  font-size: ${(props) => props.theme.typography.h5.fontSize};
  line-height: ${(props) => props.theme.typography.h5.lineHeight};
  margin-bottom: ${(props) => props.theme.typography.h5.marginBottom};
  margin-top: ${(props) => props.theme.typography.h5.marginBottom};
}
`
export const H6 = styled.h6`
  font-size: 1.2rem;
  line-height: 1.5rem;
  @media screen {
      line-height: ${(props) => props.theme.typography.h6.lineHeight};
      font-size: ${(props) => props.theme.typography.h6.fontSize};
      margin-bottom: ${(props) => props.theme.typography.h6.marginBottom};
      margin-top: ${(props) => props.theme.typography.h6.marginBottom};
  }`


export const Section = styled.section``

  
export const Span = styled.span``
  
export const Paragraph = styled.p`
  @media print {
    margin: ${(props) => props.theme.typography.lineHeightSpacing(.25)} 0;
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(.5)};
    font-size: ${(props) => props.theme.typography.lineHeightSpacing(.5)};
  }
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1.5)};
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(1)};

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
  margin: 0
`

export const LI = styled.li``

export const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin: -1px 0;
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
 `

 export const Div = styled.div``

 export enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export const Article = styled.article``

export const Small = styled.small`font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.6)}; `

export const ResumeSwitcher = styled(Small)`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  cursor: pointer;
  color: ${(props) => props.theme.colors.small};
  margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  margin-top: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  @media print {
    display: none;
  }
`
