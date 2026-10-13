
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Have a question?",
    description: "Reach out and tell us what's on your mind.",
    action: "Send us an email",
    href: "mailto:hello@wellora.example",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "Ready to explore?",
    description: "Take the first step towards everyday wellbeing.",
    action: "Discover our approach",
    href: "#approach",
    external: false,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="contact-section relative isolate overflow-hidden bg-[#173b2d] px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
    >
      <style>{`
        @keyframes contact-reveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contact-ring {
          0%, 100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: rotate(8deg) scale(1.04);
            opacity: 0.7;
          }
        }

        @keyframes contact-glow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translate3d(12px, -14px, 0) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes contact-sparkle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(15deg) scale(1.15);
          }
        }

        @keyframes contact-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        .contact-reveal {
          opacity: 0;
          animation: contact-reveal 750ms cubic-bezier(.2,.7,.2,1) forwards;
        }

        .contact-delay-1 {
          animation-delay: 100ms;
        }

        .contact-delay-2 {
          animation-delay: 200ms;
        }

        .contact-delay-3 {
          animation-delay: 300ms;
        }

        .contact-delay-4 {
          animation-delay: 400ms;
        }

        .contact-ring {
          transform-origin: center;
          animation: contact-ring 14s ease-in-out infinite;
        }

        .contact-ring-inner {
          animation-delay: -6s;
        }

        .contact-glow {
          animation: contact-glow 10s ease-in-out infinite;
        }

        .contact-sparkle {
          animation: contact-sparkle 3s ease-in-out infinite;
        }

        .contact-heart {
          animation: contact-heart 3s ease-in-out infinite;
        }

        .contact-card {
          transition:
            transform 350ms cubic-bezier(.2,.7,.2,1),
            border-color 350ms ease,
            background-color 350ms ease,
            box-shadow 350ms ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(220,232,212,.3);
          background-color: rgba(255,255,255,.09);
          box-shadow: 0 18px 40px rgba(0,0,0,.12);
        }

        .contact-card-icon {
          transition:
            transform 350ms cubic-bezier(.2,.7,.2,1),
            background-color 350ms ease;
        }

        .contact-card:hover .contact-card-icon {
          transform: rotate(-6deg) scale(1.06);
          background-color: #f0f4e9;
        }

        .contact-card-arrow {
          transition: transform 300ms ease;
        }

        .contact-card:hover .contact-card-arrow {
          transform: translate(3px,-3px);
        }

        .contact-cta-arrow,
        .contact-link-arrow {
          transition: transform 300ms ease;
        }

        .contact-main-cta:hover .contact-cta-arrow,
        .contact-philosophy-link:hover .contact-link-arrow {
          transform: translateX(4px);
        }

        .contact-quote {
          transition:
            transform 350ms ease,
            border-color 350ms ease,
            background-color 350ms ease;
        }

        .contact-quote:hover {
          transform: translateY(-3px);
          border-color: rgba(193,209,181,.4);
          background-color: rgba(193,209,181,.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal {
            opacity: 1;
            animation: none;
            transform: none;
          }

          .contact-ring,
          .contact-glow,
          .contact-sparkle,
          .contact-heart {
            animation: none;
          }

          .contact-card,
          .contact-card-icon,
          .contact-card-arrow,
          .contact-cta-arrow,
          .contact-quote,
          .contact-link-arrow {
            transition: none;
          }

          .contact-card:hover,
          .contact-quote:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="contact-ring pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10 sm:size-[28rem]"
      />

      <div
        aria-hidden="true"
        className="contact-ring contact-ring-inner pointer-events-none absolute -right-10 -top-10 size-48 rounded-full border border-white/[0.07] sm:size-80"
      />

      <div
        aria-hidden="true"
        className="contact-glow pointer-events-none absolute -bottom-36 -left-28 size-96 rounded-full bg-[#89a17c]/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="contact-glow pointer-events-none absolute -left-20 top-1/4 size-64 rounded-full bg-[#89a17c]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        {/* Main content */}
        <div className="max-w-2xl">
          <span className="contact-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0ddc8] sm:text-xs">
            <Sparkles size={14} className="contact-sparkle" />
            Your next chapter starts here
          </span>

          <h2
            id="contact-heading"
            className="contact-reveal contact-delay-1 mt-7 text-5xl font-medium leading-[1.04] tracking-[-0.055em] text-[#f7f6ef] sm:text-6xl lg:text-7xl"
          >
            A healthier you
            <br />
            starts with{" "}
            <span className="font-serif font-normal italic text-[#c1d1b5]">
              hello.
            </span>
          </h2>

          <p className="contact-reveal contact-delay-2 mt-6 max-w-lg text-sm leading-8 text-[#c0cec0] sm:text-base">
            Every meaningful change begins somewhere. Have a question or want
            to learn more about Wellora? We&apos;d love to hear from you.
          </p>

          <a
            href="mailto:hello@wellora.example"
            className="contact-reveal contact-delay-3 contact-main-cta group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#f4f4eb] px-7 text-sm font-semibold text-[#173b2d] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#dfe8d9] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dce8d4]"
          >
            Get in touch
            <ArrowRight size={18} className="contact-cta-arrow" />
          </a>

          <div className="contact-reveal contact-delay-4 mt-8 flex items-center gap-3 text-xs text-[#c0cec0]">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]">
              <Heart size={16} className="contact-heart" />
            </span>
            <span>A little more care. A lot more you.</span>
          </div>
        </div>

        {/* Contact cards */}
        <div className="space-y-4">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <Link
                key={option.title}
                href={option.href}
                aria-label={`${option.title}: ${option.action}`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
                className="contact-reveal contact-card group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dce8d4] sm:gap-5 sm:p-7"
              >
                <div className="contact-card-icon flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#dce8d4] text-[#214c3b]">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-base font-medium text-white sm:text-lg">
                    {option.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#c0cec0]">
                    {option.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#dce8d4]">
                    {option.action}
                    <ArrowRight size={14} className="contact-link-arrow" />
                  </span>
                </div>

                <ArrowUpRight
                  size={19}
                  className="contact-card-arrow shrink-0 text-[#b9cbb0]"
                />
              </Link>
            );
          })}

          <div className="contact-reveal contact-delay-4 contact-quote rounded-3xl border border-[#c1d1b5]/20 bg-[#c1d1b5]/[0.08] p-6 sm:p-7">
            <p className="font-serif text-2xl italic text-[#dce8d4]">
              “Wellness, on your terms.”
            </p>

            <p className="mt-3 text-xs leading-6 text-[#c0cec0]">
              A thoughtful approach to making everyday wellbeing feel more
              personal, approachable, and balanced.
            </p>

            <Link
              href="#approach"
              className="contact-philosophy-link mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#c1d1b5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dce8d4]"
            >
              Our philosophy
              <ArrowRight size={15} className="contact-link-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
