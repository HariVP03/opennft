import { Button, chakra, Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { useEthers } from "@usedapp/core";
import Head from "next/head";

const Wallet = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers();

    return (
        <>
            <Head>
                <title>OpenNFT | Wallet</title>
            </Head>
            <chakra.main>
                <Layout>
                    <Flex gap={5} align="center" px={9}>
                        <Button
                            onClick={() => {
                                activateBrowserWallet();
                            }}
                            isDisabled={Boolean(account)}
                        >
                            {account
                                ? "Account already connected"
                                : "Connect to Metamask"}
                        </Button>
                        <Button
                            onClick={() => {
                                deactivate();
                            }}
                            size="sm"
                            display={account ? "auto" : "none"}
                        >
                            Deactivate
                        </Button>
                    </Flex>
                </Layout>
            </chakra.main>
        </>
    );
};

export default Wallet;
