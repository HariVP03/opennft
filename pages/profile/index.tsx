import { Avatar, chakra, Flex, Text } from "@chakra-ui/react";
import { Layout } from "@components/main";
import { useEthers } from "@usedapp/core";
import Head from "next/head";
import { useState } from "react";
import { useCopy, useDicebear } from "src/hooks";
import { truncateAddress } from "src/utils/web3";

const Profile = () => {
    const { account } = useEthers();

    const [avatar, setAvatar] = useState<string | undefined>();
    const { copyTarget } = useCopy(account || "");

    useDicebear(setAvatar, account);

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
                                bg="white"
                                border="3px solid black"
                                src={avatar}
                                p={0}
                            />

                            <Flex justify="center" direction="column">
                                <Text
                                    // px={2}
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
                                    onClick={copyTarget}
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
