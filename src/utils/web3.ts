import { useEthers } from "@usedapp/core";

export const connectToMetamask = () => {
    const { activateBrowserWallet } = useEthers();
    activateBrowserWallet();
};

export const truncateAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(address.length - 4);
};
