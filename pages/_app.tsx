// import '../styles/globals.css';
import type {AppProps} from "next/app";
import {WalletProvider} from "@cosmos-kit/react";

// import { ChakraProvider } from '@chakra-ui/react';
import {ThemeProvider} from "styled-components";
import {theme} from "../config";
import {defaultTheme} from "../config/defaultTheme";

import {wallets} from "@cosmos-kit/keplr";
import {assets, chains} from "chain-registry";
import {getSigningCosmosClientOptions} from "osmojs";
import {GasPrice} from "@cosmjs/stargate";

import {SignerOptions} from "@cosmos-kit/core";
import {Chain} from "@chain-registry/types";
import {GlobalStyle} from "../config/globalStyles";
import {ChakraProvider} from "@chakra-ui/react";

function CreateCosmosApp({Component, pageProps}: AppProps) {
    const signerOptions: SignerOptions = {
        stargate: (_chain: Chain) => {
            return getSigningCosmosClientOptions();
        },
        cosmwasm: (chain: Chain) => {
            switch (chain.chain_name) {
                case "osmosis":
                case "osmosistestnet":
                    return {
                        gasPrice: GasPrice.fromString("0.0025uosmo"),
                    };
            }
        },
    };

    return (
        <ChakraProvider theme={defaultTheme}>
            <ThemeProvider theme={theme}>
                {/*<ChakraProvider theme={defaultTheme}>*/}
                <WalletProvider
                    chains={chains}
                    assetLists={assets}
                    wallets={wallets}
                    signerOptions={signerOptions}
                >
                    <GlobalStyle/>
                    <Component {...pageProps} />
                </WalletProvider>
                {/*</ChakraProvider>*/}
            </ThemeProvider>
        </ChakraProvider>
    );
}

export default CreateCosmosApp;
