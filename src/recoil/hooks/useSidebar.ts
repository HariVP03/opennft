import { useRecoilState } from "recoil";
import { sidebar as sidebarAtom } from "@recoil/atoms";

export const useSidebar: () => [
    boolean,
    { toggle: () => void; close: () => void; open: () => void },
] = () => {
    const [sidebar, setSidebar] = useRecoilState(sidebarAtom);

    const toggle = () => {
        setSidebar((curr) => !curr);
    };

    const open = () => {
        setSidebar(true);
    };

    const close = () => {
        setSidebar(false);
    };

    return [sidebar, { toggle, close, open }];
};
