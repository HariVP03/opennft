import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

export const sidebar = atom({
    key: Atoms.Sidebar,
    default: false,
});
