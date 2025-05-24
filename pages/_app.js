// pages/_app.js
"use client";  // << ATENÇÃO: tem que vir antes de qualquer import!

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import Script from 'next/script';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* AdSense */}
      <Script
        id="adsense"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
        crossOrigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
