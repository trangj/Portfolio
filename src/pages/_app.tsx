import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import NavigationBar from 'src/components/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto max-w-5xl px-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
