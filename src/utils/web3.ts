import { useEthers } from "@usedapp/core";

export const connectToMetamask = () => {
    const { activateBrowserWallet } = useEthers();
    activateBrowserWallet();
};
