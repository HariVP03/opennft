import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const NFTCard = () => {
    const [liked, setLiked] = useState<boolean>(false);
    return (
        <Flex
            w="280px"
            // align="center"
            h="350px"
            bg="bg.2"
            pt={2}
            rounded="xl"
            direction="column"
        >
            <Image
                mx="auto"
                fit="cover"
                w="90%"
                h="70%"
                src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600"
                rounded="xl"
            />
            <Flex pr={5} justify="space-between" mb={1} align="center">
                <Text mx={4} mb={1} mt={2} fontWeight="600" fontSize="xl">
                    Abstract Art
                </Text>
                <Button
                    variant="ghost"
                    _active={{}}
                    _focus={{ outline: "none" }}
                    zIndex="1"
                    position="relative"
                    top="-40px"
                    rounded="full"
                    p={0}
                    onClick={() => setLiked((prev) => !prev)}
                >
                    {!liked ? (
                        <AiOutlineHeart size="20px" />
                    ) : (
                        <AiFillHeart color="red" size="20px" />
                    )}
                </Button>
            </Flex>

            <Flex align="center" mt={0} mx={4}>
                <Avatar
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153"
                    size="sm"
                />
                <Flex justify="center" ml={4} direction="column">
                    <Text fontSize="sm" my={0} fontWeight="600">
                        John Doe
                    </Text>
                    <Text color="gray.500" fontSize="sm" my={0}>
                        Creator
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NFTCard;
