import RegisterForm from "../ui/register-form";
import Link from "next/link";

function page() {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="md:w-550 m-auto w-full bg-white p-2.5 md:p-5">
        <RegisterForm />
        <div className="my-4 flex justify-center">
          <p className="text-md text-txt-pri-color md:text-xl">Back to</p>
          <Link href="/">
            <span className="text-md px-2 text-blue-600 md:text-xl">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
