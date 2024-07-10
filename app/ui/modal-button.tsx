"use client";

import { Button } from "@headlessui/react";
import { useState } from "react";
import MyModal from "./myModal";

interface IProps {
  txt: string;
}

export default function ModalButton({ txt }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="inline-flex justify-center rounded-md border border-transparent bg-btn-color px-4 py-2 text-base text-lg font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-btn-color-hover sm:ml-3 sm:w-auto"
      >
        {txt}
      </Button>
      <MyModal isOpen={isOpen} onClose={close} />
    </>
  );
}
