import { useEthers } from "@usedapp/core";

export const connectToMetamask: () => void = () => {
    const { activateBrowserWallet } = useEthers();
    activateBrowserWallet();
};

export const truncateAddress: (address: string) => string = (address) => {
    return address.slice(0, 6) + "..." + address.slice(address.length - 4);
};
