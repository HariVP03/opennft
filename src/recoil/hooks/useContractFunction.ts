import { Contract } from "@ethersproject/contracts";
import { TransactionStatus, useContractFunction } from "@usedapp/core";
import { utils } from "ethers";
import { LogDescription } from "ethers/lib/utils";
import { useContractInstance } from "src/hooks/web3";

export const useContract: (
    address: string,
    abi: any,
) => [
    Contract | undefined,
    {
        useContractFunc: (func: string) => {
            send: (...args: any[]) => Promise<any>;
            state: TransactionStatus;
            events: LogDescription[] | undefined;
            resetState: () => void;
        };
    },
] = (address: string, abi: Array<string>) => {
    const contractInterface = new utils.Interface(abi);

    const contract = useContractInstance(address, contractInterface);

    const useContractFunc = (func: string) => {
        const t = useContractFunction(contract, func);
        return t;
    };

    return [contract, { useContractFunc }];
};
