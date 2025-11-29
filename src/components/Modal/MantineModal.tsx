import { Modal } from "@mantine/core";
import type { ReactNode } from "react";
import type { MantineSize } from "@mantine/core";

export interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title?: ReactNode;
    children: ReactNode;
    size?: MantineSize | number | string;
    centered?: boolean;
    fullScreen?: boolean;
    className?: string;
}

const MantineModal = ({
    opened,
    onClose,
    title,
    children,
    size = "md",
    centered,
    fullScreen,
    className,
    ...others
}: ModalProps) => {
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={title}
            size={size}
            centered={centered}
            fullScreen={fullScreen}
            className={className}
            {...others}
        >
            {children}
        </Modal>
    );
};

MantineModal.displayName = "Block.Modal";

export default MantineModal;
