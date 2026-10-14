"use client";

import {
  ArrowRight,
  Check,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../../ScrollReveal";

const principles = [
  {
    number: "01",
    icon: Heart,
    title: "People before everything",
    description:
      "Your needs, preferences, and goals deserve to be heard. We put people at the heart of every wellness journey.",
    tone: "bg-[#e9f0e5]",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Clarity builds confidence",
    description:
      "Straightforward information and thoughtful guidance can help you make more informed everyday choices.",
    tone: "bg-[#f1e9df]",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Small steps, lasting habits",
    description:
      "Wellbeing isn't about perfection. It's about building realistic routines that work for your life.",
    tone: "bg-[#e9e8f0]",
  },
];

const promises = [
  "A personal, thoughtful approach",
  "Practical everyday wellness guidance",
  "Progress at your own pace",
];

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-[#f0f1e9] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-36 xl:px-24"
    >
      <style>{`
        @keyframes approach-glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.75;
          }
        }

        @keyframes approach-heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.12); }
          28% { transform: scale(1); }
          42% { transform: scale(1.06); }
          56% { transform: scale(1); }
        }

        .approach-glow {
          animation: approach-glow 8s ease-in-out infinite;
        }

        .approach-card {
          transition:
            transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 400ms ease,
            border-color 300ms ease,
            background-color 300ms ease;
        }

        .approach-card:hover {
          transform: translateY(-6px);
          border-color: #d6e0cf;
          background-color: #fff;
          box-shadow: 0 22px 55px rgba(38, 55, 46, 0.08);
        }

        .approach-icon {
          transition:
            transform 350ms ease,
            box-shadow 350ms ease;
        }

        .approach-card:hover .approach-icon {
          transform: rotate(-6deg) scale(1.06);
          box-shadow: 0 8px 20px rgba(38, 55, 46, 0.08);
        }

        .approach-number {
          transition: color 300ms ease;
        }

        .approach-card:hover .approach-number {
          color: #71876a;
        }

        .approach-promise {
          isolation: isolate;
          box-shadow: 0 24px 70px rgba(33, 76, 59, 0.12);
        }

        .approach-promise-heart {
          animation: approach-heartbeat 3.5s ease-in-out infinite;
        }

        .approach-promise-item {
          transition: padding-left 300ms ease;
        }

        .approach-promise-item:hover {
          padding-left: 5px;
        }

        .approach-check {
          transition:
            transform 300ms ease,
            background-color 300ms ease;
        }

        .approach-promise-item:hover .approach-check {
          transform: rotate(-7deg) scale(1.08);
          background-color: white;
        }

        .approach-cta-arrow {
          transition: transform 300ms ease;
        }

        .approach-cta:hover .approach-cta-arrow {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .approach-glow,
          .approach-promise-heart {
            animation: none !important;
          }

          .approach-card,
          .approach-icon,
          .approach-number,
          .approach-promise-item,
          .approach-check,
          .approach-cta-arrow {
            transition: none !important;
          }

          .approach-card:hover {
            transform: none;
          }

          .approach-promise-item:hover {
            padding-left: 0;
          }
        }
      `}</style>

      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="approach-glow absolute -right-24 top-0 size-80 rounded-full bg-white/80 blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-[#dce5d4]/70 blur-[100px]" />
        <div className="absolute right-[8%] top-24 hidden size-28 rounded-full border border-[#d8dfd1] lg:block" />
        <div className="absolute right-[9.5%] top-[6.5rem] hidden size-20 rounded-full border border-[#d8dfd1]/70 lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section heading */}
        <ScrollReveal direction="up" duration={800}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-[#dfe5d8] bg-white/60 px-4 py-2.5">
              <Sparkles size={14} className="text-[#829775]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#788a70] sm:text-[11px]">
                The Wellora philosophy
              </span>
            </span>

            <h2
              id="approach-heading"
              className="mt-7 text-[clamp(2.8rem,6vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.07em] text-[#26372e]"
            >
              A gentler way to{" "}
              <span className="font-serif font-normal italic text-[#829775]">
                feel better.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[610px] text-sm leading-8 text-[#737d72] sm:text-base">
              Wellbeing doesn't need to feel overwhelming. We believe
              the best approach starts with listening, builds on trust,
              and makes room for progress at your own pace.
            </p>
          </div>
        </ScrollReveal>

        {/* Principles */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <ScrollReveal
                key={principle.number}
                direction="up"
                delay={index * 120}
                duration={750}
              >
                <article className="approach-card group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-sm shadow-[#26372e]/[0.03] backdrop-blur-sm sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-[#e9f0e5]/60 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  />

                  <div className="relative flex items-center justify-between">
                    <div
                      className={`approach-icon flex size-[58px] items-center justify-center rounded-[1.2rem] ${principle.tone} text-[#3e6045]`}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </div>

                    <span className="approach-number font-serif text-lg italic text-[#a1aa99]">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="relative mt-9 text-[1.45rem] font-medium leading-tight tracking-[-0.04em] text-[#293c2e] sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-[#737d72]">
                    {principle.description}
                  </p>

                  <div className="relative mt-auto flex items-center gap-3 pt-8 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#71876a] sm:text-[10px]">
                    <span className="h-px w-6 bg-[#a5b69a] transition-all duration-500 group-hover:w-10" />
                    Our guiding principle
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Brand promise */}
        <ScrollReveal direction="up" delay={100} duration={850}>
          <div className="approach-promise relative mt-8 grid gap-9 overflow-hidden rounded-[1.75rem] bg-[#214c3b] p-7 text-white sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12 xl:p-14">
            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="approach-glow pointer-events-none absolute -right-16 -top-28 -z-0 size-72 rounded-full bg-[#779b76]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-[35%] -z-0 size-64 rounded-full border border-white/[0.08]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-[39%] -z-0 size-48 rounded-full border border-white/[0.06]"
            />

            <div className="relative z-10">
              <span className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <Heart
                  size={22}
                  strokeWidth={1.5}
                  className="approach-promise-heart"
                />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8d8c0]">
                Your wellbeing matters
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.7rem]">
                Make space for a healthier you.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#d0ddcd]">
                Start where you are. Focus on what matters. Let better
                habits grow one day at a time.
              </p>
            </div>

            <div className="relative z-10 lg:justify-self-end lg:w-full lg:max-w-md">
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c8d8c0]">
                What you can expect
              </div>

              <div className="space-y-4">
                {promises.map((promise, index) => (
                  <ScrollReveal
                    key={promise}
                    direction="right"
                    delay={index * 90}
                    duration={600}
                  >
                    <div className="approach-promise-item flex items-center gap-3 border-b border-white/15 pb-4 last:border-0 last:pb-0">
                      <span className="approach-check flex size-7 shrink-0 items-center justify-center rounded-full bg-[#dce8d4] text-[#214c3b]">
                        <Check size={15} strokeWidth={2.5} />
                      </span>

                      <span className="text-sm text-[#f1f4ed]">
                        {promise}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <a
                href="#contact"
                className="approach-cta group mt-8 inline-flex min-h-[50px] items-center gap-3 rounded-full bg-[#f4f4eb] px-6 text-sm font-medium text-[#214c3b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dfe8d9] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Take the next step
                <ArrowRight
                  size={17}
                  className="approach-cta-arrow"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
