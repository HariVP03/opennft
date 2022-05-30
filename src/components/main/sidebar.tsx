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
    AiOutlineWallet,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { useSidebar } from "@recoil/hooks";

interface NavButtonType {
    title: string;
    icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    selected: boolean;
    id: number;
    link: string;
}

const Sidebar = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isOpen, { toggle }] = useSidebar();

    const router = useRouter();

    const [buttons, setButtons] = useState<Array<NavButtonType>>([
        {
            title: "Home",
            icon: <AiOutlineHome />,
            selected: router.asPath === "/",
            id: 0,
            link: "/",
        },
        {
            title: "Explore",
            icon: <AiOutlineSave />,
            selected: router.asPath === "/explore",
            id: 1,
            link: "/explore",
        },
        {
            title: "Saved",
            icon: <AiOutlineSave />,
            selected: router.asPath === "/saved",
            id: 2,
            link: "/saved",
        },
        {
            title: "Profile",
            icon: <CgProfile />,
            selected: router.asPath === "/profile",
            id: 3,
            link: "/profile",
        },
        {
            title: "Wallet",
            icon: <AiOutlineWallet />,
            selected: router.asPath === "/wallet",
            id: 4,
            link: "/wallet",
        },
    ]);

    const onNavBtnClick = (id: number) => {
        buttons.forEach((e) => {
            if (e.id === id) {
                router.push(e.link);
            }
        });
    };

    return (
        <Flex
            bg="bg.2"
            transition="all 100ms linear"
            w={isOpen ? "15vw" : "3vw"}
            minW={isOpen ? "150px" : "50px"}
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
                    onClick={toggle}
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
