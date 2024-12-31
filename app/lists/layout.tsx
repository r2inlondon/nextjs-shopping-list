import Link from "next/link";
import { LogoutButton } from "../ui/LogoutButton";

import Header from "@/app/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto h-90 w-full bg-white p-2.5 md:p-5 relative">
        <Header />

        {children}

        <div className="absolute bottom-10 right-0 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
