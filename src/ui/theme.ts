export const theme = {
  colors: {
    primary: {
      100: '#D4E4FA',
      300: '#5595E9',
      400: '#2A7AE4',
    }
  },
  fonts: {
    global: `
      font-family: Raleway;
      font-style: normal;
      letter-spacing: 0em;
      text-align: left;
    `,
    title: {
      desktop: `
        font-weight: 700;
        font-size: 52px;
        line-height: 61px;     
      `,
      mobile: `
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;     
      `,
    },
    body: {
      sm: `
        font-size: 14px;
        line-height: 16px;
      `,
      md: `
        font-size: 16px;
        line-height: 19px;
      `,
    },
  }
}