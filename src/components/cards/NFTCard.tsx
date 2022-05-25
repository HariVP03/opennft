import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
    Text,
} from "@chakra-ui/react";

const NFTCard = () => {
    return (
        <Flex
            direction="column"
            h="380px"
            w="325px"
            cursor="pointer"
            shadow="lg"
            position="relative"
            _hover={{ transform: "translateY(-2px)" }}
            transition="transform 100ms linear"
        >
            <Image
                w="full"
                h="85%"
                // bg="blue"
                fit="cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="NFT image"
            />
            <Flex
                p={0}
                // bg="red"
                justify="center"
                direction="column"
                align="center"
                w="full"
                h="15%"
            >
                {/* NFT Image */}
                <Text mb={0} fontSize="xl" fontWeight="500">
                    NFT Image
                </Text>
                <Text mb={0} fontSize="md">
                    NFT Image
                </Text>
            </Flex>
        </Flex>
    );
};

export default NFTCard;
