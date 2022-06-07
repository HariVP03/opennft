import { Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { GetServerSideProps, GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {},
        revalidate: 60 * 90, // Revalidates every 1.5 hours
    };
};

export default Explore;
