'use client'

import styled from 'styled-components'

import { A, Div, H5, Paragraph, Section, Span } from '../../styles/global'

export const Header = styled(Section)`
  display: flex;
  align-items: center;
  @media screen {
    justify-content: center;
    flex-direction: column;
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(2)};
  }
  @media print {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`
export const HeaderTitle = styled(H5)`
  font-weight: 400;
  cursor: pointer;

  @media print {
    font-size: ${(props) => props.theme.typography.h4.fontSize};
    margin-bottom: 0.25rem;
  }
`

export const HeaderDescription = styled(Paragraph)`
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  padding-right: ${(props) => props.theme.typography.lineHeightSpacing(2)};
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

export const MutedNormalFontWeight = styled(Muted)`
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  align-self: end;
  font-weight: 300;
  color: initial;
  @media print {
    display: block;
    color: initial;
  }
`
