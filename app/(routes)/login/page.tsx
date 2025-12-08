"use client";

import React, { useState } from "react";
import { apiFetch } from "@/app/_utility/api";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    const data = await apiFetch<{ message: string; username: string }>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );
    
    /* TODO - check for solution on proper error handling */
    if (data === null) {
      setError("Login failed. Please check your credentials.");
      setLoading(false);
      return;
    }
    
    if (data.message) {
      setSuccessMessage(`Welcome, ${data.message}!`);
      setLoading(false);
      
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return;
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-4 bg-white p-8 rounded shadow-md sm:w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            disabled={loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-40 text-white py-2 rounded transition duration-500 flex items-center justify-center ${
            loading ? "bg-gray-500 cursor-not-allowed pointer-events-none" : "bg-black/80 hover:bg-black cursor-pointer"
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
