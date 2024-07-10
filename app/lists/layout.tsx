import Link from "next/link";
import ModalButton from "../ui/modal-button";

import Header from "@/app/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto h-90 w-full bg-white p-2.5 md:p-5">
        <Header />
        <div className="my-2.5 flex justify-end md:my-4">
          <ModalButton txt={"New List +"} />
        </div>
        {children}
      </div>
    </div>
  );
}
