export const theme = {
  colors: {
    primary: {
      100: '#D4E4FA',
      300: '#5595E9',
      400: '#2A7AE4',
    },
    neutral: {
      100: '#F5F5F5',
      400: '#A2A2A2',
      800: '#464646',
    }
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
  },
  fonts: {
    global: `
      font-family: Raleway;
      font-style: normal;
      letter-spacing: 0em;
      text-align: left;
    `,
    xs: `
      font-size: 14px;
      line-height: 16px;
    `,
    sm: `
      font-size: 16px;
      line-height: 19px;
    `,
    md: `
      font-size: 22px;
      line-height: 26px;
    `,
    lg: `
      font-size: 32px;
      line-height: 38px;
    `,
    xl: `
      font-size: 52px;
      line-height: 61px;
    `,
  },
}