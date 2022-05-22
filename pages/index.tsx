import { Flex } from "@chakra-ui/react";
import NFTCard from "@components/cards/NFTCard";
import { Layout } from "@components/main";
import React from "react";

const Home: React.FC = () => {
    return (
        <Layout>
            <Flex
                flexWrap="wrap"
                gap="10"
                justify="space-around"
                w="full"
                p={5}
            >
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </Flex>
        </Layout>
    );
};

export default Home;
