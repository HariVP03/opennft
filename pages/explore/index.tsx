import { Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import Head from "next/head";

const Explore = ({ pageProps }: any) => {
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
    const prisma = new PrismaClient();
    await prisma.$connect();

    return {
        props: {
            pageProps: "Hello",
        },
        revalidate: 60 * 90, // Revalidates every 1.5 hours
    };
};

export default Explore;
