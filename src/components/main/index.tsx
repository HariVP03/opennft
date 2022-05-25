import { Search2Icon } from "@chakra-ui/icons";
import {
    chakra,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Sidebar from "./sidebar";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Flex bg="bg.1">
                <Sidebar />
                <Flex w="full" direction="column" color="white">
                    <Flex
                        justify="space-between"
                        w="full"
                        // pt={3}
                        align="center"
                        // bg="red"
                        px={9}
                        h="60px"
                    >
                        <chakra.h1
                            color="white"
                            fontWeight="500"
                            // bg="blue"
                            fontSize="2xl"
                            my="auto"
                        >
                            Dashboard
                        </chakra.h1>

                        <InputGroup
                            w="fit-content"
                            h="fit-content"
                            my="auto"
                            // bg="blue"
                        >
                            <InputLeftElement color="gray.600">
                                <Search2Icon />
                            </InputLeftElement>
                            <Input
                                variant="filled"
                                w="300px"
                                _focus={{}}
                                placeholder="Search"
                            />
                        </InputGroup>
                    </Flex>
                    {children}
                </Flex>
            </Flex>
        </>
    );
};
