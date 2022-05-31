import { chakra, Flex } from "@chakra-ui/react";
import { Layout } from "@components/main";
import Head from "next/head";

const Profile = () => {
    return (
        <>
            <Head>
                <title>OpenNFT | Profile</title>
            </Head>
            <chakra.main>
                <Layout>
                    <Flex px={9}>sex</Flex>
                </Layout>
            </chakra.main>
        </>
    );
};

export default Profile;
