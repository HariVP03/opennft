import { useContractFunction } from "@usedapp/core";
import { useContractInstance } from "src/hooks/web3";

export const useContract = (address: string, abi: any) => {
    const contract = useContractInstance(address, abi);

    const useContractFunc = (func: string) => {
        const { state, send } = useContractFunction(contract, func);

        return { state, send };
    };

    return [contract, { useContractFunc }];
};
