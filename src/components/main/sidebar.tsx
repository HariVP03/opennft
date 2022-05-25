import {
    CalendarIcon,
    ChatIcon,
    HamburgerIcon,
    SettingsIcon,
} from "@chakra-ui/icons";
import { Button, chakra, Flex, IconButton } from "@chakra-ui/react";
import { Navbutton } from "@components/button";
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
            direction="column"
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
            <Flex gap={3} mt={5} align="center" direction="column">
                <Navbutton sidebarClosed={!isOpen} icon={<CalendarIcon />}>
                    Dates
                </Navbutton>
                <Navbutton sidebarClosed={!isOpen} icon={<ChatIcon />}>
                    Chat
                </Navbutton>
                <Navbutton sidebarClosed={!isOpen} icon={<SettingsIcon />}>
                    Settings
                </Navbutton>
            </Flex>
        </Flex>
    );
};

export default Sidebar;
