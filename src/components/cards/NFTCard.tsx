import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";

const NFTCard = () => {
    return (
        <Box
            w="xs"
            bg={useColorModeValue("white", "gray.800")}
            rounded="none"
            cursor="pointer"
            overflow="hidden"
            border="1px solid black"
            _hover={{ transform: "translateY(-5px)" }}
            transition="transform 100ms linear"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
            />

            <Box py={5} textAlign="center">
                <Link
                    display="block"
                    fontSize="2xl"
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                >
                    John Doe
                </Link>
                <chakra.span
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    Software Engineer
                </chakra.span>
            </Box>
        </Box>
    );
};

export default NFTCard;
