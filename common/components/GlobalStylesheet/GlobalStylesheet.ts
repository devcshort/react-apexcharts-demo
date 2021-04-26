import { createGlobalStyle } from 'styled-components';

const GlobalStylesheet = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #282C34;
    border-radius: 4px;
    box-shadow:
      0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%),
      0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  ::-webkit-scrollbar-track {
    background: #1C2025;
    width: 5px;
  }
`;

export default GlobalStylesheet;
