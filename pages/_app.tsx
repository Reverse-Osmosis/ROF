import type { AppProps } from "next/app";
import { WalletProvider } from "@cosmos-kit/react";

import { ThemeProvider } from "styled-components";
import { theme } from "../config";
import { defaultTheme } from "../config/defaultTheme";

import {
  keplrExtensionInfo,
  keplrMobileInfo,
  KeplrExtensionWallet,
  KeplrMobileWallet,
} from "@cosmos-kit/keplr";

import { getSigningCosmosClientOptions } from "interchain";
import { GasPrice } from "@cosmjs/stargate";

import { Chain } from "@chain-registry/types";
import { assets, chains } from "chain-registry";
import { SignerOptions } from "@cosmos-kit/core";
import { GlobalStyle } from "../config/globalStyles";
import { ChakraProvider } from "@chakra-ui/react";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const keplrExtension = new KeplrExtensionWallet(keplrExtensionInfo);
  const KeplrMobile = new KeplrMobileWallet(keplrMobileInfo);

  const wallets = [keplrExtension, KeplrMobile];

  /*   const signerOptions: SignerOptions = {
    stargate: (_chain: Chain) => {
      return getSigningCosmosClientOptions();
    },
    cosmwasm: (chain: Chain) => {
      switch (chain.chain_name) {
        case "osmosis":
          return {
            gasPrice: GasPrice.fromString("0.0025uosmo"),
          };
        case "osmosistestnet":
          return {
            gasPrice: GasPrice.fromString("0.0025uosmo"),
          };
      }
    },
  }; */

  return (
    <ChakraProvider theme={defaultTheme}>
      <ThemeProvider theme={theme}>
        <WalletProvider
          chains={chains}
          assetLists={assets}
          wallets={wallets}
          /*           signerOptions={signerOptions}
           */
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </WalletProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
