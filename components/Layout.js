import React from "react";
import { Container, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import Head from "next/head";
import Nav from "./Nav";
import { Flex } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      "body": {
        bgGradient: "linear(to-b, blue.600, gray.800)"
      }
    }
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

const Layout = (props) => {
  return (
    <ChakraProvider theme={theme}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head>
      <Nav {...props} />
      <Container minheight="100vh" maxW="container.md" alignItems="center" justifyContent="center">
        {props.children}
      </Container>
      </ChakraProvider>
  );
};
export default Layout;
