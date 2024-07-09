"use client";

import { useFormState } from "react-dom";

import { ILoginState, getLogin } from "@/app/lib/actions";

export default function LoginForm() {
  const initialState: ILoginState = { message: null, errors: {} };
  const [state, formAction] = useFormState(getLogin, initialState);

  return (
    <form action={formAction} className="my-6 w-full md:my-8">
      <input
        className="text-md my-4 w-full rounded-sm border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
        type="text"
        placeholder="Email address"
        name="email"
        // autoComplete="new-password"
      />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <input
        className="text-md my-4 w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:border-indigo-500 focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
        type="password"
        autoComplete="new-password"
        placeholder="Password"
        name="password"
      />
      {state.errors?.password &&
        state.errors.password.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      <div className="my-8 flex justify-between">
        <button
          type="submit"
          className="bg-btn-color hover:bg-btn-color-hover inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 focus:outline-cyan-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 md:text-lg"
        >
          Login
        </button>
      </div>
    </form>
  );
}
