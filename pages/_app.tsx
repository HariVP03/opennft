import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const AnyComponent = Component as any;
    return (
        <ChakraProvider theme={theme}>
            <RecoilRoot>
                <DarkMode>
                    <AnyComponent {...pageProps} />
                </DarkMode>
            </RecoilRoot>
        </ChakraProvider>
    );
}

export default MyApp;
