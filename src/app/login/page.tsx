"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowOtpModal(true);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updated = [...otpValues];
    updated[index] = value;
    setOtpValues(updated);
  };

  const closeModal = () => {
    setShowOtpModal(false);
    setOtpValues(Array(6).fill(""));
  };

  return (
    <div className="p-8 flex-1 bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Login Page</h1>
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8 p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
          >
            Login
          </button>
        </form>
      </div>

      {showOtpModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl shadow-black/20">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Enter 6-digit code</h2>
                <p className="mt-1 text-sm text-slate-600">Type the verification code from your login prompt.</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-slate-500 hover:text-slate-900 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid grid-cols-6 gap-3">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={value}
                  onChange={(event) => handleOtpChange(index, event.target.value)}
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white text-center text-2xl font-semibold text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
