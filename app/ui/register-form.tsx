"use client";

import { useFormState } from "react-dom";

import { IRegisterState, createLogin } from "@/app/lib/actions";

export default function RegisterForm() {
  const initialState: IRegisterState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createLogin, initialState);

  return (
    <form action={formAction}>
      <div className="my-4 flex justify-between">
        <div>
          <input
            className="text-md w-11/12 rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
            type="text"
            name="firstName"
            placeholder="First name"
          />
        </div>
        <div>
          <input
            className="text-md w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
            type="text"
            name="lastName"
            placeholder="Last name"
            autoComplete="new-password"
          />
        </div>
      </div>
      {(state.errors?.firstName || state.errors?.lastName) && (
        <div className="flex justify-between">
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.firstName?.map((error: string) => (
              <p className="text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.lastName &&
              state.errors.lastName.map((error: string) => (
                <p className="text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      )}
      <input
        className="text-md my-4 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
        type="text"
        name="email"
        autoComplete="password"
        placeholder="Email"
      />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <input
        className="text-md my-4 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        name="password"
      />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.password &&
          state.errors.password.map((error: string) => (
            <p className="text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <input
        className="text-md my-4 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-xl"
        type="password"
        name="confirmPassword"
        autoComplete="new-password"
        placeholder="Confirm password"
      />
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.confirmPassword &&
          state.errors.confirmPassword.map((error: string) => (
            <p className="text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:my-8 md:text-lg"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
