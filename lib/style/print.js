import {css} from 'react-emotion'

export default css`
  /**
 * Print Stylesheet fuer Deinewebsite.de
* @version         1.0
* @lastmodified    16.06.2016
*/

  @media print {
    main {
      width: 100%;
      margin: 0;
      float: none;
    }

    /* Font auf 16px/13pt setzen, Background auf Weiß und Schrift auf Schwarz setzen.*/
    /* Das spart Tinte */
    body {
      font: 13pt --apple-system, BlinkMacSystemFont, helvetica, sans-serif;
      ${''} background: #fff !important;
      color: #000;
    }

    h1 {
      font-size: 24pt;
    }

    h2,
    h3,
    h4 {
      font-size: 14pt;
      margin-top: 25px;
    }

    /* Alle Seitenumbrüche definieren */
    a {
      page-break-inside: avoid;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      page-break-after: avoid;
      page-break-inside: avoid;
    }
    img {
      page-break-inside: avoid;
      page-break-after: avoid;
    }
    table,
    pre {
      page-break-inside: avoid;
    }
    ul,
    ol,
    dl {
      page-break-before: avoid;
    }

    /* Linkfarbe und Linkverhalten darstellen */
    a:link,
    a:visited,
    a {
      background: transparent;
      color: black;
      font-weight: bold;
      text-decoration: underline;
      text-align: left;
    }

    a {
      page-break-inside: avoid;
    }

    /* Wichtige Elemente definieren */
    p,
    li,
    dt,
    dd,
    blockquote {
      font-size: 100%;
    }

    /* Zeichensatz fuer Code Beispiele */
    code,
    pre {
      font-family: 'Courier New', Courier, mono;
    }

    ul,
    ol {
      list-style: square;
      margin-bottom: 20pt;
    }
  }
`
