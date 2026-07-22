"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// Get your free access key at https://web3forms.com (enter your email,
// the key is sent instantly) and paste it here:
const WEB3FORMS_ACCESS_KEY = "8788de5f-b283-421f-ab60-611be758ef7b";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-600 dark:focus:border-white";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "Project inquiry — Kesho Labs website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
          <Check className="h-5 w-5" />
        </span>
        <p className="text-lg font-semibold text-zinc-900 dark:text-white">
          Message sent.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Thanks for reaching out — we usually reply within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot for spam bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@business.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white"
        >
          Your business
        </label>
        <input
          id="business"
          name="business"
          type="text"
          placeholder="e.g. retail shop, restaurant, studio"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-zinc-900 dark:text-white"
        >
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the problem you want software to solve…"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && <ArrowRight className="h-4 w-4" />}
        </button>
        {status === "error" && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Something went wrong — try WhatsApp or email instead.
          </p>
        )}
      </div>
    </form>
  );
}
