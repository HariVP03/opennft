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
                    <NFTCard
                        title="Abstract Art"
                        alt="Abstract art"
                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                        creatorName="John Doe"
                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                    />
                </Flex>
            </Layout>
        </>
    );
};

export default Home;
