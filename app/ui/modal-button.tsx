"use client";

import { Button } from "@headlessui/react";
import { useState } from "react";
import MyModal from "./myModal";
import CreateListForm from "./lists/create-list-form";

interface IProps {
  txt: string;
  userId: string;
}

export default function ModalButton({ txt, userId }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        className="inline-flex justify-center rounded-md border border-transparent bg-btn-color px-4 py-2 text-lg font-semibold text-white duration-300 hover:scale-105 sm:ml-3 sm:w-auto"
      >
        {txt}
      </Button>
      <MyModal isOpen={isOpen} onClose={close}>
        <CreateListForm onClose={close} userId={userId} />
      </MyModal>
    </>
  );
}
