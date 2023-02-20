import '../styles/globals.css'
import '../styles/theme.css'
import type { AppProps } from 'next/app'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
<ThemeProvider>
<Component {...pageProps} />
</ThemeProvider>
  useEffect(() => {
    AOS.init();
  }, [])
  return 
}
