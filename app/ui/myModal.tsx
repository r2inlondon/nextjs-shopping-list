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
        className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm backdrop-filter"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="data-[onClosed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white p-6 shadow-xl backdrop-blur-2xl duration-300 ease-out data-[onClosed]:opacity-0">
              <DialogTitle as="h3" className="text-base/7 font-medium">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={onClose}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
