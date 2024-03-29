"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import S from "./Dialog.module.scss";
import Cross from "icons/cross.svg";

type DialogModalProps = {
  open: boolean;
  onChangeOpen: (v: boolean) => void;
  children: React.ReactNode;
  title?: string;
};

const DialogModal = ({ onChangeOpen, children, open, title }: DialogModalProps) => (
  <Dialog.Root open={open} onOpenChange={onChangeOpen}>
    <Dialog.Portal>
      <Dialog.Overlay className={S.DialogOverlay} />
      <Dialog.Content className={S.DialogContent}>
        {title && (
          <Dialog.Title className={S.DialogTitle}>
            {title}

            <Dialog.Close asChild style={{ cursor: "pointer" }}>
              <Cross width={14} height={14} />
            </Dialog.Close>
          </Dialog.Title>
        )}

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogModal;
