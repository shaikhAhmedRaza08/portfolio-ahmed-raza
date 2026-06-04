"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-[#e2e8f0] " +
  "placeholder:text-[#e2e8f0]/30 outline-none transition-colors focus:border-accent-violet/50";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-white/[0.07] bg-white/3 p-7 sm:p-9"
      noValidate
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] text-[#e2e8f0]/60">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] text-[#e2e8f0]/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-[13px] text-[#e2e8f0]/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me about your project…"
            className={cn(inputClass, "resize-y")}
          />
        </div>

        {/* Honeypot — bots fill this; humans don't see it. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-accent-violet to-accent-violet-dark py-3 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Message
          </>
        )}
      </button>

      <div aria-live="polite" className="min-h-6">
        {status === "success" && (
          <p className="mt-3 flex items-center gap-2 text-[13px] text-green-400">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && error && (
          <p className="mt-3 flex items-center gap-2 text-[13px] text-red-400">
            <AlertCircle className="h-4 w-4" aria-hidden />
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
