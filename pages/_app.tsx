import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "../context/shoppingCartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </ChakraProvider>
  );
}
