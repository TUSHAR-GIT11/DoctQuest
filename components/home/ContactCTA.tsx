
"use client";

import { useState, type FormEvent } from "react";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tushargupta10th@gmail.com",
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

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Message submission failed");
      }

      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus(
        "Message could not be sent. Please check your FormSubmit activation."
      );
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
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[#214c3b]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 focus:ring-[#829775]/20"
            />
          </div>

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="w-full rounded-full bg-[#214c3b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173b2d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              role="status"
              className="text-center text-sm text-[#214c3b]"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
