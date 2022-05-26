import {
    CalendarIcon,
    ChatIcon,
    HamburgerIcon,
    SettingsIcon,
} from "@chakra-ui/icons";
import { Button, chakra, Flex, Icon, IconButton } from "@chakra-ui/react";
import { Navbutton } from "@components/button";
import { JSXElementConstructor, ReactElement, useMemo, useState } from "react";
import {
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineHome,
    AiOutlineSave,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

interface NavButtonType {
    title: string;
    icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    selected: boolean;
    id: number;
}

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const [buttons, setButtons] = useState<Array<NavButtonType>>([
        { title: "Home", icon: <AiOutlineHome />, selected: true, id: 0 },
        {
            title: "Explore",
            icon: <AiOutlineSave />,
            selected: false,
            id: 1,
        },
        { title: "Saved", icon: <AiOutlineSave />, selected: false, id: 2 },
        { title: "Profile", icon: <CgProfile />, selected: false, id: 3 },
    ]);

    const onNavBtnClick = (id: number) => {
        setButtons((prev) => {
            const temp: Array<NavButtonType> = [];
            prev.forEach((e) => {
                if (e.id === id) {
                    temp.push({
                        title: e.title,
                        icon: e.icon,
                        selected: true,
                        id: e.id,
                    });
                } else {
                    temp.push({
                        title: e.title,
                        icon: e.icon,
                        selected: false,
                        id: e.id,
                    });
                }
            });
            return temp;
        });
    };

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
                        <Icon as={AiOutlineAlignRight} />
                    )}
                </Button>
            </Flex>
            <Flex gap={3} mt={5} align="center" direction="column">
                {buttons.map((e) => (
                    <Navbutton
                        selected={e.selected}
                        sidebarClosed={!isOpen}
                        icon={e.icon}
                        onClick={() => {
                            onNavBtnClick(e.id);
                        }}
                        key={e.id}
                    >
                        {e.title}
                    </Navbutton>
                ))}
            </Flex>
        </Flex>
    );
};

export default Sidebar;
