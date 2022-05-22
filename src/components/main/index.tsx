import React from "react";
import Navbar from "./navbar";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
