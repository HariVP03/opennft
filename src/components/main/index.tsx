import { Search2Icon } from "@chakra-ui/icons";
import {
    chakra,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { useSidebar } from "@recoil/hooks";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Sidebar from "./sidebar";

interface HeadingType {
    route: string;
    heading: string;
}

export const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const [heading, setHeading] = useState<string | undefined>();

    const Headings: Array<HeadingType> = useMemo(
        () => [
            { route: "/", heading: "Dashboard" },
            { route: "/explore", heading: "Explore" },
            { route: "/saved", heading: "Saved" },
            { route: "/profile", heading: "Profile" },
            { route: "/wallet", heading: "Wallet" },
        ],
        [],
    );

    useEffect(() => {
        Headings.forEach((e) => {
            if (e.route === router.asPath) {
                setHeading(e.heading);
            }
        });
    }, []);

    const [isOpen] = useSidebar();

    return (
        <>
            <Flex bg="bg.1">
                <Sidebar />
                <Flex
                    ml={isOpen ? "15vw" : "3vw"}
                    w="full"
                    transition="all 100ms linear"
                    direction="column"
                    color="white"
                    minH="100vh"
                >
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
                            {heading}
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
