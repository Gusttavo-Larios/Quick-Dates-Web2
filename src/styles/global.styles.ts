import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }

    :root {
        font-size: 62.5%;
    }

    body {
      overflow-x: hidden;
    }
`;

export default GlobalStyle;
