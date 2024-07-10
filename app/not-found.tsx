import Link from "next/link";

import { Button } from "@headlessui/react";

function NotFoundPage() {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto flex h-90 w-full items-center bg-white p-2.5 text-center md:p-5">
        <div className="m-auto">
          <h1 className="font-semibold">404 - Nothing to see here</h1>
          <Link href={"/"}>
            <Button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none md:my-8 md:text-lg">
              Back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
