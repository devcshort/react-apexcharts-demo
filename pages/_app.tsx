import { StylesProvider, ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from '../common/config/theme';
import Layout from '../common/components/Layout/Layout';
import GlobalStylesheet from '../common/components/GlobalStylesheet/GlobalStylesheet';

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStylesheet />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
