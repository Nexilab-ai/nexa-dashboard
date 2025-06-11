import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Nexa Dashboard – V2</h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        Welcome to your Nexa control center. Automate social media, email, and AI workflows internationally.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        <button className="rounded-2xl shadow p-4 text-lg font-semibold bg-white hover:bg-gray-100 border">
          🔗 Connect API
        </button>
        <button className="rounded-2xl shadow p-4 text-lg font-semibold bg-white hover:bg-gray-100 border">
          🧠 Post on X (Twitter)
        </button>
        <button className="rounded-2xl shadow p-4 text-lg font-semibold bg-white hover:bg-gray-100 border">
          📸 Post on Instagram
        </button>
        <button className="rounded-2xl shadow p-4 text-lg font-semibold bg-white hover:bg-gray-100 border">
          📩 Send Email from Zoho
        </button>
      </div>

      <p className="mt-12 text-sm text-gray-500 text-center">
        Nexa – Powered by the 100 Top Digital Figures Worldwide
      </p>
    </div>
  );
}