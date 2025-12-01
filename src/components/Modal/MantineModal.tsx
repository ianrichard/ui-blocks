import { CloseButton, Drawer, Modal } from "@mantine/core";
import type { ReactNode } from "react";
import type { MantineSize } from "@mantine/core";
import MantineTitle from "../Title/MantineTitle";
import MantineBlock from "../Block/MantineBlock";

export interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  size?: MantineSize | number | string;
  centered?: boolean;
  fullScreen?: boolean;
  className?: string;
  drawer?: boolean;
  position?: "top" | "bottom" | "left" | "right";
  maxWidth?: string | number;
  width?: string | number;
}

const MantineModal = ({
  centered,
  children,
  className,
  drawer,
  fullScreen,
  maxWidth,
  onClose,
  opened,
  position,
  size = "md",
  title,
  width,
  ...others
}: ModalProps) => {
  const Component = drawer ? Drawer : Modal;

  return (
    <Component.Root
      opened={opened}
      onClose={onClose}
      size={size}
      centered={centered}
      fullScreen={fullScreen}
      className={className}
      position={position}
      {...others}
    >
      <Component.Overlay />
      <Component.Content maw={maxWidth} w={width}>
        <Component.Header p={0}>
          <MantineBlock
            innerSpace="sm"
            row
            alignMiddle
            width="100%"
            borderBottom
          >
            <MantineTitle fillSpace size="sm">
              {title}
            </MantineTitle>
            <CloseButton onClick={onClose} />
          </MantineBlock>
        </Component.Header>
        <Component.Body p={0}>{children}</Component.Body>
      </Component.Content>
    </Component.Root>
  );
};

MantineModal.displayName = "Block.Modal";

export default MantineModal;
