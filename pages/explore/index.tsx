import { Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import Head from "next/head";

const Explore = () => {
    return (
        <>
            <Head>
                <title>OpenNFT | Explore</title>
            </Head>
            <Layout>
                <Flex color="white" px={9}></Flex>
            </Layout>
        </>
    );
};

export default Explore;
