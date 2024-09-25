import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
}

export const GlobaCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    padding-top: 40px;
    background-color: ${cores.preta};
    color: ${cores.branca}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%;
      padding: 0 10px;
    }
  }
`
