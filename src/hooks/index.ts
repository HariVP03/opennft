import { useClipboard, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getDicebear } from "src/utils";

export const useCopy = (target: string) => {
    const copyToast = useToast({
        title: "Copied to Clipboard",
        status: "success",
    });
    const { hasCopied, onCopy } = useClipboard(target);

    const copyTarget = () => {
        onCopy();
        copyToast();
    };

    return { copyTarget, hasCopied };
};

export const useDicebear = (
    setState: Dispatch<SetStateAction<string | undefined>>,
    seed: string | undefined,
) => {
    useEffect(() => {
        setState(getDicebear(seed || ""));
    }, [seed]);
};
