import { Button, Icon, Text } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";
import { IconType } from "react-icons";

const NavButton: React.FC<{
    selected?: boolean;
    icon?: ReactElement<any, string | JSXElementConstructor<any>>;
    sidebarClosed?: boolean;
}> = ({ children, selected = false, icon, sidebarClosed = false }) => {
    return (
        <Button
            // leftIcon={icon}
            w="75%"
            _hover={{ bg: "gray.700" }}
            _active={{}}
            _focus={{ outline: "0" }}
            bg="transparent"
            rounded="2xl"
            justifyContent={sidebarClosed ? "center" : "start"}
        >
            {icon}
            <Text mx={3} my="auto" display={sidebarClosed ? "none" : "auto"}>
                {children}
            </Text>
        </Button>
    );
};

export default NavButton;
