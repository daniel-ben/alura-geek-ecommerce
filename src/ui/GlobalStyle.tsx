import { createGlobalStyle } from 'styled-components'
import { theme } from '@ui/theme'

export const GlobalStyle = createGlobalStyle`
  html,
  body, input, textarea, button {
    padding: 0;
    margin: 0;
    ${theme.fonts.global}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    border: none;
    padding: 0;
    margin: 0;

  }
`;