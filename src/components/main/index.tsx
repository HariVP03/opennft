import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./sidebar";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Flex bg="bg.1">
                <Sidebar />
                {children}
            </Flex>
        </>
    );
};
