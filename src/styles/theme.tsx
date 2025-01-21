import createShevy from 'shevyjs'
import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

const shevy = createShevy({
  baseFontSize: '16px', // Base font size of 16px
  baseLineHeight: 1.5, // Base line height of 1.5
  fontScale: 'perfectFourth', // Use the Major Third font scale for better readability
  includeMarginBottom: false, // Include bottom margin for better spacing
  proximity: 0.3, // Adjust the proximity for spacing between elements
  precision: 4 // Round values to 4 decimal places for better accuracy
})

const {
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  content,
  lineHeightSpacing,
  baseSpacing
} = shevy

const COLORS = {
  electromagnetic: '#2f3640',
  lynxWhite: '#f5f6fa',
  chainchanggrey: '#718093',
  subltleSlate: '#92969d'
}
const Theme: DefaultTheme = {
  colors: {
    primary: COLORS.electromagnetic,
    secondary: COLORS.lynxWhite,
    small: COLORS.chainchanggrey,
    muted: COLORS.subltleSlate
  },
  background: {
    light: COLORS.lynxWhite,
    dark: COLORS.electromagnetic
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  typography: {
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    content,
    lineHeightSpacing,
    baseSpacing
  }
}

export const GlobalStyle = createGlobalStyle`${css`
  body,
  html {
    font-family: ${(props: any) => props.theme.fontFamily};
    background: ${(props: any) => props.theme.background.light};
  }
  @media screen {
    body,
    html {
      margin: 0;
      padding: 0;
    }
    body {
      font-size: ${(props: any) => props.theme.typography.body.fontSize};
      line-height: ${(props: any) => props.theme.typography.body.lineHeight};
      
}
    

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 0;
      margin-top: 0;
    }
    // ul, ol {
    //   font-size: ${(props: any) => props.theme.typography.content.fontSize};
    //   line-height: ${(props: any) => props.theme.typography.content.lineHeight};
    //   margin: 1em 0;
    // }
    li {
      // font-size: ${(props: any) => props.theme.typography.content.fontSize};
      line-height: ${(props: any) => props.theme.typography.content.lineHeight};
      // margin-bottom: ${(props) => props.theme.typography.baseSpacing(0.25)};
    }
  }
  
  @media print {
    @page {
      size: A4 portRait;
      margin: 10px;
    }
    html,
    body {
      width: 210mm;
      height: 290mm;
      font-size: 12px;
      line-height: 1.5rem;
      background: white;
    }

    a {
      color: ${(props: any) => props.theme.colors.primary};
      text-decoration: none;
      pointer-events: none;
    }

    // h1, h2, h3, h4, h5, h6 {
    //   margin-bottom: ${(props) => props.theme.typography.baseSpacing(0.25)};
    //   margin-top: ${(props) => props.theme.typography.baseSpacing(.5)};
    // }

    header,
    footer {
      display: none;
    }
  }
`}
`

export default Theme
