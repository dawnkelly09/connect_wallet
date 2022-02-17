import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";


export default function App() {
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      <Layout>
        <ConnectButton />
      </Layout>
    </ChakraProvider>
  )
}


