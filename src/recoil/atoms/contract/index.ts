import { Atoms } from "@recoil/constants";
import { atom } from "recoil";

export const contract = atom({
    default: null,
    key: Atoms.Contract,
});
