import {
    CalendarIcon,
    ChatIcon,
    HamburgerIcon,
    SettingsIcon,
} from "@chakra-ui/icons";
import { Button, chakra, Flex, Icon, IconButton } from "@chakra-ui/react";
import { Navbutton } from "@components/button";
import { useState } from "react";
import {
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineHome,
    AiOutlineSave,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
                pt={2}
                w="full"
                justify="space-between"
            >
                <chakra.h2
                    color="blue.200"
                    ml="5"
                    fontWeight="700"
                    fontSize="20px"
                    display={isOpen ? "auto" : "none"}
                    textDecoration="underline"
                    textDecorationThickness="2px"
                >
                    OpenNFT
                </chakra.h2>

                <Button
                    _active={{}}
                    _focus={{ outline: "0" }}
                    bg="transparent"
                    _hover={{ color: "white" }}
                    onClick={toggleClose}
                >
                    {isOpen ? (
                        <Icon as={AiOutlineAlignLeft} />
                    ) : (
                        // <AiOutlineAlignRight />
                        <Icon as={AiOutlineAlignRight} />
                    )}
                </Button>
            </Flex>
            <Flex gap={3} mt={5} align="center" direction="column">
                <Navbutton
                    selected
                    sidebarClosed={!isOpen}
                    icon={<AiOutlineHome />}
                >
                    Home
                </Navbutton>
                <Navbutton sidebarClosed={!isOpen} icon={<MdOutlineExplore />}>
                    Explore
                </Navbutton>
                <Navbutton sidebarClosed={!isOpen} icon={<AiOutlineSave />}>
                    Saved
                </Navbutton>
                <Navbutton sidebarClosed={!isOpen} icon={<CgProfile />}>
                    Profile
                </Navbutton>
            </Flex>
        </Flex>
    );
};

export default Sidebar;
