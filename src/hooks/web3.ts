import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { isAddress } from "ethers/lib/utils";

export const useContractInstance = (address: string, abi: any) => {
    if (!isAddress(address)) return;
    const contract = new Contract(address, abi);

    return contract;
};
