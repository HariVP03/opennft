import { useClipboard, useToast } from "@chakra-ui/react";

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
