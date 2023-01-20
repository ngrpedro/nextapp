import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme  } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  components: {
  
  },
});


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
