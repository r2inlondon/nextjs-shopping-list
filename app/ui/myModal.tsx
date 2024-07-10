"use client";
import { Fragment } from "react";

import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function MyModal({ isOpen, onClose, children }: IProps) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 "
      enterTo="opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className="fixed inset-0 bg-slate-500 bg-opacity-75 backdrop-blur-sm backdrop-filter"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="data-[onClosed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white p-6 shadow-xl duration-300 ease-out data-[onClosed]:opacity-0">
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
