// components/LoginCard/index.tsx
import React from "react";

export default function LoginCard() {
  return (
    <div className="mx-auto mt-8 w-full max-w-xl rounded-xl bg-gray-100 px-8 py-8">
      {/* Icon + title */}
      <div className="mb-6 flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          {/* lock icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 9h-1V7a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V7zm7 12H7v-8h10v8z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Login Here</h2>
          <p className="mt-1 text-sm text-gray-500">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account.
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Username */}
        <div className="rounded-lg bg-white px-4 py-3 shadow-sm">
          <label className="block text-xs font-medium text-gray-400">
            Username / email address
          </label>
          <input
            type="text"
            className="mt-1 w-full border-none bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            placeholder="Username / email address"
          />
        </div>

        {/* Password */}
        <div className="rounded-lg bg-white px-4 py-3 shadow-sm">
          <label className="block text-xs font-medium text-gray-400">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full border-none bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          />
        </div>

        {/* Remember + forget */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="text-sm font-medium text-gray-700 underline"
          >
            Forget Password
          </button>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-red-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
        >
          <span>Login Now</span>
          <span className="text-lg">→</span>
        </button>
      </form>
    </div>
  );
}
