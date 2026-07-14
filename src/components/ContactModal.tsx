"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { personal } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "website visitor"}`
  )}&body=${encodeURIComponent(`Name: ${name || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleClose() {
    onClose();
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setCopied(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl sm:p-8"
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Send me a message</h3>
                {status === "idle" && (
                  <p className="mt-1 text-sm text-muted">
                    This sends straight to my inbox — no email app needed.
                  </p>
                )}
              </div>
              <button
                aria-label="Close"
                onClick={handleClose}
                className="text-muted transition-colors hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {status === "sent" ? (
              <div className="space-y-4">
                <p className="text-sm text-foreground/85">
                  Thanks — your message is on its way. I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Done
                </button>
              </div>
            ) : status === "error" ? (
              <div className="space-y-4">
                <p className="text-sm text-foreground/85">
                  Something went wrong sending that automatically. Use either option below instead:
                </p>
                <div className="rounded-lg border border-border bg-surface-2 p-4 text-sm">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="font-medium text-accent underline underline-offset-2"
                    >
                      Open in email app
                    </a>
                    <span className="text-muted">or</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface"
                    >
                      {copied ? "Copied!" : `Copy ${personal.email}`}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-muted">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="I'd like to talk about..."
                    className="w-full resize-none rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
