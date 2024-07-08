"use client";

import { createLogin } from "@/app/lib/actions";

export default function RegisterForm() {
  return (
    <form action={createLogin}>
      <div className="my-6 flex justify-between md:my-8">
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
      <input
        className="text-md my-6 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:my-8 md:text-xl"
        type="text"
        name="email"
        autoComplete="password"
        placeholder="Email"
      />
      <input
        className="text-md my-6 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:my-8 md:text-xl"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />

      <input
        className="text-md my-6 block w-full rounded-md border-gray-500 py-2 pl-2 shadow-md focus:shadow-lg focus:shadow-green-900 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:my-8 md:text-xl"
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="Confirm password"
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="mt-2 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:my-8 md:text-lg"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
