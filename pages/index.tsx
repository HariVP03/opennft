import { Flex } from "@chakra-ui/react";
import NFTCard from "@components/cards/NFTCard";
import { Layout } from "@components/main";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>OpenNFT</title>
            </Head>
            <Layout>
                <Flex color="white" px={9}>
                    123
                    <NFTCard />
                </Flex>
            </Layout>
        </>
    );
};

export default Home;
