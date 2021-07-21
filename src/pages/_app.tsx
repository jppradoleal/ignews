import '../styles/global.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
