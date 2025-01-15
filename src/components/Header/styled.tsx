import {
  Section,
  Title,
  Sizes,
  Paragraph,
  Div,
  A,
  Span
} from '../../styles/global'
import styled, { css } from 'styled-components'

export const Header = styled(Section)<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media print {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  ${(props) => {
    switch (props.size) {
      case Sizes.MEDIUM:
        return css`
          justify-items: center;
          flex-direction: column;
          margin-bottom: ${(props.theme as any).typography.lineHeightSpacing(
            3
          )};
          padding-top: ${(props.theme as any).typography.lineHeightSpacing(4)};
        `
      case Sizes.SMALL:
        return css`
          align-items: center;
          @media screen {
            padding-top: ${(props.theme as any).typography.lineHeightSpacing(
              1
            )};
          }
          @media print {
            margin-top: ${(props.theme as any).typography.lineHeightSpacing(
              0.5
            )};
            margin-bottom: ${(props.theme as any).typography.lineHeightSpacing(
              0.75
            )};
          }
        `
      default:
        break
    }
  }};
`
export const HeaderTitle = styled(Title)<any>`
  font-weight: 400;
  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case Sizes.SMALL:
        return css`
          margin: 0;
          padding-top: 0;
          font-size: ${(props.theme as any).typography.h5.fontSize};
          line-height: ${(props.theme as any).typography.h5.lineHeight};
          @media print {
            font-size: ${(props.theme as any).typography.h6.fontSize};
          }
        `
      default:
        break
    }
  }};
`

export const HeaderDescription = styled(Paragraph)`
  font-size: ${(props) =>
    (props.theme as any).typography.lineHeightSpacing(0.75)};
  line-height: ${(props) =>
    (props.theme as any).typography.lineHeightSpacing(1)};
  padding-right: ${(props) =>
    (props.theme as any).typography.lineHeightSpacing(2)};
`

export const Email = styled(Div)`
  display: none;
  @media print {
    display: block;
  }
`

export const Info = styled(Div)`
  display: flex;
  flex-direction: column;
`

export const Muted = styled(Span)`
  color: ${(props) => props.theme.colors.muted};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media print {
    display: none;
  }
`

export const Text = styled(Span)`
  @media print {
    &::after {
      content: ' ';
    }
  }
`

export const Anchor = styled(A)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    text-transform: lowercase;
    span {
      color: ${(props) => props.theme.colors.primary};
    }
    color: ${(props) => props.theme.colors.primary};
  }
`
