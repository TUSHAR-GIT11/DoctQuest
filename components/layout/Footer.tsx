
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  MoveUpRight,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#approach" },
];

export default function Footer() {
  return (
    <footer
      className="wellora-footer relative isolate overflow-hidden bg-[#f8f7f1] px-5 sm:px-8 lg:px-16 xl:px-24"
      aria-label="Website footer"
    >
      <style>{`
        @keyframes footer-reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes footer-heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        @keyframes footer-glow {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }
          50% {
            opacity: .65;
            transform: scale(1.08);
          }
        }

        .footer-reveal {
          opacity: 0;
          animation: footer-reveal 700ms cubic-bezier(.2,.7,.2,1) forwards;
        }

        .footer-delay-1 { animation-delay: 100ms; }
        .footer-delay-2 { animation-delay: 200ms; }
        .footer-delay-3 { animation-delay: 300ms; }
        .footer-delay-4 { animation-delay: 400ms; }

        .footer-glow {
          animation: footer-glow 12s ease-in-out infinite;
        }

        .footer-logo-icon {
          transition:
            transform 350ms cubic-bezier(.2,.7,.2,1),
            background-color 300ms ease,
            box-shadow 300ms ease;
        }

        .footer-logo:hover .footer-logo-icon {
          transform: rotate(-8deg) scale(1.06);
          background-color: #dce8d4;
          box-shadow: 0 8px 20px rgba(33,76,59,.12);
        }

        .footer-logo-heart {
          transition: transform 350ms ease;
        }

        .footer-logo:hover .footer-logo-heart {
          transform: scale(1.1);
        }

        .footer-link {
          position: relative;
          width: fit-content;
          transition: color 250ms ease, transform 250ms ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -5px;
          left: 0;
          height: 1px;
          background: #829775;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 300ms ease;
        }

        .footer-link:hover {
          color: #214c3b;
          transform: translateX(3px);
        }

        .footer-link:hover::after {
          transform: scaleX(1);
        }

        .footer-message {
          transition: color 300ms ease, transform 300ms ease;
        }

        .footer-message:hover {
          color: #31543a;
          transform: translateX(3px);
        }

        .footer-heartbeat {
          animation: footer-heartbeat 2.8s ease-in-out infinite;
        }

        .footer-top-button {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background-color 300ms ease,
            box-shadow 300ms ease;
        }

        .footer-top-button:hover {
          transform: translateY(-3px);
          border-color: #829775;
          background-color: #e9f0e5;
          box-shadow: 0 8px 20px rgba(33,76,59,.08);
        }

        .footer-top-arrow {
          transition: transform 300ms ease;
        }

        .footer-top-button:hover .footer-top-arrow {
          transform: translate(2px,-2px);
        }

        .footer-action-arrow {
          transition: transform 300ms ease;
        }

        .footer-action:hover .footer-action-arrow {
          transform: translate(4px,0);
        }

        .footer-divider {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(130,151,117,.4),
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-reveal {
            opacity: 1;
            animation: none;
            transform: none;
          }

          .footer-glow,
          .footer-heartbeat {
            animation: none;
          }

          .footer-logo-icon,
          .footer-logo-heart,
          .footer-link,
          .footer-link::after,
          .footer-message,
          .footer-top-button,
          .footer-top-arrow,
          .footer-action-arrow {
            transition: none;
          }

          .footer-logo:hover .footer-logo-icon,
          .footer-link:hover,
          .footer-message:hover,
          .footer-top-button:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="footer-glow pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-[#829775]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-px w-full footer-divider"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-[#e3e5da] py-14 sm:py-16 lg:grid-cols-[1.3fr_0.7fr_0.85fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div className="footer-reveal footer-delay-1 max-w-sm">
            <Link
              href="#home"
              aria-label="Wellora home"
              className="footer-logo group inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
            >
              <span className="footer-logo-icon flex size-12 items-center justify-center rounded-full bg-[#e4ebe0] text-[#214c3b]">
                <Heart
                  size={22}
                  strokeWidth={1.7}
                  className="footer-logo-heart"
                />
              </span>

              <span className="text-3xl font-bold tracking-[-0.065em] text-[#214c3b]">
                wellora<span className="text-[#a4b88d]">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#737d72]">
              A more thoughtful approach to everyday wellbeing. Discover a
              little more care, a little more balance, and a little more you.
            </p>

            <a
              href="#contact"
              className="footer-action group mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#31543a] transition-colors hover:text-[#829775] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
            >
              Let&apos;s connect
              <ArrowRight
                size={16}
                className="footer-action-arrow"
              />
            </a>

            <div className="mt-8 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#829775]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a8276]">
                Your wellbeing, your way
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-reveal footer-delay-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#293c2e]">
              Explore
            </h2>

            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link inline-flex items-center gap-2 rounded-sm text-sm text-[#737d72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Philosophy */}
          <div className="footer-reveal footer-delay-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#293c2e]">
              Our philosophy
            </h2>

            <p className="footer-message mt-6 w-fit font-serif text-3xl leading-snug tracking-tight text-[#526b50] sm:text-4xl">
              Feel better.
              <br />
              Live a little lighter.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#737d72]">
              Small steps can make room for meaningful change. Start where you
              are and grow at your own pace.
            </p>

            <Link
              href="#approach"
              className="footer-action group mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#31543a] transition-colors hover:text-[#829775] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775]"
            >
              Discover our approach
              <ArrowUpRight
                size={16}
                className="footer-action-arrow"
              />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-reveal footer-delay-4 flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-[#7a8276]">
            © 2026 Wellora. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[11px] text-[#7a8276]">
            Made with
            <Heart
              size={12}
              className="footer-heartbeat fill-[#829775] text-[#829775]"
              aria-label="love"
            />
            for better everyday wellbeing.
          </p>

          <Link
            href="#home"
            className="footer-top-button group inline-flex min-h-10 items-center gap-2 self-start rounded-full border border-[#dfe4d9] px-4 py-2.5 text-xs font-medium text-[#405342] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#829775] sm:self-auto"
          >
            Back to top
            <MoveUpRight size={14} className="footer-top-arrow" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
