import {createGlobalStyle} from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.font}
}
`

export default GlobalStyle