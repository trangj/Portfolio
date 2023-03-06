import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import NavigationBar from 'src/components/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto max-w-4xl px-5 pb-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
