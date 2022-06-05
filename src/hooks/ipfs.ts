import axios, { AxiosRequestConfig } from "axios";
import { IPFS_JWT } from "src/providers/ipfs";

export const useTestAuth = () => {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "https://api.pinata.cloud/data/testAuthentication",
        headers: {
            Authorization: `Bearer ${IPFS_JWT}`,
        },
    };

    return axios(config);
};
