import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const NFTCard: React.FC<{
    image: string | undefined;
    alt: string;
    title: string;
    avatar: string;
    creatorName: string;
}> = ({ alt, avatar, creatorName, image, title }) => {
    const [liked, setLiked] = useState<boolean>(false);
    return (
        <Flex
            w="280px"
            // align="center"
            h="350px"
            bg="bg.2"
            position="relative"
            _hover={{ transform: "translateY(-5px)" }}
            pt={2}
            transition="transform 100ms linear"
            rounded="xl"
            cursor="pointer"
            direction="column"
        >
            <Image
                mx="auto"
                fit="cover"
                w="90%"
                h="70%"
                objectPosition="center"
                src={image}
                rounded="xl"
            />
            <Flex pr={5} justify="space-between" mb={1} align="center">
                <Text mx={4} mb={1} mt={2} fontWeight="600" fontSize="xl">
                    {title}
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
                    transition="all 100ms linear"
                >
                    {!liked ? (
                        <AiOutlineHeart size="20px" />
                    ) : (
                        <AiFillHeart color="red" size="20px" />
                    )}
                </Button>
            </Flex>

            <Flex align="center" mt={0} mx={4}>
                <Avatar src={avatar} size="sm" />
                <Flex justify="center" ml={4} direction="column">
                    <Text fontSize="sm" my={0} fontWeight="600">
                        {creatorName}
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
