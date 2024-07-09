import Link from "next/link";

import Header from "@/app/ui/header";
import Modal from "@/app/ui/modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto w-full bg-white p-2.5 md:p-5">
        <Header />
        {children}
        <Modal />
      </div>
    </div>
  );
}
