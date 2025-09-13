import * as React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import store from '../store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
}
