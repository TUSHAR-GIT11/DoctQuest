
"use client";

import { useState, type FormEvent } from "react";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ae2e31b809bf68592e2165cef5d324ea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New DoctQuest message from ${name}`,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      console.log("FormSubmit response:", result);

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(
          result.message || "FormSubmit rejected the request."
        );
      }

      setStatus("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error instanceof Error
          ? `Failed to send: ${error.message}`
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#f8f7f1] px-5 py-20 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#829775]">
            Contact Us
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#214c3b] sm:text-4xl">
            Send Us a Message
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Have a question? Fill out the form below and we&apos;ll get back
            to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-[#e5e6dc] bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Your Name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              maxLength={100}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              maxLength={254}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-full bg-[#214c3b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173b2d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="break-words text-center text-sm text-[#214c3b]"
            >
              {status}
            </p>
          )}

          <p className="text-center text-xs text-gray-500">
            Your message will be sent to our contact email.
          </p>
        </form>
      </div>
    </section>
  );
}
