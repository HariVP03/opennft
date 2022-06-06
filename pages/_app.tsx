import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { RecoilRoot } from "recoil";
import { Config, DAppProvider, Mumbai } from "@usedapp/core";
import { alchemyApiKey, alchemyEndpoint } from "src/providers/alchemy";
import { providers } from "ethers";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const config: Config = {
        readOnlyChainId: Mumbai.chainId,
        readOnlyUrls: {
            [Mumbai.chainId]: alchemyEndpoint,
        },
    };

    const AnyComponent = Component as any;

    return (
        <ChakraProvider theme={theme}>
            <RecoilRoot>
                <DAppProvider config={config}>
                    <AnyComponent {...pageProps} />
                </DAppProvider>
            </RecoilRoot>
        </ChakraProvider>
    );
}

export default MyApp;
