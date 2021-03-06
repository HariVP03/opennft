import {
    Avatar,
    chakra,
    Flex,
    Text,
    Image,
    Spinner,
    useToast,
    Button,
} from "@chakra-ui/react";
import NFTCard from "@components/cards/NFTCard";
import { Layout } from "@components/main";
import { useEthers } from "@usedapp/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCopy, useDicebear } from "src/hooks";
import { truncateAddress } from "src/utils/web3";

const Profile = () => {
    const { account } = useEthers();
    const router = useRouter();

    useEffect(() => {
        if (!account) {
            router.push("/wallet");
            walletNotFound();
        }
    }, [account]);

    const walletNotFound = useToast({
        title: "Cannot access profile",
        status: "info",
        description: "Connect your wallet to access your profile",
        isClosable: true,
    });

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
                    {!account ? (
                        <Flex w="full" h="90vh" justify="center" align="center">
                            <Spinner size="xl" />
                        </Flex>
                    ) : (
                        <Flex direction="column" px={9}>
                            <Image
                                mt={3}
                                w="98%"
                                h="200px"
                                bg="blue.300"
                                roundedTop="xl"
                                objectPosition="center"
                                objectFit="cover"
                                roundedBottom="md"
                                src="https://images.unsplash.com/photo-1614202158805-5269c4a2a28a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2046&q=80"
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

                                <Flex
                                    mt={8}
                                    justify="center"
                                    direction="column"
                                >
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
                                        {truncateAddress(account || "")}
                                    </Text>
                                    <Button
                                        // p={2}
                                        py={1}
                                        h="fit-content"
                                        mt={2}
                                        w="fit-content"
                                    >
                                        Edit Profile
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex direction="column" mt={8}>
                                <chakra.h1 fontSize="2xl">Owned NFTs</chakra.h1>
                                <Flex gap="2%" flexWrap="wrap">
                                    <NFTCard
                                        title="Abstract Art"
                                        alt="Abstract art"
                                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                                        creatorName="John Doe"
                                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                                    />
                                    <NFTCard
                                        title="Abstract Art"
                                        alt="Abstract art"
                                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                                        creatorName="John Doe"
                                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                                    />
                                    <NFTCard
                                        title="Abstract Art"
                                        alt="Abstract art"
                                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                                        creatorName="John Doe"
                                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                                    />
                                    <NFTCard
                                        title="Abstract Art"
                                        alt="Abstract art"
                                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                                        creatorName="John Doe"
                                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                                    />
                                    <NFTCard
                                        title="Abstract Art"
                                        alt="Abstract art"
                                        avatar="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                                        creatorName="John Doe"
                                        image="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                    )}
                </Layout>
            </chakra.main>
        </>
    );
};

export default Profile;
