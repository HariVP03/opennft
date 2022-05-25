import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, chakra, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleClose = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Flex
            bg="bg.2"
            transition="all 100ms linear"
            w={isOpen ? "15vw" : "3vw"}
            h="100vh"
            color="gray.400"
        >
            <Flex
                align="center"
                h="fit-content"
                w="full"
                justify="space-between"
            >
                <chakra.h2 ml="2" display={isOpen ? "auto" : "none"}>
                    OpenNFT
                </chakra.h2>

                <Button
                    _active={{}}
                    _focus={{ outline: "0" }}
                    bg="transparent"
                    _hover={{ color: "white" }}
                    onClick={toggleClose}
                >
                    <HamburgerIcon />
                </Button>
            </Flex>
        </Flex>
    );
};

export default Sidebar;
