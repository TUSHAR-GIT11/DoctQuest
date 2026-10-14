
"use client";

import { useState, type FormEvent } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 100) {
      newErrors.name = "Name cannot exceed 100 characters.";
    } else if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(trimmedName)) {
      newErrors.name = "Enter a valid name.";
    }

    if (!trimmedEmail) {
      newErrors.email = "Email is required.";
    } else if (trimmedEmail.length > 254) {
      newErrors.email = "Email cannot exceed 254 characters.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Message is required.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (trimmedMessage.length > 5000) {
      newErrors.message = "Message cannot exceed 5000 characters.";
    }

    return newErrors;
  }

  function inputClass(hasError: boolean) {
    return `w-full rounded-lg border ${
      hasError ? "border-red-500" : "border-gray-300"
    } px-4 py-3 text-sm outline-none transition focus:border-[#829775] focus:ring-2 ${
      hasError ? "focus:ring-red-200" : "focus:ring-[#829775]/20"
    }`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("Please correct the highlighted fields.");
      return;
    }

    setIsSending(true);

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
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _subject: `New DoctQuest message from ${name.trim()}`,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

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
      setErrors({});
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
          noValidate
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
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              onBlur={() => {
                const validationErrors = validateForm();
                setErrors((prev) => ({ ...prev, name: validationErrors.name }));
              }}
              placeholder="Enter your name"
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={inputClass(Boolean(errors.name))}
            />

            {errors.name && (
              <p id="contact-name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              onBlur={() => {
                const validationErrors = validateForm();
                setErrors((prev) => ({ ...prev, email: validationErrors.email }));
              }}
              placeholder="Enter your email"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={inputClass(Boolean(errors.email))}
            />

            {errors.email && (
              <p id="contact-email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
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
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
              }}
              onBlur={() => {
                const validationErrors = validateForm();
                setErrors((prev) => ({ ...prev, message: validationErrors.message }));
              }}
              placeholder="Write your message here..."
              rows={5}
              minLength={10}
              maxLength={5000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={`${inputClass(Boolean(errors.message))} resize-y`}
            />

            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
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
              className={`break-words text-center text-sm ${
                status.startsWith("Failed") ||
                status.startsWith("Unable") ||
                status.startsWith("Please")
                  ? "text-red-600"
                  : "text-[#214c3b]"
              }`}
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
