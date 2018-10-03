export default `
  @page {
    size: A4;
  }

  @media print {
    a {
      color: black;
      text-decoration: none;
      pointer-events: none;
    }
  }

  html, body {
    background: white;
    font-family: --apple-system, BlinkMacSystemFont, helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    user-select: none;
    @media print {
      font-family: helvetica, roboto, sans-serif;
    }
  }
  body {
    max-width: 45rem;
    margin: 1.5rem auto;
    padding: 1.5rem;
    margin-bottom: 0;
    @media (max-width: 480px) {
      margin: 1.5rem
      padding: 0;
    }
    @media print {
      margin: 0 auto
    }
  }
`
