import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap');

  :root {
    --blue-dark: #1E6F9F;
    --blue: #4EA8DE;

    --purple-dark: #5E60CE;
    --purple: #8284Fa;

    --white: #FFFFFF;

    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;

    --danger: #E25858;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    background-color: var(--gray-600);
  }

  button {
    font-family: inherit;
  }

  p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
`
