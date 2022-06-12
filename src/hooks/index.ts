import { useClipboard, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getDicebear } from "src/utils";

export type useCopyInput = {
    target: string;
};

export type useCopyReturnType = {
    copyTarget: () => void;
    hasCopied: boolean;
};

export const useCopy: (params: useCopyInput) => useCopyReturnType = ({
    target,
}) => {
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

export type useDicebearInput = {
    setState: Dispatch<SetStateAction<string | undefined>>;
    seed: string | undefined;
};

export const useDicebear: (input: useDicebearInput) => void = ({
    seed,
    setState,
}) => {
    useEffect(() => {
        setState(getDicebear(seed || ""));
    }, [seed]);
};
