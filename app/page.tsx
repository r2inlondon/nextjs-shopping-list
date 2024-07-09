import Link from "next/link";

import LoginForm from "./ui/login-form";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto w-full bg-white p-2.5 md:p-5">
        <LoginForm />
        <div>
          <span className="text-md text-txt-pri-color md:text-xl">
            Need an account?
          </span>
          <Link href="/register">
            <span className="text-md px-2 text-blue-600 md:text-xl">
              SignUp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
