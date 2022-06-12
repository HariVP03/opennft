import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { isAddress } from "ethers/lib/utils";
import { ContractInterface } from "ethers";

export type useContractInstanceInput = {
    address: string;
    abi: ContractInterface;
};

export const useContractInstance: (
    params: useContractInstanceInput,
) => Contract | undefined = ({ address, abi }) => {
    if (!isAddress(address)) return;
    const contract = new Contract(address, abi);

    return contract;
};
