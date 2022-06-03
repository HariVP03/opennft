import { Avatar, chakra, Flex, Text } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { useEthers } from "@usedapp/core";
import { ethers } from "@usedapp/core/node_modules/ethers";
import Head from "next/head";
import { CgProfile } from "react-icons/cg";
import { truncateAddress } from "src/utils/web3";

const Profile = () => {
    // const {} = useEthers();

    return (
        <>
            <Head>
                <title>OpenNFT | Profile</title>
            </Head>
            <chakra.main>
                <Layout>
                    <Flex direction="column" px={9}>
                        <Flex
                            w="98%"
                            h="200px"
                            bg="blue.300"
                            roundedTop="xl"
                            roundedBottom="md"
                        />
                        <Flex gap={3} align="center" mt="-30px" ml="15px">
                            <Avatar
                                fontSize="200px"
                                size="2xl"
                                icon={<CgProfile />}
                                p={0}
                            />
                            <Flex justify="center" direction="column">
                                <Text
                                    px={2}
                                    my={0}
                                    fontWeight="500"
                                    fontSize="xl"
                                >
                                    Hari Vishnu Parashar
                                </Text>
                                <Text
                                    my={0}
                                    fontWeight="500"
                                    bg="gray.200"
                                    rounded="full"
                                    px={2}
                                    py={1}
                                    cursor="pointer"
                                    w="fit-content"
                                    color="gray.600"
                                    fontSize="sm"
                                >
                                    {truncateAddress(
                                        "0xb91CC1FBCA90301807DF4B98f5A04f7Ce62a3806",
                                    )}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Layout>
            </chakra.main>
        </>
    );
};

export default Profile;
