"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong");
        return;
      }

      setStatus("success");
      setMessage("You're on the list! Check your email.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading" || status === "success"}
          placeholder="you@email.com"
          className="flex-1 rounded-xl border border-findivo-200 bg-cream-card px-4 py-3 text-sm text-findivo-900 outline-none ring-amber-400 focus:ring-2 disabled:opacity-60 dark:border-findivo-700 dark:bg-findivo-800 dark:text-cream"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-findivo-900 transition hover:bg-amber-300 disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-center text-sm ${
            status === "error" ? "text-red-600" : "text-amber-600 dark:text-amber-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
