import { Button, chakra, Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { useEthers } from "@usedapp/core";
import Head from "next/head";

const Wallet = () => {
    const { activateBrowserWallet } = useEthers();
    return (
        <>
            <Head>
                <title>OpenNFT | Wallet</title>
            </Head>
            <chakra.main>
                <Layout>
                    <Flex px={9}>
                        <Button
                            onClick={() => {
                                activateBrowserWallet();
                            }}
                        >
                            Connect to Metamask
                        </Button>
                    </Flex>
                </Layout>
            </chakra.main>
        </>
    );
};

export default Wallet;
