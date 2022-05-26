import { Button, Icon, Text } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";
import { IconType } from "react-icons";

const NavButton: React.FC<{
    selected?: boolean;
    icon?: ReactElement<any, string | JSXElementConstructor<any>>;
    sidebarClosed?: boolean;
    onClick?: () => void;
}> = ({ children, selected = false, icon, sidebarClosed = false, onClick }) => {
    return (
        <Button
            // leftIcon={icon}
            w="75%"
            _hover={{ bg: "gray.700" }}
            _active={{}}
            _focus={{ outline: "0" }}
            bg={!selected ? "transparent" : "button.nav.selected"}
            rounded="2xl"
            justifyContent={sidebarClosed ? "center" : "start"}
            color={selected ? "white" : "auto"}
            onClick={onClick}
        >
            <Text my="auto">{icon}</Text>
            <Text
                fontWeight="500"
                mx={3}
                my="auto"
                fontSize="sm"
                display={sidebarClosed ? "none" : "auto"}
            >
                {children}
            </Text>
        </Button>
    );
};

export default NavButton;
